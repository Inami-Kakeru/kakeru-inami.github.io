import React from 'react';
import OptimizedImage from './OptimizedImage';

const Concept = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* メインコンセプト */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
              CONCEPT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-mincho font-bold text-gray-900 dark:text-white mb-6">
            当店のコンセプト
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8 leading-tight">
                  主婦層に選ばれる<br />
                  アットホームなサロン
                </h3>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  ぴあざさるうとでは、お客様一人ひとりのライフスタイルに寄り添い、<br className="hidden md:block" />
                  インナーカラーや増毛エクステなど、人気の施術をご提供しています。
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  軟水を使用した施術と、豊富なトリートメントメニューで、美しさを引き出します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 特徴カード - 新しいデザイン */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">インナーカラー</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  自然な仕上がりで人気のカラー施術。<br />
                  お客様の髪質に合わせた最適なカラーをご提案。
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">増毛エクステ</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  専門技術による自然な仕上がりで、<br />
                  ボリュームアップと薄毛カバーを実現。
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">創業50年の信頼</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  練馬区南大泉で長年愛され続ける<br />
                  地域密着型の美容室です。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 詳細セクション - 新しいレイアウト */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
                  OUR PROMISE
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  アットホームで<br />安心な空間
                </h3>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">バリアフリー対応</h5>
                    <p className="text-gray-600 dark:text-gray-400">車椅子やベビーカーでも安心してご来店いただけます</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">地域密着50年</h5>
                    <p className="text-gray-600 dark:text-gray-400">練馬区南大泉で長年愛され続ける美容室です</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ママさん美容師在籍</h5>
                    <p className="text-gray-600 dark:text-gray-400">子育て経験豊富なスタッフが心を込めて対応いたします</p>
                  </div>
                </div>
              </div>
              
              <div>
                <a 
                  href="/salon" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  詳しく見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <OptimizedImage
                src="/images/concept-ambience.jpg" 
                alt="ぴあざさるうとの温かい店内" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 装飾的な背景要素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Concept;
