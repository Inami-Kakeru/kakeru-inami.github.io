import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Staff from './Staff';

// ルーターでラップするためのヘルパー関数
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Staffコンポーネント', () => {
  beforeEach(() => {
    renderWithRouter(<Staff />);
  });

  test('スタッフセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /スタッフ/i })).toBeInTheDocument();
  });

  test('スタッフカードが表示される', () => {
    const staffCards = screen.getAllByRole('article');
    expect(staffCards.length).toBeGreaterThan(0);
  });

  test('各スタッフの基本情報が表示される', () => {
    // 名前の表示確認
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(0);
    
    // 役職の表示確認
    const positions = screen.getAllByText(/スタイリスト|アシスタント|店長/i);
    expect(positions.length).toBeGreaterThan(0);
  });

  test('スタッフ詳細へのリンクが機能する', () => {
    const detailLinks = screen.getAllByRole('link', { name: /詳細を見る/i });
    expect(detailLinks.length).toBeGreaterThan(0);
    
    // 最初のリンクをクリック
    userEvent.click(detailLinks[0]);
    // ルーターの遷移は別のテストで確認
  });

  test('スタッフの写真が表示される', () => {
    const staffImages = screen.getAllByRole('img');
    expect(staffImages.length).toBeGreaterThan(0);
    
    // 画像のalt属性が存在することを確認
    staffImages.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });

  test('スタッフの特技・資格が表示される', () => {
    const skills = screen.getAllByText(/特技|資格/i);
    expect(skills.length).toBeGreaterThan(0);
  });
}); 