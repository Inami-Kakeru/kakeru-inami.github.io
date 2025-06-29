import React, { useState } from 'react';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'カット',
    'カラー',
    'インナーカラー',
    'パーマ',
    '増毛エクステ',
    'ヘッドスパ',
    'トリートメント',
    'その他'
  ];

  const timeSlots = [
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'お名前は必須です';
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }
    if (!formData.phone.trim()) newErrors.phone = '電話番号は必須です';
    if (!formData.service) newErrors.service = '希望メニューを選択してください';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // フォーム送信処理（実際の実装では適切なAPIエンドポイントを使用）
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoConfig = {
    title: 'お問い合わせ・ご予約 | ぴあざさるうと美容室',
    description: 'ぴあざさるうと美容室へのお問い合わせ・ご予約はこちらから。WEBフォームまたはお電話でお気軽にお申し込みください。',
    keywords: 'お問い合わせ, ご予約, 美容室, ぴあざさるうと, 練馬区, 南大泉',
    ogImage: '/images/hero-bg.jpg'
  };

  if (isSubmitted) {
    return (
      <>
        <SEO {...seoConfig} />
        <div className="min-h-screen bg-gradient-to-br from-light via-white to-primary/5 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-mincho font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                送信完了
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                お問い合わせありがとうございます。<br />
                24時間以内にご連絡いたします。
              </p>
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                ホームへ戻る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...seoConfig} />
      
      {/* ヒーローセクション */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-bg.jpg"
            alt="お問い合わせ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full mb-4 inline-block">
              CONTACT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            お問い合わせ・ご予約
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            お気軽にお問い合わせください<br className="md:hidden" />
            スタッフ一同お待ちしております
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* フォーム */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-mincho font-bold text-dark mb-4">
                  WEBでご予約
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  下記フォームにご記入いただき、送信してください。<br />
                  24時間以内にご連絡いたします。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="山田太郎"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="03-1234-5678"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    希望メニュー <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">選択してください</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">
                      希望日
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">
                      希望時間
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">選択してください</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-dark mb-2">
                    ご要望・ご質問
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="ご要望やご質問がございましたらご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>

            {/* 店舗情報・アクセス */}
            <div className="space-y-8">
              {/* 店舗情報 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-mincho font-bold text-dark mb-6">
                  店舗情報
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-2">住所</h4>
                      <p className="text-gray-600">
                        〒178-0065<br />
                        東京都練馬区南大泉1-15-38<br />
                        ファミーユ大泉1F
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-2">電話番号</h4>
                      <p className="text-gray-600">
                        <a href="tel:0339784800" className="text-primary hover:underline">
                          03-3978-4800
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-2">営業時間</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>火～土: 9:00 - 18:00</p>
                        <p>日・祝: 9:00 - 17:00</p>
                        <p className="text-red-500 font-medium">定休日: 月曜日</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 電話予約 */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-center text-dark">
                <h3 className="text-2xl font-mincho font-bold mb-4">
                  お急ぎの方はお電話で
                </h3>
                <p className="mb-6 text-dark/80">
                  当日予約・ご質問など<br />
                  お気軽にお電話ください
                </p>
                <a
                  href="tel:0339784800"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  03-3978-4800
                </a>
              </div>

              {/* アクセス情報 */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-mincho font-bold text-dark mb-6">
                  アクセス
                </h3>
                
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
                    </svg>
                    <span>西武池袋線「保谷駅」南口より徒歩1分</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z" />
                    </svg>
                    <span>駐車場完備（3台）</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>バリアフリー対応</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
