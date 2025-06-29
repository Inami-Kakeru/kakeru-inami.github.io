import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800" role="banner">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link to="/" className="flex items-center group" aria-label="ホームに戻る">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-mincho font-bold text-primary group-hover:text-secondary transition-colors">
                ぴあざさるうと
              </h1>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-light">
                主婦に選ばれる美容室
              </span>
            </div>
          </Link>

          {/* PC用ナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="メインナビゲーション">
            <Link to="/" className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium" aria-current="page">
              ホーム
            </Link>
            <Link to="/menu" className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium">
              メニュー
            </Link>
            <Link to="/salon" className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium">
              サロン紹介
            </Link>
            <Link to="/staff" className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium">
              スタッフ紹介
            </Link>
            <Link to="/recruit" className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium">
              求人情報
            </Link>
          </nav>

          {/* 右側エリア */}
          <div className="flex items-center space-x-4">
            {/* 電話番号・予約ボタン（PC） */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:0339784800" className="flex items-center text-dark dark:text-darkText font-semibold hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03-3978-4800
              </a>
              <a href="/contact" className="btn-primary">
                WEB予約
              </a>
            </div>

            {/* テーマトグル */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-dark dark:text-darkText hover:bg-primary hover:bg-opacity-10 transition-colors"
              aria-label="テーマ切替"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              )}
            </button>

            {/* モバイル用メニューボタン */}
            <button
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-dark dark:text-darkText"
              onClick={toggleMenu}
              aria-label="メニュー"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイル用ドロップダウンメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                to="/menu"
                className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                メニュー
              </Link>
              <Link
                to="/salon"
                className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                サロン紹介
              </Link>
              <Link
                to="/staff"
                className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                スタッフ紹介
              </Link>
              <Link
                to="/recruit"
                className="text-dark dark:text-darkText hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                求人情報
              </Link>
              
              {/* モバイル予約エリア */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <a href="tel:0339784800" className="flex items-center text-dark dark:text-darkText font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  03-3978-4800
                </a>
                <a href="/contact" className="btn-primary block text-center">
                  WEB予約
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
