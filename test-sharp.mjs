import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

console.log('Sharp is available:', typeof sharp);

// Mock function to test compression logic
async function compressImage(filePath) {
    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();
        console.log(`Processing ${filePath}: ${metadata.format} ${metadata.width}x${metadata.height}`);
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Just test on one known file if exists
const testFile = path.join(process.cwd(), 'public', 'jct_logo.svg'); // SVG might not work with sharp directly without librsvg, let's use a jpg if found
const testJpg = path.join(process.cwd(), 'public', 'images', 'visit-future.jpg'); // Found this in previous output

if (fs.existsSync(testJpg)) {
    compressImage(testJpg);
} else {
    console.log('Test file not found');
}
