"""Process the blurred B-330 teaser: detect subject bbox on a dark background, crop tight, pad to 16:9, save with transparent canvas."""
from PIL import Image, ImageChops
from pathlib import Path

SRC = Path(r"C:\Users\fatih\Downloads\bite330_1.png")
DST = Path(r"C:\Users\fatih\Documents\gimbal project\architecure\website-v2\public\media\b330.png")

TARGET_ASPECT = 16 / 9

src = Image.open(SRC).convert("RGBA")

# Bounding box from alpha channel (transparent bg).
bbox = src.getchannel("A").getbbox()
if bbox is None:
    raise SystemExit("no subject found")

cropped = src.crop(bbox)
cw, ch = cropped.size

# Padding similar to other product images.
margin_x = int(max(cw, ch) * 0.08)
margin_y = int(ch * 0.067)
target_h = ch + 2 * margin_y
target_w = max(int(target_h * TARGET_ASPECT), cw + 2 * margin_x)

# Transparent canvas — sits naturally on the card's dark image area.
canvas = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
canvas.paste(cropped, ((target_w - cw) // 2, (target_h - ch) // 2), cropped)
canvas.save(DST)
print(f"{SRC.name} {src.size} -> bbox {bbox} -> {DST.name} {canvas.size}")
