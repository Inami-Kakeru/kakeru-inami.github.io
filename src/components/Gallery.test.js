import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gallery from './Gallery';

describe('Galleryコンポーネント', () => {
  beforeEach(() => {
    render(<Gallery />);
  });

  test('ギャラリーセクションが表示される', () => {
    expect(screen.getByRole('heading', { name: /ギャラリー/i })).toBeInTheDocument();
  });

  test('画像グリッドが表示される', () => {
    const imageGrid = screen.getByRole('grid');
    expect(imageGrid).toBeInTheDocument();
  });

  test('画像が表示される', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    
    // 各画像のalt属性とloading属性を確認
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('カテゴリーフィルターが機能する', async () => {
    // カテゴリーボタンの確認
    const categoryButtons = screen.getAllByRole('button', { name: /すべて|カット|カラー|パーマ/i });
    expect(categoryButtons.length).toBeGreaterThan(0);
    
    // カテゴリー切り替え
    await userEvent.click(categoryButtons[1]); // カットカテゴリーを選択
    const filteredImages = screen.getAllByRole('img');
    expect(filteredImages.length).toBeGreaterThan(0);
  });

  test('モーダル表示が機能する', async () => {
    // 最初の画像をクリック
    const firstImage = screen.getAllByRole('img')[0];
    await userEvent.click(firstImage);
    
    // モーダルが表示されることを確認
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // モーダル内の画像が表示される
    const modalImage = screen.getByRole('img', { name: firstImage.alt });
    expect(modalImage).toBeInTheDocument();
    
    // 閉じるボタンでモーダルを閉じる
    const closeButton = screen.getByRole('button', { name: /閉じる/i });
    await userEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('画像の遅延読み込み', () => {
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test('画像のアスペクト比が維持される', () => {
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveStyle({
        aspectRatio: expect.any(String)
      });
    });
  });
}); 