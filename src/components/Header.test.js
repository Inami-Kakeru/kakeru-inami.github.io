import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Headerコンポーネント', () => {
  beforeEach(() => {
    renderWithRouter(<Header />);
  });

  test('ヘッダーが表示される', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('ロゴが表示される', () => {
    const logo = screen.getByRole('img', { name: /ぴあざさるうと/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'ぴあざさるうと');
  });

  test('ナビゲーションメニューが表示される', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(screen.getByText(/ホーム/i)).toBeInTheDocument();
    expect(screen.getByText(/メニュー/i)).toBeInTheDocument();
    expect(screen.getByText(/スタッフ/i)).toBeInTheDocument();
    expect(screen.getByText(/お問い合わせ/i)).toBeInTheDocument();
  });

  test('ハンバーガーメニューがモバイル表示で機能する', async () => {
    const menuButton = screen.getByRole('button', { name: /メニュー/i });
    expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);
    expect(screen.getByRole('navigation')).toHaveClass('active');
    await userEvent.click(menuButton);
    expect(screen.getByRole('navigation')).not.toHaveClass('active');
  });

  test('予約ボタンが表示される', () => {
    const reservationButton = screen.getByRole('link', { name: /予約する/i });
    expect(reservationButton).toBeInTheDocument();
    expect(reservationButton).toHaveAttribute('href', '/reservation');
  });

  test('電話番号が表示される', () => {
    const phoneNumber = screen.getByText(/\d{2,4}-\d{2,4}-\d{4}/);
    expect(phoneNumber).toBeInTheDocument();
  });

  test('スクロール時のヘッダー動作', async () => {
    // スクロールイベントのシミュレーション
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
    expect(screen.getByRole('banner')).toHaveClass('scrolled');
    window.scrollY = 0;
    window.dispatchEvent(new Event('scroll'));
    expect(screen.getByRole('banner')).not.toHaveClass('scrolled');
  });
}); 