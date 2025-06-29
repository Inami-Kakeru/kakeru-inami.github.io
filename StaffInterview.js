import React from 'react';

const StaffInterview = () => {
  const interviews = [
    {
      name: '中山 真美',
      position: '店長',
      image: '/images/ナカヤママミ.png',
      experience: '10年',
      qa: [
        {
          question: 'ぴあざさるうとに入社したきっかけは？',
          answer: 'サロンの温かみのある雰囲気と、お客様一人一人とじっくり向き合える環境に魅力を感じました。また、技術の向上だけでなく、人としての成長も大切にしている点に共感し、入社を決めました。'
        },
        {
          question: '仕事のやりがいは？',
          answer: 'お客様の「ありがとう」の言葉と、仕上がりに満足していただいた時の笑顔です。また、スタッフと一緒に成長していける環境も、大きなやりがいになっています。'
        },
        {
          question: 'これから入社を考えている方へメッセージ',
          answer: '美容師としての技術はもちろん、人としての成長も大切にしているサロンです。未経験の方も、経験者の方も、一緒に成長していきましょう。温かい仲間が待っています！'
        }
      ]
    },
    {
      name: '松本 貴子',
      position: 'スタイリスト',
      image: '/images/マツモトタカコ.png',
      experience: '5年',
      qa: [
        {
          question: 'ぴあざさるうとの魅力は？',
          answer: 'アットホームな雰囲気の中で、お客様一人一人とじっくり向き合えることです。また、スタッフ同士の仲が良く、技術の共有や相談がしやすい環境が整っています。'
        },
        {
          question: '仕事で大切にしていることは？',
          answer: 'お客様の要望をしっかりと聞き取り、期待以上の仕上がりを提供することです。また、常に新しい技術やトレンドを学び続けることも大切にしています。'
        },
        {
          question: 'これから入社を考えている方へメッセージ',
          answer: '技術の向上はもちろん、お客様とのコミュニケーションも大切にしているサロンです。一緒に成長していきましょう！'
        }
      ]
    }
  ];

  return (
    <section 
      className="py-16 bg-primary bg-opacity-5"
      aria-labelledby="staff-interview-heading"
    >
      <div className="container-custom">
        <h2 
          id="staff-interview-heading" 
          className="text-3xl font-mincho text-center mb-12"
        >
          スタッフインタビュー
        </h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {interviews.map((staff, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={staff.image}
                    alt={`${staff.name}の写真`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-mincho mb-2">{staff.name}</h3>
                    <p className="text-gray-600">
                      {staff.position} / 経験{staff.experience}
                    </p>
                  </div>
                  <div className="space-y-6">
                    {staff.qa.map((item, qaIndex) => (
                      <div key={qaIndex}>
                        <h4 className="font-medium text-primary mb-2">
                          Q. {item.question}
                        </h4>
                        <p className="text-gray-700">
                          A. {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffInterview; 