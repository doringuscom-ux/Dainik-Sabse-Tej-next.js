const sharp = require('sharp');
const path = require('path');

async function createOgImage() {
  const inputPath = path.join(__dirname, 'public/logo.png');
  const outputPath = path.join(__dirname, 'public/og-image.png');

  try {
    await sharp(inputPath)
      .resize(1000, 500, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .extend({
        top: 65,
        bottom: 65,
        left: 100,
        right: 100,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFile(outputPath);
    console.log('og-image.png created successfully!');
  } catch (error) {
    console.error('Error creating og-image:', error);
  }
}

createOgImage();
