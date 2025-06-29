import React from 'react';
import SEO from './SEO';
import AnimatedSection from './AnimatedSection';

const Recruit = () => {
  const seoConfig = {
    title: '採用情報 | ぴあざさるうと',
    description: '練馬区南大泉の美容室「ぴあざさるうと」の採用情報。美容師としての成長をサポートし、お客様と共に歩む美容室を目指しています。',
    keywords: '美容師,採用,求人,練馬区,美容室,正社員,パート,アルバイト',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      'title': '美容師募集',
      'description': '練馬区南大泉の美容室「ぴあざさるうと」で美容師を募集しています。',
      'hiringOrganization': {
        '@type': 'Organization',
        'name': 'ぴあざさるうと',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': '練馬区',
          'addressRegion': '東京都'
        }
      },
      'employmentType': ['FULL_TIME', 'PART_TIME'],
      'workHours': '10:00-19:00',
      'datePosted': '2024-01-01'
    }
  };

  const positions = [
    {
      title: '正社員美容師',
      requirements: [
        '美容師免許所持者',
        '接客が好きな方',
        '明るく元気な方',
        '髪と頭皮の健康に興味がある方'
      ],
      benefits: [
        '月給25万円〜（経験・能力に応じて）',
        '各種社会保険完備',
        '交通費全額支給',
        '有給休暇',
        '社員研修制度',
        '資格取得支援'
      ],
      schedule: {
        workDays: '週5日（シフト制）',
        workHours: '10:00-19:00',
        holidays: '週2日（シフト制）',
        other: '夏季・冬季休暇あり'
      }
    },
    {
      title: 'パート・アルバイト美容師',
      requirements: [
        '美容師免許所持者',
        '接客が好きな方',
        '明るく元気な方',
        '髪と頭皮の健康に興味がある方'
      ],
      benefits: [
        '時給1,500円〜（経験・能力に応じて）',
        '交通費全額支給',
        '社員研修制度',
        '資格取得支援'
      ],
      schedule: {
        workDays: '週2日以上（シフト制）',
        workHours: '10:00-19:00',
        holidays: 'シフト制',
        other: '夏季・冬季休暇あり'
      }
    }
  ];

  const environment = [
    {
      title: '充実の研修制度',
      description: '技術向上のための定期的な研修を実施。先輩スタッフが丁寧にサポートします。',
      icon: '📚'
    },
    {
      title: '働きやすい環境',
      description: '明るく清潔な店内で、快適に働けます。スタッフ同士のコミュニケーションも活発です。',
      icon: '✨'
    },
    {
      title: '成長の機会',
      description: 'お客様とのコミュニケーションを通じて、技術と接客スキルを磨けます。',
      icon: '🌱'
    },
    {
      title: 'ワークライフバランス',
      description: 'シフト制で、プライベートの時間も確保できます。',
      icon: '⚖️'
    }
  ];

  return (
    <>
      <SEO {...seoConfig} />
      <div className="container-custom py-12">
        <AnimatedSection animation="fade-up">
          <h1 className="text-3xl font-bold mb-8 text-center">採用情報</h1>
          
          {/* メッセージ */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">メッセージ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ぴあざさるうとでは、お客様一人ひとりの髪質や頭皮の状態に合わせた、
              オーダーメイドの施術を心がけています。
              美容師としての技術向上はもちろん、お客様とのコミュニケーションを通じて
              成長できる環境を整えています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              一緒に働く仲間として、明るく元気な方を募集しています。
              美容師としての経験は問いません。やる気のある方をお待ちしています。
            </p>
          </div>

          {/* 募集要項 */}
          <div className="space-y-8 mb-12">
            {positions.map((position, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={`${index * 100}`}>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{position.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">応募資格</h3>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="text-primary mr-2">●</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">待遇</h3>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="text-primary mr-2">●</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">勤務条件</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">勤務日</p>
                        <p className="text-gray-600">{position.schedule.workDays}</p>
                      </div>
                      <div>
                        <p className="font-medium">勤務時間</p>
                        <p className="text-gray-600">{position.schedule.workHours}</p>
                      </div>
                      <div>
                        <p className="font-medium">休日</p>
                        <p className="text-gray-600">{position.schedule.holidays}</p>
                      </div>
                      <div>
                        <p className="font-medium">その他</p>
                        <p className="text-gray-600">{position.schedule.other}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* 働く環境 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">働く環境</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {environment.map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={`${index * 100}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* 応募方法 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">応募方法</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                まずはお電話またはメールにてお問い合わせください。
                面接の日程を調整させていただきます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">お電話でのお問い合わせ</h3>
                  <a
                    href="tel:0339784800"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    03-3978-4800
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    ※ 受付時間: 10:00-19:00（定休日を除く）
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">メールでのお問い合わせ</h3>
                  <a
                    href="mailto:recruit@pi-azasalu-to.com"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    recruit@pi-azasalu-to.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Recruit; 