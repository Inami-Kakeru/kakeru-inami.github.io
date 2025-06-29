import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footerコンポーネント', () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });

  test('フッターが表示される', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('サロン情報が表示される', () => {
    // サロン名
    expect(screen.getByText(/ぴあざさるうと/i)).toBeInTheDocument();
    
    // 住所
    expect(screen.getByText(/〒\d{3}-\d{4}/i)).toBeInTheDocument();
    
    // 電話番号
    expect(screen.getByText(/\d{2,4}-\d{2,4}-\d{4}/i)).toBeInTheDocument();
    
    // 営業時間
    expect(screen.getByText(/営業時間/i)).toBeInTheDocument();
  });

  test('ナビゲーションリンクが表示される', () => {
    const navLinks = screen.getAllByRole('link');
    
    // 主要なリンクの存在確認
    expect(screen.getByText(/ホーム/i)).toBeInTheDocument();
    expect(screen.getByText(/メニュー/i)).toBeInTheDocument();
    expect(screen.getByText(/スタッフ/i)).toBeInTheDocument();
    expect(screen.getByText(/お問い合わせ/i)).toBeInTheDocument();
    expect(screen.getByText(/プライバシーポリシー/i)).toBeInTheDocument();
  });

  test('SNSリンクが表示される', () => {
    // SNSアイコンの確認
    const socialLinks = screen.getAllByRole('link', { name: /Instagram|Twitter|Facebook/i });
    expect(socialLinks.length).toBeGreaterThan(0);
    
    // 各SNSリンクのhref属性確認
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('コピーライト表示', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} ぴあざさるうと`))).toBeInTheDocument();
  });

  test('アクセス情報が表示される', () => {
    // 最寄り駅
    expect(screen.getByText(/最寄り駅/i)).toBeInTheDocument();
    
    // アクセス方法
    expect(screen.getByText(/アクセス/i)).toBeInTheDocument();
  });

  test('予約・お問い合わせボタンが表示される', () => {
    const reservationButton = screen.getByRole('link', { name: /予約する/i });
    const contactButton = screen.getByRole('link', { name: /お問い合わせ/i });
    
    expect(reservationButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    
    expect(reservationButton).toHaveAttribute('href', '/reservation');
    expect(contactButton).toHaveAttribute('href', '/contact');
  });
}); 