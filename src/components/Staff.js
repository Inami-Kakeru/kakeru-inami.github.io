import React, { useState } from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staffMembers = [
    {
      id: 1,
      name: '松本 貴子',
      position: 'トップスタイリスト',
      experience: 'スタイリスト歴15年',
      image: '/images/マツモトタカコ.png',
      catchphrase: 'お手入れが楽で再現しやすいスタイルを心掛けています',
      profile: 'その人の似合うシルエットを見つけ、家でも簡単にスタイリングできるデザインを提案しています。骨格に合わせたカットが得意です。特にくせ毛の方お悩み解決致します！眉毛もケア可能です◎',
      specialties: ['オフィス・コンサバ'],
      skills: ['音楽', '美容師のお仕事']
    },
    {
      id: 2,
      name: '角田 良美',
      position: 'トップスタイリスト',
      experience: 'スタイリスト歴15年',
      image: '/images/カクタヨシミ.png',
      catchphrase: '丁寧な接客、施術で『美』のお手伝いをさせて頂きます!',
      profile: '保谷生まれの保谷育ち、息子3人の母。家でも簡単にスタイリングできるデザインを提案しています。若見えデザインの提案も得意です。お気軽に相談してください。',
      specialties: ['オフィス・コンサバ'],
      hobbies: ['美味しい食べ物探し', '旬のトレンド情報収集', 'アロマ', '香水']
    },
    {
      id: 3,
      name: '中山 真美',
      position: 'オーナー / エアリーエクステ担当',
      experience: 'スタイリスト歴3年',
      image: '/images/ナカヤママミ.png',
      catchphrase: '美容室併設サロン',
      profile: '丁寧なカウンセリングを心掛けております。エクステ美容師エアリーエクステ。',
      specialties: ['ナチュラル'],
      skills: ['ボリュームUP', '髪の割れ改善', '頭皮透け改善', 'ふんわりヘアーをサポート']
    }
  ];

  const seoConfig = {
    title: 'スタッフ紹介 | ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室のスタッフをご紹介。経験豊富なスタイリストがお客様の美しさを引き出します。',
    keywords: 'スタッフ, 美容師, スタイリスト, ぴあざさるうと, 練馬区, 美容室',
    ogImage: '/images/マツモトタカコ.png'
  };

  return (
    <>
      <SEO {...seoConfig} />
      
      {/* ヒーローセクション */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-bg.jpg"
            alt="スタッフ紹介"
            className="w-full h-full object-cover"
          />
          {/* 茶色系の半透明オーバーレイで写真を淡くし、文字の可読性を向上 */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 via-brown-800/60 to-brown-900/50 dark:bg-brown-950/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            スタッフ紹介
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            経験豊富なスタッフが<br className="md:hidden" />
            あなたの美しさを引き出します
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-20 bg-base">
        <div className="container-custom">
          {/* スタッフグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {staffMembers.map(staff => (
              <div 
                key={staff.id}
                className="group cursor-pointer"
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-dark">
                        {staff.name}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-lg font-medium text-accent">
                          {staff.position}
                        </span>
                        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {staff.experience}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {staff.catchphrase}
                    </p>
                    
                    <div className="flex justify-center">
                      <button 
                        onClick={() => setSelectedStaff(staff)}
                        className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-300"
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

          {/* 採用情報セクション */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-mincho font-bold text-dark mb-6">
                一緒に働きませんか？
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                ぴあざさるうとでは、お客様に愛される美容師を目指すスタッフを募集しています。<br />
                アットホームな環境で、スキルアップを目指しましょう。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center p-6 bg-base rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-dark mb-1">働きやすい環境</h4>
                    <p className="text-sm text-gray-600">シフト制で<br />ワークライフバランス◎</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-6 bg-base rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-dark mb-1">技術向上支援</h4>
                    <p className="text-sm text-gray-600">講習会・研修制度<br />充実</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-6 bg-base rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-dark mb-1">アットホーム</h4>
                    <p className="text-sm text-gray-600">温かい仲間と<br />一緒に成長</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/recruit"
                  className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  採用情報を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* モーダル */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-dark">{selectedStaff.name}</h2>
                <button
                  onClick={() => setSelectedStaff(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <OptimizedImage
                    src={selectedStaff.image}
                    alt={selectedStaff.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">{selectedStaff.position}</h3>
                  <p className="text-gray-600 mb-4">{selectedStaff.experience}</p>
                  <p className="text-lg font-medium text-dark mb-4">{selectedStaff.catchphrase}</p>
                  <p className="text-gray-600 leading-relaxed">{selectedStaff.profile}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-dark mb-2">得意なイメージ</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStaff.specialties.map((specialty, index) => (
                      <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedStaff.skills && (
                  <div>
                    <h4 className="font-bold text-dark mb-2">得意な技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.skills.map((skill, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedStaff.hobbies && (
                  <div>
                    <h4 className="font-bold text-dark mb-2">趣味・マイブーム</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-300"
                >
                  {selectedStaff.name}へのご予約はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Staff;
