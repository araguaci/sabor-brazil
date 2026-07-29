from PIL import Image
from pathlib import Path

pub = Path(r"d:\ai-projects\sabor-brazil\public")
src = Image.open(pub / "icons" / "icon-512.png").convert("RGBA")

for size, path in [
    (512, pub / "icons" / "icon-512.png"),
    (192, pub / "icons" / "icon-192.png"),
    (180, pub / "apple-touch-icon.png"),
    (32, pub / "favicon-32.png"),
]:
    out = src.resize((size, size), Image.Resampling.LANCZOS)
    out.save(path, optimize=True)
    print(path.name, out.size, path.stat().st_size)

og = Image.open(pub / "og-default.png").convert("RGB")
target_w, target_h = 1200, 630
src_ratio = og.width / og.height
tgt_ratio = target_w / target_h
if src_ratio > tgt_ratio:
    new_w = int(og.height * tgt_ratio)
    left = (og.width - new_w) // 2
    og = og.crop((left, 0, left + new_w, og.height))
else:
    new_h = int(og.width / tgt_ratio)
    top = (og.height - new_h) // 2
    og = og.crop((0, top, og.width, top + new_h))
og = og.resize((target_w, target_h), Image.Resampling.LANCZOS)
og_path = pub / "og-default.png"
og.save(og_path, optimize=True, quality=90)
print("og-default.png", og.size, og_path.stat().st_size)
