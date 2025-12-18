const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const assetsDir = path.join(process.cwd(), "public/assets/images");
const outputFile = path.join(process.cwd(), "src/app/lib/assets-manifest.json");

const isImageFile = (file) => /\.(png|jpe?g|svg|gif)$/i.test(file);

function generateImageManifest() {
  const manifest = {};

  fs.readdirSync(assetsDir).forEach((folder) => {
    const folderPath = path.join(assetsDir, folder);

    if (fs.lstatSync(folderPath).isDirectory()) {
      const files = fs
        .readdirSync(folderPath)
        .filter(isImageFile)
        .map((file) => ({
          id: uuidv4(),
          src: `/assets/images/${folder}/${file}`,
          alt: file.replace(/\.(png|jpe?g|svg|gif)$/i, ""),
        }));

      manifest[folder] = files;
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2), "utf-8");
}

generateImageManifest();
