import React from 'react';
import GoogleMap from './GoogleMap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark dark:bg-gray-900 text-white">
      <div className="container-custom">
        {/* メインフッターセクション */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* 店舗情報 */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-mincho font-bold text-primary mb-6">ぴあざさるうと</h3>
              <p className="text-lg mb-6 text-gray-300">主婦層に選ばれる美容室</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p>〒178-0064</p>
                    <p>東京都練馬区南大泉5-35-8</p>
                    <p className="text-sm text-gray-400">（保谷駅北口徒歩1分）</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <GoogleMap />
                </div>

                <div className="flex items-center mt-6">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0339784800" className="text-xl font-semibold hover:text-primary transition-colors">
                    03-3978-4800
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p>営業時間: 10:00〜17:30</p>
                    <p className="text-sm text-gray-400">定休日: 木曜日・日曜日</p>
                  </div>
                </div>
              </div>

              {/* 特徴アイコン */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-lg text-sm">
                  🚗 駐車場完備
                </div>
                <div className="bg-secondary bg-opacity-10 text-secondary px-3 py-2 rounded-lg text-sm">
                  ♿ バリアフリー
                </div>
                <div className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-lg text-sm">
                  👶 ベビーカーOK
                </div>
              </div>
            </div>

            {/* ナビゲーション */}
            <div>
              <h4 className="text-xl font-semibold mb-6">サイトメニュー</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">ホーム</Link></li>
                <li><Link to="/menu" className="text-gray-300 hover:text-primary transition-colors">メニュー・料金</Link></li>
                <li><Link to="/salon" className="text-gray-300 hover:text-primary transition-colors">サロン紹介</Link></li>
                <li><Link to="/staff" className="text-gray-300 hover:text-primary transition-colors">スタッフ紹介</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">お問い合わせ</Link></li>
                <li><Link to="/recruit" className="text-gray-300 hover:text-primary transition-colors">求人情報</Link></li>
              </ul>
            </div>

            {/* 予約・お問い合わせ */}
            <div>
              <h4 className="text-xl font-semibold mb-6">ご予約</h4>
              <div className="space-y-4">
                <a href="/contact" className="btn-primary block text-center">
                  WEB予約はこちら
                </a>
                <div className="bg-gray-800 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">お電話でのご予約</p>
                  <a href="tel:0339784800" className="text-lg font-semibold hover:text-primary transition-colors">
                    03-3978-4800
                  </a>
                </div>
              </div>
              
              {/* ソーシャルメディア（将来用） */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-4 text-gray-400">SNS</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ボトムフッター */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} ぴあざさるうと All Rights Reserved.
              </p>
              <p className="text-sm text-primary font-medium">創業50年の歴史と信頼</p>
            </div>
            <div className="text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors mr-4">プライバシーポリシー</Link>
              <Link to="/legal-notice" className="hover:text-primary transition-colors">特定商取引法</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
