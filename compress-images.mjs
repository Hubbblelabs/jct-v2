import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

    const originalSize = fs.statSync(filePath).size;
    let pipeline = sharp(filePath);

    if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 80 });
    }

    try {
        const buffer = await pipeline.toBuffer();
        const newSize = buffer.length;

        if (newSize < originalSize) {
            const tempPath = filePath + '.tmp';
            fs.writeFileSync(tempPath, buffer);
            fs.renameSync(tempPath, filePath);
            const saved = ((originalSize - newSize) / 1024).toFixed(2);
            console.log(`Compressed ${path.relative(PUBLIC_DIR, filePath)}: saved ${saved} KB`);
        } else {
            console.log(`Skipped ${path.relative(PUBLIC_DIR, filePath)}: already optimized (new size larger)`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

async function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            await walkDir(filePath);
        } else {
            await processFile(filePath);
        }
    }
}

console.log('Starting image compression...');
await walkDir(PUBLIC_DIR);
console.log('Image compression complete.');
