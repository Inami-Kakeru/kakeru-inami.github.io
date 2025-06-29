import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import Contact from './Contact';

const renderWithHelmet = (component) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('Contactコンポーネント', () => {
  describe('初期表示のテスト', () => {
    test('フォームの基本要素が表示される', async () => {
      await renderWithHelmet(<Contact />);
      expect(screen.getByLabelText('お名前（必須）')).toBeInTheDocument();
      expect(screen.getByLabelText('メールアドレス（必須）')).toBeInTheDocument();
      expect(screen.getByLabelText('電話番号（必須）')).toBeInTheDocument();
      expect(screen.getByLabelText('お問い合わせ種別')).toBeInTheDocument();
      expect(screen.getByLabelText('プライバシーポリシーに同意します（必須）')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /送信/ })).toBeInTheDocument();
    });

    test('SEO情報が正しく設定されている', async () => {
      await renderWithHelmet(<Contact />);
      await waitFor(() => {
        expect(document.title).toBe('お問い合わせ・ご予約 | ぴあざさるうと');
      });
      await waitFor(() => {
        expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
          'content',
          '練馬区南大泉の美容室「ぴあざさるうと」へのお問い合わせ・ご予約はこちらから。WEB予約、お電話でのご予約も承っております。'
        );
      });
    });
  });

  describe('フォーム入力のテスト', () => {
    test('テキスト入力フィールドの値が正しく更新される', async () => {
      await renderWithHelmet(<Contact />);
      const nameInput = screen.getByLabelText('お名前（必須）');
      await userEvent.clear(nameInput);
      await userEvent.type(nameInput, '山田太郎');
      expect(nameInput).toHaveValue('山田太郎');
    });

    test('お問い合わせ種別の切り替えが正しく動作する', async () => {
      await renderWithHelmet(<Contact />);
      const typeSelect = screen.getByLabelText('お問い合わせ種別');
      
      // 初期状態は「ご予約」
      expect(screen.getByLabelText(/予約日/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/予約時間/i)).toBeInTheDocument();
      
      // 「お問い合わせ」に切り替え
      await userEvent.selectOptions(typeSelect, 'inquiry');
      expect(screen.queryByLabelText(/予約日/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/予約時間/i)).not.toBeInTheDocument();
    });
  });

  describe('バリデーションのテスト', () => {
    test('必須フィールドのバリデーション', async () => {
      await renderWithHelmet(<Contact />);
      const submitButton = screen.getByRole('button', { name: /送信/ });
      await userEvent.click(submitButton);
      await waitFor(() => {
        expect(screen.getByText('お名前を入力してください。')).toBeInTheDocument();
        expect(screen.getByText('メールアドレスを入力してください。')).toBeInTheDocument();
        expect(screen.getByText('電話番号を入力してください。')).toBeInTheDocument();
        expect(screen.getByText('プライバシーポリシーに同意してください。')).toBeInTheDocument();
      });
    });

    test('予約時の追加バリデーション', async () => {
      await renderWithHelmet(<Contact />);
      const submitButton = screen.getByRole('button', { name: /送信/ });
      
      // 必須フィールドを入力
      await userEvent.type(screen.getByLabelText('お名前（必須）'), '山田太郎');
      await userEvent.type(screen.getByLabelText('メールアドレス（必須）'), 'test@example.com');
      await userEvent.type(screen.getByLabelText('電話番号（必須）'), '090-1234-5678');
      
      // プライバシーポリシーに同意
      await userEvent.click(screen.getByLabelText('プライバシーポリシーに同意します（必須）'));
      
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/予約日を選択してください/i)).toBeInTheDocument();
        expect(screen.getByText(/予約時間を選択してください/i)).toBeInTheDocument();
      });
    });
  });

  describe('フォーム送信のテスト', () => {
    test('正常な送信フロー', async () => {
      await renderWithHelmet(<Contact />);
      await userEvent.type(screen.getByLabelText('お名前（必須）'), '山田太郎');
      await userEvent.type(screen.getByLabelText('メールアドレス（必須）'), 'test@example.com');
      await userEvent.type(screen.getByLabelText('電話番号（必須）'), '090-1234-5678');
      await userEvent.selectOptions(screen.getByLabelText('お問い合わせ種別'), 'reservation');
      await userEvent.type(screen.getByLabelText('予約日（必須）'), '2024-04-01');
      await userEvent.type(screen.getByLabelText('予約時間（必須）'), '14:00');
      await userEvent.click(screen.getByLabelText('プライバシーポリシーに同意します（必須）'));
      const submitButton = screen.getByRole('button', { name: /送信/ });
      await userEvent.click(submitButton);
      // 送信中...ボタンの表示確認
      expect(screen.getByRole('button', { name: /送信中/ })).toBeInTheDocument();
      // 送信完了後の状態を確認
      await waitFor(() => {
        expect(screen.getByText(/ご予約・お問い合わせありがとうございます/i)).toBeInTheDocument();
      });
    });
  });
}); 