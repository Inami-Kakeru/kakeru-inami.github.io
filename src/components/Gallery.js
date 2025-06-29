import React, { useState } from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import AnimatedSection from './AnimatedSection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'inner-color', name: 'インナーカラー' },
    { id: 'extension', name: '増毛エクステ' },
    { id: 'cut', name: 'カット' },
    { id: 'color', name: 'カラー' },
    { id: 'perm', name: 'パーマ' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/images/salon-interior.jpg',
      title: 'ナチュラルなインナーカラー',
      category: 'inner-color',
      description: '上品で自然な仕上がりのインナーカラースタイル'
    },
    {
      id: 2,
      image: '/images/salon-equipment.jpg',
      title: 'ボリュームアップエクステ',
      category: 'extension',
      description: '専門技術による自然で美しいボリュームアップ'
    },
    {
      id: 3,
      image: '/images/salon-amenity.jpg',
      title: 'エレガントなカット',
      category: 'cut',
      description: 'お客様の骨格に合わせたオーダーメイドカット'
    },
    {
      id: 4,
      image: '/images/hero-bg.jpg',
      title: 'トレンドカラー',
      category: 'color',
      description: '季節感あふれるトレンドカラースタイル'
    },
    {
      id: 5,
      image: '/images/salon-interior.jpg',
      title: 'ふんわりパーマ',
      category: 'perm',
      description: '自然なウェーブで上品な印象を演出'
    },
    {
      id: 6,
      image: '/images/salon-equipment.jpg',
      title: 'ミディアムレイヤー',
      category: 'cut',
      description: '動きのあるレイヤーカットで若々しい印象'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const seoConfig = {
    title: 'ギャラリー - 施術事例 | ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室の施術事例をご紹介。インナーカラー、増毛エクステ、カット、カラー、パーマなど豊富なスタイルをご覧ください。',
    keywords: 'ギャラリー, 施術事例, ヘアスタイル, インナーカラー, 増毛エクステ, 美容室, 練馬区',
    ogImage: '/images/hero-bg.jpg'
  };

  return (
    <>
      <SEO {...seoConfig} />
      
      {/* ヒーローセクション */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-bg.jpg"
            alt="美容室ギャラリー"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full mb-4 inline-block">
              GALLERY
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            施術ギャラリー
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            お客様の美しさを引き出す<br className="md:hidden" />
            こだわりの施術事例をご覧ください
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-primary/5">
        <div className="container-custom">
          {/* カテゴリーフィルター */}
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-dark shadow-lg scale-105'
                      : 'bg-white text-dark hover:bg-primary/20 shadow-md hover:shadow-lg border border-primary/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* ギャラリーグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm bg-primary/80 px-3 py-1 rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA セクション */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                  あなたも理想のスタイルを<br />
                  実現してみませんか？
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  経験豊富なスタイリストがお客様のご要望をお聞きし、<br />
                  最適なスタイルをご提案いたします。
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    ご予約・ご相談はこちら
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="tel:0339784800"
                    className="inline-flex items-center px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300"
                  >
                    📞 03-3978-4800
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* モーダル */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <OptimizedImage
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-dark">{selectedImage.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery; 