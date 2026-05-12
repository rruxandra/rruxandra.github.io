#!/usr/bin/env python3
"""
Mirror Google Fonts WOFF2 files locally so the site has no external font deps.

Reads a Google Fonts CSS (saved to disk via curl with a desktop UA), extracts
the `/* latin */` @font-face blocks, downloads each .woff2 to assets/fonts/,
and writes a rewritten CSS pointing at the local copies.

Usage:
    python3 tools/fetch_fonts.py <input.css> <output.css> <name-prefix>
"""
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "assets" / "fonts"

BLOCK_RE = re.compile(
    r"/\*\s*(?P<subset>[a-z\-]+)\s*\*/\s*"
    r"(?P<block>@font-face\s*\{[^}]*\})",
    re.IGNORECASE,
)
URL_RE = re.compile(r"url\((?P<url>https://fonts\.gstatic\.com/[^)]+\.woff2)\)")
FAMILY_RE = re.compile(r"font-family:\s*'([^']+)'")
STYLE_RE = re.compile(r"font-style:\s*([^;]+);")
WEIGHT_RE = re.compile(r"font-weight:\s*([^;]+);")


def slug(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def main() -> None:
    in_path, out_path, prefix = sys.argv[1], sys.argv[2], sys.argv[3]
    css = Path(in_path).read_text()
    FONTS_DIR.mkdir(parents=True, exist_ok=True)

    out_blocks: list[str] = []
    counters: dict[str, int] = {}

    for m in BLOCK_RE.finditer(css):
        if m["subset"].lower() != "latin":
            continue
        block = m["block"]
        family = FAMILY_RE.search(block).group(1)
        style = STYLE_RE.search(block).group(1).strip()
        weight = WEIGHT_RE.search(block).group(1).strip().replace(" ", "-")
        url = URL_RE.search(block).group("url")

        key = f"{slug(family)}-{weight}-{style}"
        counters[key] = counters.get(key, 0) + 1
        suffix = f"-{counters[key]}" if counters[key] > 1 else ""
        local_name = f"{prefix}-{key}{suffix}.woff2"
        local_path = FONTS_DIR / local_name

        if not local_path.exists():
            print(f"  fetch {local_name}")
            with urllib.request.urlopen(url) as r, local_path.open("wb") as f:
                f.write(r.read())

        rewritten = URL_RE.sub(
            lambda _m, n=local_name: f"url(./fonts/{n})", block
        )
        out_blocks.append(rewritten)

    out_text = "\n".join(out_blocks) + "\n"
    Path(out_path).write_text(out_text)
    print(f"wrote {out_path} ({len(out_blocks)} face(s))")


if __name__ == "__main__":
    main()
