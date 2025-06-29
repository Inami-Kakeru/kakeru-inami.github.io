import React from 'react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const testimonials = [
    {
      name: '30代女性・主婦',
      rating: 5,
      comment:
        '子連れでも安心して通えるサロンです。ベビーカーのまま入店でき、スタッフの皆さんも子供に優しく接してくださいます。カットも毎回満足の仕上がりです。',
    },
    {
      name: '40代女性',
      rating: 5,
      comment:
        'インナーカラーをお願いしました。想像以上の仕上がりで、職場でも褒められました！技術力の高さを実感しています。',
    },
    {
      name: '50代女性',
      rating: 5,
      comment:
        '長年お世話になっています。スタッフの皆さんの人柄が良く、毎回楽しい時間を過ごしています。地域に根ざした素晴らしいサロンです。',
    },
  ];

  const getStars = (count) => '★★★★★'.slice(0, count);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="section-title">お客様の声</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            多くのお客様から高いご評価をいただいております。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <AnimatedSection key={idx} animation="fade-up" delay={idx * 100} className="card p-6 text-center">
              <div className="flex justify-center text-yellow-400 text-xl mb-2">
                {getStars(t.rating)}
              </div>
              <p className="italic text-gray-600 dark:text-gray-400 mb-4">「{t.comment}」</p>
              <p className="text-sm font-medium text-gray-500">{t.name}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 