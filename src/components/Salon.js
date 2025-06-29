import React from 'react';
import OptimizedImage from './OptimizedImage';
import GoogleMap from './GoogleMap';

const Salon = () => {
  return (
    <div className="min-h-screen bg-base salon-page">
      {/* ヒーローセクション */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/hero-bg.jpg"
            alt="サロン紹介"
            className="w-full h-full object-cover"
            priority={true}
          />
          {/* 茶色系の半透明オーバーレイで写真を淡くし、文字の可読性を向上 */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 via-brown-800/60 to-brown-900/50 dark:bg-brown-950/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-mincho font-bold mb-6">
            サロン紹介
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            創業50年、主婦層に愛される<br className="md:hidden" />
            アットホームな美容室
          </p>
        </div>
      </section>

      {/* メインコンセプト */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-mincho font-bold text-dark mb-6">
              ぴあざさるうととは
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-base rounded-lg p-8 md:p-12 mb-16">
              <div className="text-center">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-dark">
                  ぴあざさるうとは、練馬区南大泉で創業50年を迎える地域密着型の美容室です。<br />
                  長年にわたり、主婦層を中心とした幅広いお客様に愛され続けてきました。<br />
                  私たちは単なる美容室ではなく、お客様の人生に寄り添うパートナーとして、<br />
                  美しさと健康を提供し続けています。
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-accent">50</span>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">年</h3>
                <p className="text-gray-600">創業からの歴史と信頼</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">4.75</span>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">評価</h3>
                <p className="text-gray-600">お客様評価（5点満点）</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">地域密着</h3>
                <p className="text-gray-600">練馬区南大泉の皆様と共に</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サロンの特徴 */}
      <section id="features" className="py-20 bg-base">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-mincho font-bold text-dark mb-6">
              サロンの特徴
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* 主婦層支持 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark">主婦層の高い支持率</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                ホットペッパービューティーでも「主婦層の支持率◎」と紹介されている通り、
                子育て中のママさんや働く女性の皆様から絶大な信頼をいただいています。
              </p>
              
              <div className="space-y-4">
                {[
                  "子育て経験豊富なママさん美容師が多数在籍",
                  "子育ての悩みも相談できるアットホームな雰囲気",
                  "忙しい主婦の方でも通いやすい営業時間"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* バリアフリー */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark">バリアフリー対応</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                車椅子やベビーカーでも安心してご来店いただける完全バリアフリー設計。
                どなたでも快適にお過ごしいただけるよう、細部まで配慮しております。
              </p>
              
              <div className="space-y-4">
                {[
                  "車椅子での入店・施術が可能",
                  "ベビーカーのまま店内へ入店OK",
                  "段差のない安全な店内設計"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 軟水システム */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark">軟水システム完備</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                当店では、すべての水を軟水に変換するシステムを導入。
                髪と頭皮に優しく、敏感肌の方でも安心してご利用いただけます。
              </p>
              
              <div className="space-y-4">
                {[
                  "肌に優しい軟水でのシャンプー",
                  "髪の仕上がりがよりなめらかに",
                  "敏感肌の方も安心してご利用可能"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 専門技術 */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark">専門技術の豊富さ</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                インナーカラーや増毛エクステなど、専門技術を要する施術も得意としております。
                経験豊富なスタッフが、お客様のご要望に応じた最適な施術をご提供いたします。
              </p>
              
              <div className="space-y-4">
                {[
                  "インナーカラーの豊富な実績",
                  "増毛エクステの専門技術",
                  "豊富なトリートメントメニュー"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 店内紹介 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-mincho font-bold text-dark mb-6">
              店内のご紹介
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <OptimizedImage
                src="/images/salon-interior-1.jpg"
                alt="ぴあざさるうとの明るい店内"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-dark mb-6">明るく清潔な空間</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                自然光がたっぷりと入る明るい店内は、清潔感にあふれ、
                リラックスしてお過ごしいただけるよう配慮されています。
                落ち着いた色調でまとめられたインテリアは、
                どの年代の方にも愛される温かみのある雰囲気を演出しています。
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "自然光を活かした明るい店内", desc: "大きな窓から差し込む自然光で明るい空間" },
                  { title: "清潔感を重視した店内環境", desc: "徹底した衛生管理で安心・安全" },
                  { title: "落ち着いたインテリアデザイン", desc: "どの年代の方にも愛される温かみ" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-dark">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-semibold mb-6 text-dark">プライベート感のある施術空間</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                お客様がリラックスして施術を受けていただけるよう、
                プライベート感を大切にした施術空間をご用意しております。
                他のお客様の目を気にすることなく、
                ゆったりとした時間をお過ごしいただけます。
              </p>
              <div className="bg-base rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-dark">施術空間の特徴</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• セミプライベートな施術ブース</li>
                  <li>• 快適なシャンプー台</li>
                  <li>• 最新の美容機器を完備</li>
                  <li>• 十分な収納スペース</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <OptimizedImage
                src="/images/salon-styling-area.jpg"
                alt="施術空間の様子"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <OptimizedImage
                src="/images/salon-waiting-area.jpg"
                alt="待合室の様子"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-dark">ゆったりとした待合室</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ご来店いただいた瞬間から快適にお過ごしいただけるよう、
                待合室にもこだわりました。雑誌やお飲み物をご用意し、
                施術前後のお時間もリラックスしてお過ごしいただけます。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <h5 className="font-semibold mb-2 text-dark">雑誌コーナー</h5>
                  <p className="text-sm text-gray-600">最新の美容・ファッション雑誌</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <h5 className="font-semibold mb-2 text-dark">ドリンクサービス</h5>
                  <p className="text-sm text-gray-600">お茶・コーヒーなど</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 設備・サービス */}
      <section className="section-padding bg-base">
        <div className="container-custom">
          <h2 className="section-title mb-16">設備・サービス</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">ヘッドスパ専用設備</h3>
              <p className="text-gray-600">
                リラクゼーション効果の高いヘッドスパ専用のシャンプー台とマッサージ機器を完備
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">最新カラー設備</h3>
              <p className="text-gray-600">
                インナーカラーなどの繊細な技術に対応した最新のカラーリング設備
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">衛生管理システム</h3>
              <p className="text-gray-600">
                器具の完全滅菌システムと、感染症対策を徹底した安全な環境
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">駐車場完備</h3>
              <p className="text-gray-600">
                お車でのご来店も安心。専用駐車場をご用意しております
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">豊富な雑誌・書籍</h3>
              <p className="text-gray-600">
                美容・ファッション雑誌から一般誌まで、豊富な読み物をご用意
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zm11 4h-8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-dark">Wi-Fi完備</h3>
              <p className="text-gray-600">
                施術中やお待ちの間も、無料Wi-Fiをご利用いただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス情報 */}
      <section id="access" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-mincho font-bold text-dark mb-6">
              アクセス・店舗情報
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-base rounded-lg p-8">
                <h3 className="text-2xl font-bold text-dark mb-8">店舗詳細情報</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4 text-dark">基本情報</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex">
                        <span className="font-medium w-24 text-gray-600">店舗名：</span>
                        <span className="text-dark">ぴあざさるうと</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24 text-gray-600">住所：</span>
                        <span className="text-dark">〒178-0064<br />東京都練馬区南大泉5-35-8</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-24 text-gray-600">電話：</span>
                        <span className="text-dark">03-3978-4800</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4 text-dark">営業時間</h4>
                    <div className="space-y-3">
                      {[
                        { day: "月曜日", time: "10:00〜17:30", active: true },
                        { day: "火曜日", time: "10:00〜17:30", active: true },
                        { day: "水曜日", time: "10:00〜17:30", active: true },
                        { day: "木曜日", time: "定休日", active: false },
                        { day: "金曜日", time: "10:00〜17:30", active: true },
                        { day: "土曜日", time: "10:00〜17:30", active: true },
                        { day: "日曜日", time: "定休日", active: false }
                      ].map((schedule, index) => (
                        <div key={index} className={`flex justify-between p-3 rounded-lg ${schedule.active ? 'bg-white' : 'bg-gray-100'}`}>
                          <span className={schedule.active ? 'text-dark' : 'text-gray-400'}>{schedule.day}</span>
                          <span className={schedule.active ? 'text-dark font-medium' : 'text-gray-400'}>{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-4 text-dark">アクセス</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-dark">西武池袋線「保谷駅」北口より徒歩1分</p>
                          <p className="text-sm text-gray-600">
                            保谷駅は池袋から約20分、新宿から約25分の好アクセス。<br />
                            駅からとても近く、雨の日でも安心してご来店いただけます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg overflow-hidden">
                <GoogleMap />
              </div>
              
              <div className="bg-accent/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-dark">お車でお越しの方</h4>
                </div>
                <p className="text-gray-600 mb-2">専用駐車場をご用意しております</p>
                <p className="text-sm text-gray-500">
                  ※駐車場の利用については、事前にお電話でご確認ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-20 bg-base">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-mincho font-bold text-dark mb-6">
              お客様の声
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                rating: 5,
                age: "30代女性・主婦",
                comment: "子連れでも安心して通えるサロンです。ベビーカーのまま入店でき、スタッフの皆さんも子供に優しく接してくださいます。カットも毎回満足の仕上がりです。",
                period: "3年"
              },
              {
                rating: 5,
                age: "40代女性",
                comment: "インナーカラーをお願いしました。想像以上の仕上がりで、職場でも褒められました！技術力の高さを実感しています。",
                period: "2年"
              },
              {
                rating: 5,
                age: "50代女性",
                comment: "長年お世話になっています。スタッフの皆さんの人柄が良く、毎回楽しい時間を過ごしています。地域に根ざした素晴らしいサロンです。",
                period: "10年以上"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400 text-lg">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.age}</span>
                </div>
                
                <div className="mb-6">
                  <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-gray-600 italic leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark">リピーター歴：{testimonial.period}</span>
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-dark mb-4">
                ホットペッパービューティーでの評価
              </h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-accent mr-2">4.75</span>
                <div className="flex text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-600">
                300件以上のレビューをいただき、平均評価4.75点の高評価をいただいております
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-mincho font-bold mb-6 text-dark">ご予約・お問い合わせ</h2>
          <p className="text-xl text-gray-600 mb-10">
            創業50年の信頼と実績。<br />
            主婦層に愛され続ける「ぴあざさるうと」で、<br />
            あなたの美しさを引き出しませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:0339784800"
              className="btn-primary text-center text-xl px-12 py-4"
            >
              03-3978-4800
            </a>
            <a
              href="/contact"
              className="btn-secondary text-center text-xl px-12 py-4"
            >
              WEB予約はこちら
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>営業時間：10:00〜17:30 ｜ 定休日：木曜日・日曜日</p>
            <p>保谷駅北口徒歩1分 ｜ 駐車場完備 ｜ バリアフリー対応</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Salon;