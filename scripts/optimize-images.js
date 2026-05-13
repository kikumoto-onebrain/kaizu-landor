const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');

const images = [
  // Segment images: exibidas em ~560-584px → 800px (~1.4x retina), quality 80
  { file: 'problema-entrega.webp',  maxDim: 800, quality: 80 },
  { file: 'condominio-locker.webp', maxDim: 800, quality: 80 },
  { file: 'logistica-locker.webp',  maxDim: 800, quality: 80 },
  { file: 'industria-locker.webp',  maxDim: 800, quality: 80 },
  { file: 'varejo-locker.webp',     maxDim: 800, quality: 80 },
  // Utility images: exibidas em ~494×256px → 600px (~1.2x retina), quality 75
  { file: 'smartlocker.webp', maxDim: 600, quality: 75 },
  { file: 'app.webp',         maxDim: 600, quality: 75 },
];

async function optimizeAll() {
  for (const { file, maxDim, quality } of images) {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath)) { console.log(`SKIP: ${file} not found`); continue; }

    const before = fs.statSync(filePath).size;
    const tmpPath = filePath + '.tmp';

    const meta = await sharp(filePath).metadata();
    const needsResize = meta.width > maxDim || meta.height > maxDim;

    let pipeline = sharp(filePath);
    if (needsResize) pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
    pipeline = pipeline.webp({ quality });

    await pipeline.toFile(tmpPath);
    fs.renameSync(tmpPath, filePath);

    const after = fs.statSync(filePath).size;
    const afterMeta = await sharp(filePath).metadata();
    const saved = ((before - after) / before * 100).toFixed(1);
    console.log(`${file}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${saved}%) [${afterMeta.width}×${afterMeta.height}px]`);
  }
}

optimizeAll().catch(console.error);
