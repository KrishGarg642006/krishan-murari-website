const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OPTIMIZED_DIR = path.join(ASSETS_DIR, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR);
}

async function optimizeImages() {
  try {
    // Get all image files
    const files = fs.readdirSync(ASSETS_DIR);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.svg')) {
        const inputPath = path.join(ASSETS_DIR, file);
        const outputPath = path.join(OPTIMIZED_DIR, file);
        
        console.log(`Optimizing ${file}...`);
        
        if (file.endsWith('.png')) {
          // Optimize PNG
          await sharp(inputPath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(outputPath);
          
          // Convert to WebP
          const webpPath = path.join(OPTIMIZED_DIR, file.replace('.png', '.webp'));
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          console.log(`Created WebP version of ${file}`);
        } else if (file.endsWith('.svg')) {
          // Optimize SVG
          await sharp(inputPath)
            .toFile(outputPath);
        }
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 