const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..');
const imageExtensions = ['.png', '.jpg', '.jpeg'];

// 画像ファイルを検索
const findImages = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });
};

// WebP形式に変換
const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

// メイン処理
const optimizeImages = async () => {
  const images = findImages(sourceDir);
  
  console.log('Found images:', images);

  for (const image of images) {
    const inputPath = path.join(sourceDir, image);
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
    
    // WebPファイルが存在しない場合のみ変換
    if (!fs.existsSync(outputPath)) {
      await convertToWebP(inputPath, outputPath);
    }
  }
};

// スクリプト実行
optimizeImages().then(() => {
  console.log('Image optimization completed');
}).catch(error => {
  console.error('Error during optimization:', error);
  process.exit(1);
}); 