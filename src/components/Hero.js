import React from 'react';
import OptimizedImage from './OptimizedImage';

const Hero = () => {
  return (
    <section className="relative h-fluid-hero flex items-center justify-center overflow-hidden" role="banner">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/images/hero-bg.jpg"
          alt="ぴあざさるうと美容室の店内風景"
          className="w-full h-full object-cover"
          priority={true}
        />
        {/* 茶色系の半透明オーバーレイで写真を淡くし、文字の可読性を向上 */}
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 via-brown-800/60 to-brown-900/50 dark:bg-brown-950/80"></div>
      </div>
      
      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="hero-title mb-6">
            主婦層に選ばれる
            <span className="block text-primary mt-2">美容室</span>
          </h1>
          <div className="hero-subtitle max-w-3xl mx-auto">
            <p className="mb-4">
              練馬区南大泉・創業50年の信頼と実績
            </p>
            <p className="text-lg opacity-90">
              あなたの「なりたい」を叶える<br />
              インナーカラー・増毛エクステが人気のサロン
            </p>
          </div>
        </div>

        {/* 特徴のハイライト */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-semibold mb-2">インナーカラー</h3>
            <p className="text-sm opacity-90">自然な仕上がりで人気のカラー施術</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-semibold mb-2">増毛エクステ</h3>
            <p className="text-sm opacity-90">専門技術で自然なボリュームアップ</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <h3 className="text-xl font-semibold mb-2">バリアフリー</h3>
            <p className="text-sm opacity-90">車椅子・ベビーカーOK どなたでも安心</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="inline-block bg-primary text-dark font-bold py-4 px-10 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl text-xl"
            aria-label="予約フォームページへ移動"
          >
            ご予約はこちら
          </a>
          <a
            href="tel:0339784800"
            className="inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-lg hover:bg-white hover:text-dark transition-all duration-300 text-xl"
            aria-label="電話で予約する"
          >
            📞 03-3978-4800
          </a>
        </div>
      </div>
      
      {/* スクロールダウンアロー */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-8 h-8 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
