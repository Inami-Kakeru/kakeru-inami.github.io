import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menuコンポーネント', () => {
  beforeEach(() => {
    render(<Menu />);
  });

  test('メニューセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /メニュー/i })).toBeInTheDocument();
  });

  test('カテゴリーが表示される', () => {
    expect(screen.getByText(/カット/i)).toBeInTheDocument();
    expect(screen.getByText(/カラー/i)).toBeInTheDocument();
    expect(screen.getByText(/パーマ/i)).toBeInTheDocument();
    expect(screen.getByText(/トリートメント/i)).toBeInTheDocument();
  });

  test('メニューアイテムが表示される', () => {
    // カットメニューの表示確認
    expect(screen.getByText(/レディースカット/i)).toBeInTheDocument();
    expect(screen.getByText(/メンズカット/i)).toBeInTheDocument();
    
    // カラーメニューの表示確認
    expect(screen.getByText(/フルカラー/i)).toBeInTheDocument();
    expect(screen.getByText(/リタッチ/i)).toBeInTheDocument();
  });

  test('料金表示が正しく行われる', () => {
    const priceElements = screen.getAllByText(/¥\d+,?\d*/);
    expect(priceElements.length).toBeGreaterThan(0);
  });

  test('所要時間の表示', () => {
    const timeElements = screen.getAllByText(/\d+分/);
    expect(timeElements.length).toBeGreaterThan(0);
  });
}); 