const sharp = require('sharp');
const path = require('path');

async function createOgImage() {
  const inputPath = path.join(__dirname, 'public/logo.png');
  const outputPath = path.join(__dirname, 'public/og-image.png');

  try {
    // We want the logo to fit within a small safe area (e.g., 600x200)
    // so that even aggressive square cropping by WhatsApp won't cut it off.
    
    // First, let's create a 1200x630 white background
    const background = sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    });

    // Resize the logo to fit well within the safe area
    const logo = await sharp(inputPath)
      .resize(500, 250, { // Much smaller size
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent padding if needed
      })
      .toBuffer();

    // Composite the logo onto the center of the background
    await background
      .composite([
        {
          input: logo,
          gravity: 'center'
        }
      ])
      .toFile(outputPath);
      
    console.log('og-image.png created successfully with larger padding!');
  } catch (error) {
    console.error('Error creating og-image:', error);
  }
}

createOgImage();
