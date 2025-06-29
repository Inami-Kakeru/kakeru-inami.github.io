import React, { useState } from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'inner-color',
      name: 'インナーカラー',
      price: '¥8,800～',
      duration: '90分',
      image: '/images/salon-interior.jpg',
      description: '自然で上品な仕上がりのインナーカラー。お客様の髪質とライフスタイルに合わせたカラーリングをご提案いたします。',
      features: [
        '髪の内側だけにカラーを入れるため、職場でも安心',
        '毛先の動きや表情に奥行きが生まれる',
        '低ダメージでおしゃれを楽しめる',
        '豊富なカラーバリエーション'
      ],
      process: [
        'カウンセリング・カラー選択',
        'ブロッキング・塗布',
        'カラー放置・チェック',
        'シャンプー・仕上げ'
      ]
    },
    {
      id: 'extension',
      name: '増毛エクステ',
      price: '¥15,000～',
      duration: '120分',
      image: '/images/salon-equipment.jpg',
      description: '専門技術による自然な仕上がりで、ボリュームアップと薄毛カバーを実現。違和感のない美しい髪型をお作りします。',
      features: [
        '自然な髪色とマッチする高品質エクステ',
        '頭皮に優しい装着方法',
        '日常生活に支障のない軽やかな仕上がり',
        '定期メンテナンスでいつでも美しく'
      ],
      process: [
        'カウンセリング・髪質チェック',
        'エクステカラーマッチング',
        '丁寧な装着作業',
        'カット・スタイリング'
      ]
    },
    {
      id: 'cut',
      name: 'カット',
      price: '¥4,400～',
      duration: '60分',
      image: '/images/salon-amenity.jpg',
      description: 'お客様の骨格と髪質を活かしたオーダーメイドカット。お手入れしやすく、再現性の高いスタイルをお作りします。',
      features: [
        '骨格診断に基づいたスタイル提案',
        '髪質を活かしたカット技術',
        'お手入れ簡単なデザイン',
        'トレンドを取り入れたスタイル'
      ],
      process: [
        'カウンセリング・スタイル相談',
        'シャンプー・前処理',
        'カット・調整',
        'スタイリング・仕上げ'
      ]
    },
    {
      id: 'color',
      name: 'カラー',
      price: '¥6,600～',
      duration: '90分',
      image: '/images/hero-bg.jpg',
      description: '髪に優しい薬剤を使用した美しいカラーリング。白髪染めからファッションカラーまで幅広く対応いたします。',
      features: [
        '髪質に合わせた薬剤選択',
        '豊富なカラーバリエーション',
        '白髪染めも自然な仕上がり',
        'トリートメント効果のあるカラー剤'
      ],
      process: [
        'カウンセリング・カラー選択',
        '前処理・頭皮保護',
        'カラー塗布・放置',
        'シャンプー・トリートメント'
      ]
    },
    {
      id: 'perm',
      name: 'パーマ',
      price: '¥7,700～',
      duration: '120分',
      image: '/images/salon-interior.jpg',
      description: '自然なウェーブで上品な印象を演出。髪質やライフスタイルに合わせたパーマスタイルをご提案いたします。',
      features: [
        '髪質に合わせた薬剤選択',
        '自然で美しいカールライン',
        'スタイリングが楽になる',
        'ダメージを最小限に抑制'
      ],
      process: [
        'カウンセリング・髪質診断',
        'ロッド巻き・薬剤塗布',
        '中間処理・2剤塗布',
        'ロッド外し・仕上げ'
      ]
    },
    {
      id: 'head-spa',
      name: 'ヘッドスパ',
      price: '¥3,300～',
      duration: '45分',
      image: '/images/salon-equipment.jpg',
      description: '頭皮と髪を癒すリラクゼーションメニュー。血行促進と保湿効果で健やかな髪と頭皮環境を整えます。',
      features: [
        '血行促進効果',
        'リラクゼーション効果',
        '頭皮環境の改善',
        '髪にツヤとハリをプラス'
      ],
      process: [
        '頭皮チェック・カウンセリング',
        'プレシャンプー',
        'マッサージ・トリートメント',
        '仕上げシャンプー'
      ]
    }
  ];

  const seoConfig = {
    title: 'サービス・メニュー | ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室のサービスメニューをご紹介。インナーカラー、増毛エクステ、カット、カラー、パーマ、ヘッドスパなど豊富なメニューをご用意。',
    keywords: 'サービス, メニュー, インナーカラー, 増毛エクステ, カット, カラー, パーマ, ヘッドスパ, 美容室, 練馬区',
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
            alt="サービス・メニュー"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full mb-4 inline-block">
              SERVICES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            サービス・メニュー
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            お客様の美しさを引き出す<br className="md:hidden" />
            こだわりのメニューをご用意
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-primary/5">
        <div className="container-custom">
          {/* サービス紹介文 */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                  お客様に寄り添う<br />
                  丁寧な施術
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ぴあざさるうとでは、お客様一人ひとりの髪質、ライフスタイル、ご要望に合わせた<br />
                  オーダーメイドの施術をご提供いたします。<br />
                  経験豊富なスタッフが、丁寧なカウンセリングから始まり、<br />
                  最高の仕上がりまで責任を持ってサポートいたします。
                </p>
              </div>
            </div>
          </div>

          {/* サービスグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary/80 text-dark px-3 py-1 rounded-full font-bold">
                      {service.price}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        施術時間: {service.duration}
                      </div>
                      <button 
                        onClick={() => setSelectedService(service)}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-dark font-medium rounded-full hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                      >
                        詳細を見る
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 注意事項 */}
          <div className="mt-20 bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <h3 className="text-2xl font-mincho font-bold text-dark mb-6 text-center">
              ご利用にあたって
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-dark flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ご予約について
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 完全予約制となっております</li>
                  <li>• ご予約はお電話またはWEBフォームから</li>
                  <li>• キャンセルは前日までにご連絡ください</li>
                  <li>• 当日キャンセルの場合は料金の50%を申し受けます</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-dark flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  料金について
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 表示価格は税込です</li>
                  <li>• 髪の長さや状態により追加料金が発生する場合があります</li>
                  <li>• お支払いは現金・クレジットカード対応</li>
                  <li>• 詳細な料金はカウンセリング時にご説明いたします</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA セクション */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-dark">
              <h3 className="text-3xl md:text-4xl font-mincho font-bold mb-6">
                ご予約・ご相談はこちら
              </h3>
              <p className="text-xl mb-8 text-dark/80">
                お客様のご要望をお聞かせください<br />
                最適なメニューをご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  WEBで予約する
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:0339784800"
                  className="inline-flex items-center px-8 py-4 bg-white/20 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  03-3978-4800
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス詳細モーダル */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div className="bg-white rounded-3xl overflow-hidden max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <OptimizedImage
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4 bg-primary/80 text-dark px-4 py-2 rounded-full font-bold text-lg">
                {selectedService.price}
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2 text-dark">{selectedService.name}</h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    施術時間: {selectedService.duration}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-dark">サービス内容</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  
                  <h4 className="text-xl font-bold mb-4 text-dark">特徴・こだわり</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-dark">施術の流れ</h4>
                  <div className="space-y-4">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                    <h5 className="font-bold text-dark mb-2">ご予約はこちらから</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      カウンセリングでお客様のご要望をお聞かせください
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-medium rounded-full hover:shadow-lg transition-all duration-300"
                      >
                        WEBで予約
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                      <a
                        href="tel:0339784800"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        📞 03-3978-4800
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
