import { render, screen } from '@testing-library/react';
import Access from './Access';

describe('Accessコンポーネント', () => {
  beforeEach(() => {
    render(<Access />);
  });

  test('アクセスセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /アクセス/i })).toBeInTheDocument();
  });

  test('地図が表示される', () => {
    const map = screen.getByRole('img', { name: /地図/i });
    expect(map).toBeInTheDocument();
    expect(map).toHaveAttribute('alt', 'ぴあざさるうと地図');
  });

  test('住所情報が表示される', () => {
    // 住所
    expect(screen.getByText(/〒\d{3}-\d{4}/)).toBeInTheDocument();
    
    // 最寄り駅
    expect(screen.getByText(/最寄り駅/i)).toBeInTheDocument();
    expect(screen.getByText(/徒歩\d+分/)).toBeInTheDocument();
  });

  test('アクセス方法の説明が表示される', () => {
    const accessInstructions = screen.getByText(/アクセス方法/i);
    expect(accessInstructions).toBeInTheDocument();
    
    // 具体的なアクセス方法の確認
    expect(screen.getByText(/駅から/i)).toBeInTheDocument();
    expect(screen.getByText(/バスで/i)).toBeInTheDocument();
  });

  test('駐車場情報が表示される', () => {
    expect(screen.getByText(/駐車場/i)).toBeInTheDocument();
    expect(screen.getByText(/台数/i)).toBeInTheDocument();
  });

  test('営業時間が表示される', () => {
    expect(screen.getByText(/営業時間/i)).toBeInTheDocument();
    expect(screen.getByText(/\d{1,2}:\d{2}/)).toBeInTheDocument();
  });

  test('定休日が表示される', () => {
    expect(screen.getByText(/定休日/i)).toBeInTheDocument();
    expect(screen.getByText(/毎週.*曜日/)).toBeInTheDocument();
  });

  test('Google Mapsへのリンクが機能する', () => {
    const mapLink = screen.getByRole('link', { name: /Google Mapsで見る/i });
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('href', expect.stringContaining('google.com/maps'));
    expect(mapLink).toHaveAttribute('target', '_blank');
    expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
}); 