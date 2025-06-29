import React, { useState, useEffect, useMemo } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  quality = 75,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);

  // WebP対応のブラウザかどうかを判定
  const supportsWebP = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return canvas.getContext && canvas.getContext('2d') 
      ? canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
      : false;
  }, []);

  // 最適化された画像URLを生成
  const optimizedSrc = useMemo(() => {
    if (!src) return '';
    
    // 画像の拡張子を取得
    const extension = src.split('.').pop().toLowerCase();
    
    // WebP対応ブラウザの場合はWebP形式に変換
    if (supportsWebP && ['jpg', 'jpeg', 'png'].includes(extension)) {
      return src.replace(/\.(jpg|jpeg|png)$/, '.webp');
    }
    
    return src;
  }, [src, supportsWebP]);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    const element = document.getElementById(`image-${src}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    // エラー時は元の画像URLにフォールバック
    if (optimizedSrc !== src) {
      setIsLoaded(true);
    }
  };

  return (
    <div
      id={`image-${src}`}
      className={`relative ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: '#f3f4f6'
      }}
    >
      {isInView && !error && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          width={width}
          height={height}
          {...props}
        />
      )}
      {error && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 opacity-100 ${className}`}
          loading={priority ? 'eager' : 'lazy'}
          width={width}
          height={height}
          {...props}
        />
      )}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 