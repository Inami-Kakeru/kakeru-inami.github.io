import { render, screen } from '@testing-library/react';
import Concept from './Concept';

describe('Conceptコンポーネント', () => {
  beforeEach(() => {
    render(<Concept />);
  });

  test('コンセプトセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /コンセプト/i })).toBeInTheDocument();
  });

  test('メインコンセプトが表示される', () => {
    // メインコンセプトの見出し
    expect(screen.getByRole('heading', { name: /「.*」/i })).toBeInTheDocument();
    
    // コンセプトの説明文
    const conceptText = screen.getByText(/私たちは.*と考えています/i);
    expect(conceptText).toBeInTheDocument();
  });

  test('コンセプトの特徴が表示される', () => {
    // 特徴の見出し
    const features = screen.getAllByRole('heading', { level: 3 });
    expect(features.length).toBeGreaterThan(0);
    
    // 各特徴の説明文
    const featureDescriptions = screen.getAllByText(/^[^「].*[^」]$/);
    expect(featureDescriptions.length).toBeGreaterThan(0);
  });

  test('画像が表示される', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    
    // 各画像のalt属性を確認
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('アニメーション要素が存在する', () => {
    const animatedElements = screen.getAllByTestId('animated-section');
    expect(animatedElements.length).toBeGreaterThan(0);
  });

  test('スタッフの想いが表示される', () => {
    // スタッフの想いの見出し
    expect(screen.getByText(/スタッフの想い/i)).toBeInTheDocument();
    
    // スタッフのメッセージ
    const staffMessages = screen.getAllByText(/「.*」/);
    expect(staffMessages.length).toBeGreaterThan(0);
  });

  test('アクセシビリティ対応', () => {
    // 見出しの階層構造
    const headings = screen.getAllByRole('heading');
    const headingLevels = headings.map(h => parseInt(h.tagName[1]));
    expect(Math.max(...headingLevels) - Math.min(...headingLevels)).toBeLessThanOrEqual(2);
    
    // 画像のalt属性
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });
  });
}); 