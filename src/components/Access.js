import React from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import HeroBanner from '@/components/Common/HeroBanner';

const Access = () => {
  const accessInfo = {
    name: 'ぴあざさるうと美容室',
    address: '〒178-0065 東京都練馬区南大泉1-15-38 ファミーユ大泉1F',
    phone: '03-3978-4800',
    hours: {
      weekdays: '火～土: 9:00 - 18:00',
      weekends: '日・祝: 9:00 - 17:00',
      closed: '月曜日'
    },
    parking: '3台完備',
    station: '西武池袋線「保谷駅」南口',
    walkTime: '徒歩1分',
    features: [
      'バリアフリー対応',
      'ベビーカー入店OK',
      '車椅子対応',
      '専用駐車場完備'
    ]
  };

  const directions = [
    {
      step: 1,
      title: '保谷駅南口を出る',
      description: '西武池袋線「保谷駅」の南口改札を出て、駅前ロータリーに向かいます。'
    },
    {
      step: 2,
      title: '南大泉方面へ進む',
      description: 'ロータリーを右手に見ながら、南大泉1丁目方面へ直進します。'
    },
    {
      step: 3,
      title: 'ファミーユ大泉到着',
      description: '約1分歩くと「ファミーユ大泉」の建物が見えてきます。1階が当店です。'
    }
  ];

  const seoConfig = {
    title: 'アクセス・店舗情報 | ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室へのアクセス方法をご案内。西武池袋線保谷駅南口より徒歩1分。駐車場完備、バリアフリー対応で安心してご来店いただけます。',
    keywords: 'アクセス, 店舗情報, 保谷駅, 練馬区, 南大泉, 駐車場, バリアフリー',
    ogImage: '/images/hero-bg.jpg'
  };

  return (
    <>
      <SEO {...seoConfig} />
      
      {/* ヒーローセクション */}
      <HeroBanner
        title="アクセス・店舗情報"
        subtitle={"保谷駅南口より徒歩1分\nアクセス抜群の立地です"}
        badge="ACCESS"
      />

      {/* メインコンテンツ */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 店舗情報 */}
            <div className="space-y-8">
              {/* 基本情報 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-mincho font-bold text-dark mb-6">
                  店舗基本情報
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">店舗名</h3>
                      <p className="text-gray-600">{accessInfo.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">住所</h3>
                      <p className="text-gray-600">{accessInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">電話番号</h3>
                      <p className="text-gray-600">
                        <a href={`tel:${accessInfo.phone}`} className="text-primary hover:underline">
                          {accessInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">営業時間</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>{accessInfo.hours.weekdays}</p>
                        <p>{accessInfo.hours.weekends}</p>
                        <p className="text-red-500 font-medium">定休日: {accessInfo.hours.closed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* アクセス方法 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-mincho font-bold text-dark mb-6">
                  電車でのアクセス
                </h2>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-full font-bold text-lg">
                      {accessInfo.station}
                    </div>
                    <div className="mx-4 text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <div className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-full font-bold text-lg">
                      {accessInfo.walkTime}
                    </div>
                  </div>
                  <p className="text-center text-gray-600">
                    駅から非常に近く、雨の日でも安心してご来店いただけます
                  </p>
                </div>

                <div className="space-y-4">
                  {directions.map((direction, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                        {direction.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-dark mb-1">{direction.title}</h4>
                        <p className="text-gray-600 text-sm">{direction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右側カラム */}
            <div className="space-y-8">
              {/* 駐車場情報 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-mincho font-bold text-dark mb-6">
                  駐車場のご案内
                </h2>
                
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-center text-dark mb-6">
                  <div className="text-4xl mb-4">🚗</div>
                  <h3 className="text-xl font-bold mb-2">専用駐車場完備</h3>
                  <p className="text-lg">{accessInfo.parking}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">店舗前に駐車場をご用意</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">お車でのご来店も安心</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">満車時は近隣コインパーキングをご利用ください</span>
                  </div>
                </div>
              </div>

              {/* バリアフリー対応 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-mincho font-bold text-dark mb-6">
                  バリアフリー対応
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  どなたでも安心してご来店いただけるよう、バリアフリー対応の店舗です。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {accessInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 地図・CTA */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-2xl font-mincho font-bold text-dark mb-6">
                  お気軽にお越しください
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ご不明な点がございましたら、お電話でお気軽にお問い合わせください。
                  スタッフが丁寧にご案内いたします。
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${accessInfo.phone}`}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    電話で問い合わせる
                  </a>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    WEBで問い合わせる
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-16 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-mincho font-bold text-dark mb-6 text-center">
              ご来店時のお願い
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">完全予約制</h3>
                <p className="text-sm text-gray-600">
                  ご来店前に必ずご予約をお取りください
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">遅刻のご連絡</h3>
                <p className="text-sm text-gray-600">
                  遅れる場合は必ずお電話でご連絡ください
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">衛生管理</h3>
                <p className="text-sm text-gray-600">
                  お客様の健康と安全を最優先に取り組んでいます
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Access;
