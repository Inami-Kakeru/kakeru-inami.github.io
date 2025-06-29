import { render, screen } from '@testing-library/react';
import App from './App';

describe('Appコンポーネント', () => {
  test('アプリケーションが正常にレンダリングされる', () => {
    render(<App />);
    // ヘッダーが存在することを確認
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('メインナビゲーションが表示される', () => {
    render(<App />);
    // ナビゲーションリンクが存在することを確認
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
}); 