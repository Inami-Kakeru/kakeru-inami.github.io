import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecruitForm from './RecruitForm';

describe('RecruitFormコンポーネント', () => {
  beforeEach(() => {
    render(<RecruitForm />);
  });

  test('応募フォームの基本要素が表示される', () => {
    expect(screen.getByLabelText(/氏名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/電話番号/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/希望職種/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/志望動機/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /応募する/i })).toBeInTheDocument();
  });

  test('必須フィールドのバリデーション', async () => {
    const submitButton = screen.getByRole('button', { name: /応募する/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/氏名は必須です/i)).toBeInTheDocument();
      expect(screen.getByText(/メールアドレスは必須です/i)).toBeInTheDocument();
      expect(screen.getByText(/電話番号は必須です/i)).toBeInTheDocument();
      expect(screen.getByText(/希望職種は必須です/i)).toBeInTheDocument();
      expect(screen.getByText(/志望動機は必須です/i)).toBeInTheDocument();
    });
  });

  test('電話番号のバリデーション', async () => {
    const phoneInput = screen.getByLabelText(/電話番号/i);
    await userEvent.type(phoneInput, '123'); // 不正な電話番号
    const submitButton = screen.getByRole('button', { name: /応募する/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/有効な電話番号を入力してください/i)).toBeInTheDocument();
    });
  });

  test('ファイルアップロードのバリデーション', async () => {
    const fileInput = screen.getByLabelText(/履歴書/i);
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    await userEvent.upload(fileInput, file);
    const submitButton = screen.getByRole('button', { name: /応募する/i });
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/PDFファイルをアップロードしてください/i)).toBeInTheDocument();
    });
  });
}); 