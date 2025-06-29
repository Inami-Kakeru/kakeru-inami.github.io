export class ApiError extends Error {
  constructor(status, message, data = null) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

export const handleApiError = (error) => {
  if (error instanceof ApiError) {
    // APIエラーの場合
    switch (error.status) {
      case 400:
        return '入力内容に誤りがあります。';
      case 401:
        return '認証に失敗しました。再度ログインしてください。';
      case 403:
        return 'アクセス権限がありません。';
      case 404:
        return 'リソースが見つかりません。';
      case 500:
        return 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。';
      default:
        return '予期せぬエラーが発生しました。';
    }
  }

  // ネットワークエラーの場合
  if (!error.response) {
    return 'ネットワークエラーが発生しました。インターネット接続を確認してください。';
  }

  // その他のエラー
  return '予期せぬエラーが発生しました。';
};

export const createApiError = (response) => {
  const { status, data } = response;
  const message = data?.message || 'エラーが発生しました。';
  return new ApiError(status, message, data);
}; 