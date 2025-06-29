import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Servicesコンポーネント', () => {
  beforeEach(() => {
    render(<Services />);
  });

  test('サービスセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /施術メニュー|サービス/i })).toBeInTheDocument();
  });

  test('サービスカードが表示される', () => {
    // articleロールではなく、class="card"で取得
    const serviceCards = document.querySelectorAll('.card');
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  test('各サービスの基本情報が表示される', () => {
    // サービス名
    const serviceNames = screen.getAllByRole('heading', { level: 3 });
    expect(serviceNames.length).toBeGreaterThan(0);
    
    // サービス説明
    const serviceDescriptions = screen.getAllByText(/カット|カラー|パーマ|トリートメント|髪質|骨格|ライフスタイル|白髪|ヘッドスパ|エクステ|縮毛|エンジェリック/i);
    expect(serviceDescriptions.length).toBeGreaterThan(0);
    
    // 料金表示
    const prices = screen.getAllByText(/¥\d+,?\d*/);
    expect(prices.length).toBeGreaterThan(0);
  });

  test('「詳しく見る」リンクが表示される', () => {
    const detailLinks = screen.getAllByRole('link', { name: /詳しく見る/i });
    expect(detailLinks.length).toBeGreaterThan(0);
    detailLinks.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('/menu'));
    });
  });

  test('サービス画像が表示される', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('サービスカテゴリーの表示', () => {
    // カテゴリーの見出しや説明が複数ヒットするため、getAllByTextで確認
    expect(screen.getAllByText(/カット/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/カラー/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/パーマ/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/トリートメント/i).length).toBeGreaterThan(0);
  });
}); 