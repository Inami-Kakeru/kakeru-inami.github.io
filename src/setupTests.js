// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// IntersectionObserverのモック
class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }

  observe() {
    // 即座に要素が表示された状態をシミュレート
    this.callback([{ isIntersecting: true }]);
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
}

// グローバルにIntersectionObserverを追加
global.IntersectionObserver = IntersectionObserver;

// ResizeObserverのモック
class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
}

// グローバルにResizeObserverを追加
global.ResizeObserver = ResizeObserver;

// HTMLCanvasElement.getContextのモック
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => ({
    // 必要に応じてメソッドを追加
    getImageData: () => ({}),
    toDataURL: () => '',
  }),
});

Object.defineProperty(HTMLCanvasElement.prototype, 'toDataURL', {
  value: () => '',
});

// window.matchMediaのモック（Jest/Testing用）
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function() {}, // deprecated
      removeListener: function() {}, // deprecated
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() { return false; }
    };
  };
} 