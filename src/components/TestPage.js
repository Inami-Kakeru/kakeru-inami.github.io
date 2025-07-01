import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import AnimatedSection from './AnimatedSection';

const TestPage = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    memoryUsage: 0,
    imageLoadTimes: {}
  });

  // パフォーマンス計測
  useEffect(() => {
    const startTime = performance.now();
    
    // メモリ使用量の計測（可能な場合）
    if (window.performance && window.performance.memory) {
      setPerformanceMetrics(prev => ({
        ...prev,
        memoryUsage: window.performance.memory.usedJSHeapSize / 1024 / 1024
      }));
    }

    // 画像のロード時間計測
    const imageLoadTimes = {};
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const loadStart = performance.now();
      img.onload = () => {
        const loadTime = performance.now() - loadStart;
        imageLoadTimes[img.src] = loadTime;
        setPerformanceMetrics(prev => ({
          ...prev,
          imageLoadTimes: { ...prev.imageLoadTimes, [img.src]: loadTime }
        }));
      };
    });

    // 全体のロード時間計測
    window.addEventListener('load', () => {
      const totalLoadTime = performance.now() - startTime;
      setPerformanceMetrics(prev => ({
        ...prev,
        loadTime: totalLoadTime
      }));
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">コンポーネントテスト</h1>

      {/* パフォーマンスメトリクス表示 */}
      <section className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">パフォーマンスメトリクス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <p className="font-bold">全体ロード時間</p>
            <p>{performanceMetrics.loadTime.toFixed(2)}ms</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <p className="font-bold">メモリ使用量</p>
            <p>{performanceMetrics.memoryUsage.toFixed(2)}MB</p>
          </div>
        </div>
      </section>

      {/* 画像最適化テスト */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">画像最適化テスト</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 通常の画像 */}
          <div>
            <h3 className="text-lg font-bold mb-2">通常の画像</h3>
            <OptimizedImage
              src="/images/ナカヤママミ.png"
              alt="テスト画像1"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          {/* 優先読み込み画像 */}
          <div>
            <h3 className="text-lg font-bold mb-2">優先読み込み画像</h3>
            <OptimizedImage
              src="/images/マツモトタカコ.png"
              alt="テスト画像2"
              className="w-full h-64 object-cover rounded-lg"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* アニメーションテスト */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">アニメーションテスト</h2>
        <div className="space-y-8">
          {['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'].map((animation, index) => (
            <AnimatedSection
              key={animation}
              animation={animation}
              delay={index * 200}
              className="p-4 bg-white rounded-lg shadow"
            >
              <h3 className="text-lg font-bold mb-2">{animation} アニメーション</h3>
              <p>このセクションは {animation} アニメーションで表示されます。</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* アクセシビリティテスト */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">アクセシビリティテスト</h2>
        <div className="space-y-4">
          <button
            className="px-4 py-2 bg-primary text-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => alert('ボタンがクリックされました')}
          >
            キーボードフォーカステスト
          </button>
          <div
            role="button"
            tabIndex={0}
            className="p-4 bg-gray-100 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            onKeyPress={(e) => e.key === 'Enter' && alert('Enterキーが押されました')}
            onClick={() => alert('クリックされました')}
          >
            キーボード操作可能なdiv要素
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPage; 