import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from './SEO';
import AnimatedSection from './AnimatedSection';
import OptimizedImage from './OptimizedImage';

const StaffDetail = () => {
  const { id } = useParams();

  // スタッフデータ
  const staffData = {
    'matsumoto': {
      name: '松本 貴子',
      position: 'トップスタイリスト',
      experience: 'スタイリスト歴15年',
      catchphrase: 'お手入れが楽で再現しやすいスタイルを心掛けています',
      profile: 'その人の似合うシルエットを見つけ、家でも簡単にスタイリングできるデザインを提案しています。骨格に合わせたカットが得意です。特にくせ毛の方お悩み解決致します！眉毛もケア可能です◎',
      specialties: ['オフィス・コンサバ'],
      skills: ['音楽', '美容師のお仕事'],
      image: '/images/マツモトタカコ.png'
    },
    'kakuta': {
      name: '角田 良美',
      position: 'トップスタイリスト',
      experience: 'スタイリスト歴15年',
      catchphrase: '丁寧な接客、施術で『美』のお手伝いをさせて頂きます!',
      profile: '保谷生まれの保谷育ち、息子3人の母。家でも簡単にスタイリングできるデザインを提案しています。若見えデザインの提案も得意です。お気軽に相談してください。',
      specialties: ['オフィス・コンサバ'],
      hobbies: ['美味しい食べ物探し', '旬のトレンド情報収集', 'アロマ', '香水'],
      image: '/images/カクタヨシミ.png'
    },
    'nakayama': {
      name: '中山 真美',
      position: 'オーナー / エアリーエクステ担当',
      experience: 'スタイリスト歴3年',
      catchphrase: '美容室併設サロン',
      profile: '丁寧なカウンセリングを心掛けております。エクステ美容師エアリーエクステ。',
      specialties: ['ナチュラル'],
      skills: ['ボリュームUP', '髪の割れ改善', '頭皮透け改善', 'ふんわりヘアーをサポート'],
      image: '/images/ナカヤママミ.png'
    }
  };

  const staff = staffData[id];

  if (!staff) {
    return (
      <div className="container-custom py-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-dark">スタッフが見つかりません</h1>
        <p className="text-gray-600">お探しのスタッフは現在在籍していないか、ページが移動した可能性があります。</p>
      </div>
    );
  }

  const seoConfig = {
    title: `${staff.name} | スタッフ紹介 | ぴあざさるうと`,
    description: `${staff.position}の${staff.name}です。${staff.experience}の経験を活かし、${staff.specialties.join('、')}を得意としています。`,
    keywords: `美容師,${staff.name},${staff.position},${staff.specialties.join(',')},練馬区,美容室`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': staff.name,
      'jobTitle': staff.position,
      'worksFor': {
        '@type': 'Organization',
        'name': 'ぴあざさるうと'
      },
      'description': staff.profile,
      'image': staff.image
    }
  };

  return (
    <>
      <SEO {...seoConfig} />
      <div className="container-custom py-12">
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto">
            {/* スタッフ基本情報 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <OptimizedImage
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h1 className="text-2xl font-bold mb-2 text-dark">{staff.name}</h1>
                  <p className="text-accent font-semibold mb-4">{staff.position}</p>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-dark">経歴</h2>
                      <p className="text-gray-600">{staff.experience}</p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-dark">キャッチコピー</h2>
                      <p className="text-gray-600 font-medium">{staff.catchphrase}</p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2 text-dark">得意なイメージ</h2>
                      <div className="flex flex-wrap gap-2">
                        {staff.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* プロフィール */}
            <AnimatedSection animation="fade-up" delay="100">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold mb-4 text-dark">プロフィール</h2>
                <p className="text-gray-700 leading-relaxed">{staff.profile}</p>
              </div>
            </AnimatedSection>

            {/* 得意な技術・趣味 */}
            <AnimatedSection animation="fade-up" delay="200">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                {staff.skills && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 text-dark">得意な技術</h2>
                    <div className="flex flex-wrap gap-2">
                      {staff.skills.map((skill, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {staff.hobbies && (
                  <div>
                    <h2 className="text-xl font-bold mb-4 text-dark">趣味・マイブーム</h2>
                    <div className="flex flex-wrap gap-2">
                      {staff.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* 予約ボタン */}
            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                {staff.name}へのご予約はこちら
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default StaffDetail; 