import React from 'react';
import SEO from '@/components/SEO';
import { images } from '@/utils/images';
import { menuCategories } from '@/data/menuData';
import HeroBanner from '@/components/Common/HeroBanner';

const Menu = () => {
  const seoConfig = {
    title: "メニュー・料金 | ぴあざさるうと",
    description: "ぴあざさるうとのメニュー。カウンセリング、増毛エクステ、カット、カラー・パーマ・セットメニューなど。",
    keywords: "美容室,メニュー,料金,カット,カラー,パーマ,増毛エクステ,練馬区,南大泉",
    ogImage: images.menuHero,
    ogType: "article",
    canonical: "/menu"
  };

  return (
    <>
      <SEO {...seoConfig} />
      
      {/* ヒーローセクション */}
      <HeroBanner
        title="メニュー・料金"
        subtitle="お客様一人ひとりに合わせたメニューをご提案"
      />

      {/* メインコンテンツ */}
      <div className="bg-white py-16">
        <div className="container-custom max-w-6xl mx-auto">
          
          {/* メニューカテゴリー */}
          <div className="space-y-16">
            {menuCategories.map(category => (
              <section key={category.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-mincho font-bold text-gray-800 mb-4">{category.title}</h2>
                  <p className="text-gray-600 font-mincho">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                      {item.image && (
                        <div className="h-48 bg-gray-100 overflow-hidden">
                          <img 
                            src={images[item.image]} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-gray-800 font-mincho">{item.name}</h3>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {item.target}
                          </span>
                        </div>
                        
                        {item.description && (
                          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div className="text-2xl font-bold text-gray-800">{item.price}</div>
                          {item.note && (
                            <div className="text-sm text-gray-500">{item.note}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* 予約促進セクション */}
          <section className="mt-16">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl font-mincho font-bold mb-4 text-gray-800">ご予約・お問い合わせ</h2>
              <p className="text-gray-600 mb-8 font-mincho">
                お気軽にお電話またはWebからご予約ください
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-all duration-300">
                  03-3978-4800
                </button>
                <button className="px-8 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300">
                  Web予約
                </button>
              </div>
            </div>
          </section>

          {/* 注意事項 */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center font-mincho">ご利用について</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">料金について</h4>
                <ul className="space-y-1">
                  <li>• 表示価格は全て税込です</li>
                  <li>• 髪の長さや状態により料金が変動する場合があります</li>
                  <li>• 併用不可のメニューは他のメニューとの併用はできません</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">施術について</h4>
                <ul className="space-y-1">
                  <li>• カウンセリングは無料で行っております</li>
                  <li>• アレルギーをお持ちの方は事前にご相談ください</li>
                  <li>• 増毛エクステは本数により料金が異なります</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu; 