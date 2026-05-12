#!/usr/bin/env python3
"""
Generate assets/preview.mp4 — a seamlessly-looping animation of two sine
curves drifting past each other (an echo of Entry 02's "parallel near-misses"),
with site-style text overlaid via ffmpeg's drawtext filter.

Renders raw RGB frames in numpy and pipes them to a single ffmpeg call that
applies the text and encodes.

Run from repo root:  python3 tools/make_preview.py
"""
import math
import subprocess
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
FONT_REG = ROOT / "tools" / "SpaceMono-Regular.ttf"
FONT_BOLD = ROOT / "tools" / "SpaceMono-Bold.ttf"
OUT = ROOT / "assets" / "preview.mp4"

W, H = 960, 540
FPS = 30
DURATION = 6.0
N_FRAMES = int(FPS * DURATION)

# Site palette
BG   = np.array([0x0c, 0x0c, 0x0a], dtype=np.float32)  # --bg
BONE = np.array([0xec, 0xe4, 0xd3], dtype=np.float32)  # --bone
DIM  = np.array([0x8a, 0x84, 0x75], dtype=np.float32)  # --bone-dim
ACID = np.array([0xd6, 0xff, 0x3a], dtype=np.float32)  # --acid

# Where the curves live (lower portion — text sits above)
CURVE_CY = H * 0.70

xs = np.arange(W, dtype=np.float32)
ys = np.arange(H, dtype=np.float32).reshape(-1, 1)


def blend(img: np.ndarray, alpha: np.ndarray, color: np.ndarray) -> None:
    a = alpha[..., None]
    img += (color.reshape(1, 1, 3) - img) * a


def render_curve(img, y_of_x, color, thickness=1.4):
    d = ys - y_of_x.reshape(1, W)
    alpha = np.exp(-(d * d) / (2 * thickness * thickness))
    blend(img, alpha, color)


def render_dot(img, cx, cy, r, color):
    d = np.sqrt((xs.reshape(1, W) - cx) ** 2 + (ys - cy) ** 2)
    alpha = np.clip(r + 0.7 - d, 0.0, 1.0)
    blend(img, alpha, color)


def render_hline(img, y, color, alpha_val=0.08, thickness=0.8):
    d = ys - y
    alpha = np.exp(-(d * d) / (2 * thickness * thickness)) * alpha_val
    blend(img, np.broadcast_to(alpha, (H, W)), color)


def frame(t: float) -> np.ndarray:
    img = np.tile(BG, (H, W, 1)).astype(np.float32)

    render_hline(img, CURVE_CY, DIM, alpha_val=0.12)

    k = 2.0 * math.pi * 1.8
    amp = H * 0.14
    phase = 2.0 * math.pi * t
    y_a = CURVE_CY + amp * np.sin(k * xs / W + phase)
    y_b = CURVE_CY + amp * np.sin(k * xs / W - phase)

    render_curve(img, y_b, DIM, thickness=2.2)
    render_curve(img, y_a, BONE, thickness=1.5)

    align = 0.5 + 0.5 * math.cos(2.0 * math.pi * 2.0 * t)
    dot_color = DIM * (1.0 - align) + ACID * align
    for cx, y_fn in [(0, y_a), (W - 1, y_a), (0, y_b), (W - 1, y_b)]:
        render_dot(img, cx, float(y_fn[cx]), 3.5, dot_color)

    return np.clip(img, 0, 255).astype(np.uint8)


def drawtext(text: str, *, font: Path, size: int, color: str, x: str, y: str) -> str:
    # Escape characters that are special inside the filtergraph value.
    safe = text.replace("\\", "\\\\").replace(":", "\\:").replace("'", "\\'")
    font_path = str(font).replace("\\", "/").replace(":", "\\:")
    return (
        f"drawtext=fontfile='{font_path}':text='{safe}':"
        f"fontsize={size}:fontcolor={color}:x={x}:y={y}"
    )


def build_filter() -> str:
    layers = [
        # Status bar — top corners, small dim text
        drawtext("CH.01 / OPEN FREQUENCY", font=FONT_REG, size=14,
                 color="0x8a8475", x="40", y="32"),
        drawtext("RX 2026.05 / LOG_002", font=FONT_REG, size=14,
                 color="0x8a8475", x="w-text_w-40", y="32"),
        # Title
        drawtext("SIG/NAL.LOG", font=FONT_BOLD, size=96,
                 color="0xece4d3", x="(w-text_w)/2", y="130"),
        # Tagline
        drawtext("A TRANSMISSION LOG OF VISUAL THOUGHTS",
                 font=FONT_REG, size=16, color="0x8a8475",
                 x="(w-text_w)/2", y="245"),
        # End marker — bottom left, acid square + label, like the site footer
        drawtext("END OF TRANSMISSION", font=FONT_REG, size=12,
                 color="0x8a8475", x="40", y="h-32"),
    ]
    return ",".join(layers)


def main() -> None:
    if not FONT_REG.exists() or not FONT_BOLD.exists():
        raise SystemExit(f"Missing font files in {FONT_REG.parent}")
    OUT.parent.mkdir(parents=True, exist_ok=True)

    cmd = [
        "ffmpeg", "-y",
        "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{W}x{H}", "-r", str(FPS),
        "-i", "-",
        "-vf", build_filter(),
        "-c:v", "libx264", "-pix_fmt", "yuv420p",
        "-crf", "22", "-preset", "slow",
        "-movflags", "+faststart",
        "-loglevel", "error",
        str(OUT),
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    assert proc.stdin is not None
    for i in range(N_FRAMES):
        proc.stdin.write(frame(i / N_FRAMES).tobytes())
    proc.stdin.close()
    rc = proc.wait()
    if rc != 0:
        raise SystemExit(f"ffmpeg exited {rc}")
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()
