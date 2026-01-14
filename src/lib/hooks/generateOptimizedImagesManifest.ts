/**
 * Generate optimized WebP images and create a manifest.
 * -----------------------------------------------------
 * - Reads:  public/assets/images/<folders>/
 * - Writes: public/assets/optimized-images/<same-structure>/
 * - Outputs: src/lib/assets-manifest.json
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');

const rootDir = process.cwd();
const inputDir = path.join(rootDir, 'public/assets/images');
const outputDir = path.join(rootDir, 'public/assets/optimized-images');
const manifestFile = path.join(rootDir, 'src/lib/assets-manifest.json');

const isImageFile = file => /\.(png|jpe?g|svg|gif)$/i.test(file);
const isWebpFile = file => /\.webp$/i.test(file);

async function generateOptimizedManifest() {
  const manifest = {};

  console.log('🛠 Processing images...');
  fs.mkdirSync(outputDir, { recursive: true });

  const folders = fs.readdirSync(inputDir);
  for (const folder of folders) {
    const folderPath = path.join(inputDir, folder);
    if (!fs.lstatSync(folderPath).isDirectory()) continue;

    const optimizedFolderPath = path.join(outputDir, folder);
    fs.mkdirSync(optimizedFolderPath, { recursive: true });

    const files = fs.readdirSync(folderPath).filter(isImageFile);
    const entries = [];

    for (const file of files) {
      const name = path.parse(file).name;
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(optimizedFolderPath, `${name}.webp`);

      try {
        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
        console.log(`✅ Converted: ${folder}/${file} → ${name}.webp`);
      } catch (err) {
        console.warn(`⚠️ Skipped ${file}: ${err.message}`);
        continue;
      }

      entries.push({
        id: uuidv4(),
        src: `/assets/optimized-images/${folder}/${name}.webp`,
        alt: name,
      });
    }

    manifest[folder] = entries;
  }

  console.log('✅ Image optimization complete.');

  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`📦 Manifest written to ${manifestFile}`);
}

generateOptimizedManifest().catch(err => console.error('❌', err));
