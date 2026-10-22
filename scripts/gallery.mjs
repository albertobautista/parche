// Builds the lookbook from gallery-source/: every photo becomes public/img/gallery/gallery-N.webp
// (longest side 1800px, EXIF orientation applied) and the list is written to src/data/gallery.generated.json.
// Run it with `npm run gallery` after replacing the photos in gallery-source/.
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "gallery-source");
const OUT_DIR = path.join(ROOT, "public/img/gallery");
const LIST = path.join(ROOT, "src/data/gallery.generated.json");
const ALT_FILE = path.join(SOURCE, "alt.json");

const MAX_SIZE = 1800;
const QUALITY = 80;
const DEFAULT_ALT = "Parché Studio lookbook: a one-of-one piece with a monogram patch, worn in Madrid";
const PHOTO = /\.(jpe?g|png|webp|avif|tiff?|heic|heif)$/i;

const files = (await readdir(SOURCE))
  .filter((f) => PHOTO.test(f) && !f.startsWith("."))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

if (files.length === 0) {
  console.error("No photos in gallery-source/. Nothing changed (the current gallery is kept).");
  process.exit(1);
}

// Optional alt text per original file name: { "IMG_1234.jpg": "Description" }.
let alts = {};
try {
  alts = JSON.parse(await readFile(ALT_FILE, "utf8"));
} catch (err) {
  if (err.code !== "ENOENT") throw new Error(`gallery-source/alt.json is not valid JSON: ${err.message}`);
}

// Convert everything first, so a bad photo never leaves the site with a half-built gallery.
const converted = [];
for (const file of files) {
  try {
    const input = path.join(SOURCE, file);
    const meta = await sharp(input).metadata();
    // A WebP that is already web-sized is copied as is, so it is not compressed twice.
    if (meta.format === "webp" && (meta.orientation ?? 1) === 1 && Math.max(meta.width, meta.height) <= MAX_SIZE) {
      converted.push({ file, data: await readFile(input), width: meta.width, height: meta.height });
      continue;
    }
    const { data, info } = await sharp(input)
      .rotate()
      .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toBuffer({ resolveWithObject: true });
    converted.push({ file, data, width: info.width, height: info.height });
  } catch (err) {
    console.error(`Could not read ${file}: ${err.message}`);
    console.error("Export it as JPG (or fix the file) and run `npm run gallery` again. Nothing changed.");
    process.exit(1);
  }
}

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const list = [];
for (const [i, photo] of converted.entries()) {
  const name = `gallery-${i + 1}.webp`;
  await writeFile(path.join(OUT_DIR, name), photo.data);
  list.push({
    src: `/img/gallery/${name}`,
    alt: alts[photo.file] ?? DEFAULT_ALT,
    width: photo.width,
    height: photo.height,
    original: photo.file,
  });
  console.log(`${photo.file} -> ${name} (${photo.width}x${photo.height}, ${Math.round(photo.data.length / 1024)} KB)`);
}

await writeFile(LIST, JSON.stringify(list, null, 2) + "\n");
console.log(`\n${list.length} photos ready in public/img/gallery/ and src/data/gallery.generated.json`);
