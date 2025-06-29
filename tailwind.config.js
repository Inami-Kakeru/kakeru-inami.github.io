/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#d4c5b9', // ベージュ系メインカラー
        secondary: '#a8c9a8', // ライトグリーン系アクセントカラー
        dark: '#5c4b3e', // ダークブラウン（テキスト）
        light: '#f8f5f2', // オフホワイト（背景）
        accent: '#bfa880', // アクセント用サンドベージュ
        base: '#f8f5f1',  // サイト全体の背景アイボリー
        // 茶色系カラーパレット
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#2d1b1a',
        },
        // Dark mode palette
        darkBg: '#1f2937',
        darkSurface: '#374151',
        darkText: '#d1d5db',
      },
      fontFamily: {
        mincho: ['"Noto Serif JP"', 'serif'], // 明朝体
        gothic: ['"Noto Sans JP"', 'sans-serif'], // ゴシック体
      },
      spacing: {
        'fluid-hero': 'calc(100vh - 4rem)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
