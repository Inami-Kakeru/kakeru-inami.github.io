import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQ from './FAQ';

describe('FAQコンポーネント', () => {
  beforeEach(() => {
    render(<FAQ />);
  });

  test('FAQセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /よくある質問/i })).toBeInTheDocument();
  });

  test('アコーディオンメニューが表示される', () => {
    const accordionItems = screen.getAllByRole('button', { expanded: false });
    expect(accordionItems.length).toBeGreaterThan(0);
  });

  test('アコーディオンの開閉が機能する', async () => {
    const firstQuestion = screen.getAllByRole('button')[0];
    
    // 初期状態は閉じている
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
    
    // クリックで開く
    await userEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    
    // 再度クリックで閉じる
    await userEvent.click(firstQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });

  test('質問と回答が表示される', async () => {
    // 質問の表示確認
    const questions = screen.getAllByRole('heading', { level: 3 });
    expect(questions.length).toBeGreaterThan(0);
    
    // 最初の質問を開く
    await userEvent.click(screen.getAllByRole('button')[0]);
    
    // 回答の表示確認
    const answers = screen.getAllByRole('region');
    expect(answers[0]).toBeVisible();
  });

  test('カテゴリー別の表示切り替え', async () => {
    // カテゴリーフィルターの確認
    const categoryButtons = screen.getAllByRole('button', { name: /料金|予約|その他/i });
    expect(categoryButtons.length).toBeGreaterThan(0);
    
    // カテゴリー切り替え
    await userEvent.click(categoryButtons[0]);
    const filteredQuestions = screen.getAllByRole('button', { expanded: false });
    expect(filteredQuestions.length).toBeGreaterThan(0);
  });

  test('検索機能が動作する', async () => {
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
    
    // 検索実行
    await userEvent.type(searchInput, '料金');
    
    // 検索結果の表示確認
    const searchResults = screen.getAllByRole('button', { expanded: false });
    expect(searchResults.length).toBeGreaterThan(0);
  });

  test('お問い合わせリンクが表示される', () => {
    const contactLink = screen.getByRole('link', { name: /お問い合わせ/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
}); 