import React, { useState } from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      category: 'ご予約について',
      icon: '📅',
      questions: [
        {
          question: 'どのように予約を取ることができますか？',
          answer: 'お電話（03-3978-4800）またはWEBフォームからご予約いただけます。WEBフォームは24時間受付しており、24時間以内にご連絡いたします。'
        },
        {
          question: '当日予約は可能ですか？',
          answer: '空きがあれば当日予約も承ります。お電話でお問い合わせください。ただし、混雑時はお受けできない場合もございますので、事前のご予約をおすすめします。'
        },
        {
          question: 'キャンセルはいつまで可能ですか？',
          answer: 'キャンセルは前日までにご連絡ください。当日キャンセルの場合は、施術料金の50%をキャンセル料として申し受けます。'
        },
        {
          question: '予約変更はできますか？',
          answer: 'はい、可能です。お電話でご連絡いただければ、空きのある時間にご変更いたします。なるべく早めのご連絡をお願いいたします。'
        }
      ]
    },
    {
      category: '施術について',
      icon: '✂️',
      questions: [
        {
          question: 'インナーカラーとは何ですか？',
          answer: '髪の内側部分にのみカラーを入れる技術です。普段は見えにくく、髪を結んだときや動いたときにチラリと見える上品なカラーリングです。職場でも安心してお楽しみいただけます。'
        },
        {
          question: '増毛エクステはどのくらい持ちますか？',
          answer: '髪の成長や日常のケアにもよりますが、約2-3ヶ月程度です。定期的なメンテナンスで美しい状態を保つことができます。'
        },
        {
          question: 'パーマの持続期間はどのくらいですか？',
          answer: '髪質やスタイルにもよりますが、約2-4ヶ月程度です。お手入れ方法をアドバイスいたしますので、より長く楽しんでいただけます。'
        },
        {
          question: '白髪染めはどのくらいの頻度で行うべきですか？',
          answer: '個人差はありますが、一般的には4-6週間に一度の頻度をおすすめしています。根元の伸び具合やお客様のご希望に合わせてご提案いたします。'
        }
      ]
    },
    {
      category: '料金・お支払い',
      icon: '💳',
      questions: [
        {
          question: '支払い方法は何がありますか？',
          answer: '現金、各種クレジットカード（VISA、MasterCard、JCB、AMEX）がご利用いただけます。'
        },
        {
          question: '料金表に載っていない追加料金はありますか？',
          answer: '髪の長さや状態により追加料金が発生する場合がございます。カウンセリング時に詳しくご説明し、ご了承いただいてから施術を開始いたします。'
        },
        {
          question: '学生割引はありますか？',
          answer: '申し訳ございませんが、現在学生割引は実施しておりません。ただし、初回のお客様には特別価格でご提供できるメニューもございます。'
        },
        {
          question: 'ポイントカードやメンバーシップはありますか？',
          answer: 'はい、リピーター様向けのポイントカードをご用意しております。ご来店回数に応じて特典をご用意しています。'
        }
      ]
    },
    {
      category: '店舗・設備',
      icon: '🏪',
      questions: [
        {
          question: '駐車場はありますか？',
          answer: 'はい、店舗前に3台分の駐車場をご用意しております。満車の場合は近隣のコインパーキングをご利用ください。'
        },
        {
          question: '車椅子での来店は可能ですか？',
          answer: 'はい、店舗はバリアフリー対応となっており、車椅子でも安心してご来店いただけます。お手伝いが必要でしたらお気軽にお声かけください。'
        },
        {
          question: '子供連れでの来店は可能ですか？',
          answer: 'はい、お子様連れでのご来店も歓迎いたします。ベビーカーでもご来店いただけます。お子様向けの絵本などもご用意しております。'
        },
        {
          question: '営業時間と定休日を教えてください',
          answer: '営業時間は火～土曜日が9:00-18:00、日・祝日が9:00-17:00です。定休日は月曜日となっております。'
        }
      ]
    },
    {
      category: '髪のお悩み',
      icon: '💁‍♀️',
      questions: [
        {
          question: 'くせ毛で悩んでいますが、対応できますか？',
          answer: 'はい、くせ毛専門の技術を持つスタッフがおります。髪質を活かしたカットや、くせを抑える施術など、最適な方法をご提案いたします。'
        },
        {
          question: '薄毛が気になるのですが、相談できますか？',
          answer: 'もちろんです。増毛エクステやボリュームアップカットなど、様々な方法でお悩みを解決いたします。まずはカウンセリングでご相談ください。'
        },
        {
          question: 'ダメージヘアのケア方法を教えてください',
          answer: 'ヘッドスパやトリートメントメニューで髪の健康を回復させることができます。また、日常のヘアケア方法もアドバイスいたします。'
        },
        {
          question: '年齢に合った髪型を相談したいのですが',
          answer: 'お客様の年齢、ライフスタイル、骨格に合わせた髪型をご提案いたします。上品で若々しく見えるスタイルをお作りします。'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map((q, index) => ({
      ...q,
      category: category.category,
      icon: category.icon,
      globalIndex: category.questions.reduce((acc, _, i) => i < index ? acc + 1 : acc, 
        faqCategories.slice(0, faqCategories.indexOf(category))
          .reduce((total, cat) => total + cat.questions.length, 0))
    }))
  );

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const seoConfig = {
    title: 'よくある質問（FAQ）| ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室に寄せられるよくある質問とその回答をまとめました。ご予約や施術に関する疑問を解決いたします。',
    keywords: 'FAQ, よくある質問, 美容室, ぴあざさるうと, 予約, 施術, 料金',
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
            alt="よくある質問"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full mb-4 inline-block">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            よくある質問
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            お客様から寄せられる<br className="md:hidden" />
            よくあるご質問にお答えします
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-primary/5">
        <div className="container-custom">
          {/* 紹介文 */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                  お客様の疑問にお答えします
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  こちらに掲載されていないご質問がございましたら、<br />
                  お気軽にお電話またはWEBフォームからお問い合わせください。<br />
                  スタッフが丁寧にご説明いたします。
                </p>
              </div>
            </div>
          </div>

          {/* カテゴリー別FAQ */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                  <h3 className="text-2xl font-bold text-dark flex items-center">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    {category.category}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = faqCategories.slice(0, categoryIndex)
                        .reduce((total, cat) => total + cat.questions.length, 0) + questionIndex;
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div key={questionIndex} className="border border-gray-200 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => handleToggle(globalIndex)}
                            className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
                          >
                            <span className="font-medium text-dark pr-4">{faq.question}</span>
                            <svg
                              className={`w-5 h-5 text-primary transform transition-transform duration-300 flex-shrink-0 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          <div className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* お問い合わせセクション */}
          <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
                  CONTACT US
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                他にもご質問がございましたら<br />
                お気軽にお問い合わせください
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                専門スタッフが丁寧にお答えいたします。<br />
                些細なことでもお気軽にご相談ください。
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  WEBでお問い合わせ
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:0339784800"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-dark transition-all duration-300"
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
    </>
  );
};

export default FAQ; 