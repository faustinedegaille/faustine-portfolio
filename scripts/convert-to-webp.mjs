import sharp from "sharp"
import { readdir, stat } from "fs/promises"
import { join, extname, basename } from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")

const DIRS = ["images", "projects"]
const EXTS = [".png", ".jpg", ".jpeg", ".PNG", ".JPG", ".JPEG"]

async function convertDir(dir) {
  const files = await readdir(dir)
  for (const file of files) {
    const ext = extname(file)
    if (!EXTS.includes(ext)) continue

    const inputPath = join(dir, file)
    const outputName = basename(file, ext) + ".webp"
    const outputPath = join(dir, outputName)

    const inputStat = await stat(inputPath)
    const inputKB = Math.round(inputStat.size / 1024)

    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath)

    const outputStat = await stat(outputPath)
    const outputKB = Math.round(outputStat.size / 1024)
    const savings = Math.round((1 - outputKB / inputKB) * 100)

    console.log(`✓ ${file} → ${outputName}  (${inputKB}KB → ${outputKB}KB, -${savings}%)`)
  }
}

for (const dirName of DIRS) {
  const dirPath = join(publicDir, dirName)
  console.log(`\n📁 ${dirName}/`)
  await convertDir(dirPath)
}

console.log("\nDone! Tu peux maintenant mettre à jour les références dans data/projects.ts et components/")
