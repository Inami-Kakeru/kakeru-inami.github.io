import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { images } from '@/utils/images';

/**
 * HeroBanner 共通コンポーネント
 * @param {string} title  - 見出し
 * @param {string} subtitle - サブ見出し
 * @param {string} bgImage - 背景画像パス（/images/...）
 * @param {string} badge   - バッジテキスト（任意）
 * @param {string} heightClass - 高さクラス（例:h-96）。デフォルトh-96。
 */
const HeroBanner = ({ title, subtitle, bgImage = images.heroBg, badge, heightClass = 'h-96' }) => {
  // bgImageがキー文字列の場合はimagesマップから取得
  const resolvedBg = typeof bgImage === 'string' && bgImage in images ? images[bgImage] : bgImage;
  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={resolvedBg}
          alt={title}
          className="w-full h-full object-cover"
          priority={true}
        />
        {/* 茶色グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 via-brown-800/60 to-brown-900/50 dark:bg-brown-950/80"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        {badge && (
          <div className="inline-block mb-4">
            <span className="text-sm font-medium bg-white/20 text-white px-4 py-2 rounded-full inline-block">
              {badge}
            </span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner; 