import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Testimonials from './Testimonials';

describe('Testimonialsコンポーネント', () => {
  beforeEach(() => {
    render(<Testimonials />);
  });

  test('お客様の声セクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /お客様の声/i })).toBeInTheDocument();
  });

  test('レビューカードが表示される', () => {
    const reviewCards = screen.getAllByRole('article');
    expect(reviewCards.length).toBeGreaterThan(0);
  });

  test('各レビューの基本情報が表示される', () => {
    // レビュー内容
    const reviewTexts = screen.getAllByText(/「.*」/);
    expect(reviewTexts.length).toBeGreaterThan(0);
    
    // お客様名
    const customerNames = screen.getAllByText(/様$/);
    expect(customerNames.length).toBeGreaterThan(0);
    
    // 施術内容
    const services = screen.getAllByText(/カット|カラー|パーマ/i);
    expect(services.length).toBeGreaterThan(0);
  });

  test('スライダーが機能する', async () => {
    // スライダーのコントロールが表示される
    const prevButton = screen.getByRole('button', { name: /前へ/i });
    const nextButton = screen.getByRole('button', { name: /次へ/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    
    // 最初のレビューを取得
    const firstReview = screen.getAllByRole('article')[0];
    const firstReviewText = firstReview.textContent;
    
    // 次へボタンをクリック
    await userEvent.click(nextButton);
    
    // レビューが変更されていることを確認
    const currentReview = screen.getAllByRole('article')[0];
    expect(currentReview.textContent).not.toBe(firstReviewText);
  });

  test('レビューの星評価が表示される', () => {
    const starRatings = screen.getAllByRole('img', { name: /星評価/i });
    expect(starRatings.length).toBeGreaterThan(0);
    
    // 各星評価のalt属性を確認
    starRatings.forEach(rating => {
      expect(rating).toHaveAttribute('alt', expect.stringMatching(/星評価/));
    });
  });

  test('レビューの日付が表示される', () => {
    const dates = screen.getAllByText(/\d{4}年\d{1,2}月\d{1,2}日/);
    expect(dates.length).toBeGreaterThan(0);
  });

  test('レビューの自動スライド', () => {
    jest.useFakeTimers();
    
    // 最初のレビューを取得
    const firstReview = screen.getAllByRole('article')[0];
    const firstReviewText = firstReview.textContent;
    
    // タイマーを進める
    jest.advanceTimersByTime(5000);
    
    // レビューが自動的に変更されていることを確認
    const currentReview = screen.getAllByRole('article')[0];
    expect(currentReview.textContent).not.toBe(firstReviewText);
    
    jest.useRealTimers();
  });
}); 