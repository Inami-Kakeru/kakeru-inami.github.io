import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // ここでエラーログの送信などを行うことができます
    console.error('エラーが発生しました:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <div>
              <h2 className="mt-6 text-3xl font-mincho text-gray-900">
                申し訳ありません
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                予期せぬエラーが発生しました。
              </p>
              <p className="mt-2 text-sm text-gray-500">
                しばらく時間をおいて再度お試しください。
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => window.location.reload()}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                ページを再読み込み
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 text-left">
                <details className="text-sm text-gray-500">
                  <summary>エラーの詳細</summary>
                  <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto">
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 