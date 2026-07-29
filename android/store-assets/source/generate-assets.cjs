const fs = require("node:fs");
const path = require("node:path");
const sharp = require("C:/Users/nicka/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const sourceDirectory = __dirname;
const outputDirectory = path.resolve(sourceDirectory, "..");
const projectDirectory = path.resolve(sourceDirectory, "..", "..", "..");

async function generate() {
  const appIcon = fs.readFileSync(path.join(sourceDirectory, "app-icon.svg"));
  await sharp(appIcon, { density: 192 })
    .resize(512, 512)
    .flatten({ background: "#07090e" })
    .ensureAlpha(1)
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDirectory, "app-icon-512.png"));

  const featureOverlay = fs.readFileSync(
    path.join(sourceDirectory, "feature-overlay.svg"),
  );
  await sharp(
    path.join(projectDirectory, "assets", "scenes", "fifth-5-last-horizon.webp"),
  )
    .resize(1024, 500, { fit: "cover", position: "centre" })
    .modulate({ brightness: 0.8, saturation: 0.85 })
    .composite([{ input: featureOverlay, top: 0, left: 0 }])
    .removeAlpha()
    .png({ compressionLevel: 9 })
    .toFile(path.join(outputDirectory, "feature-graphic-1024x500.png"));
}

generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
