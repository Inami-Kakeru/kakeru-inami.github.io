import { render, screen } from '@testing-library/react';
import OptimizedImage from './OptimizedImage';

describe('OptimizedImageコンポーネント', () => {
  const mockProps = {
    src: '/images/test.jpg',
    alt: 'テスト画像',
    width: 300,
    height: 200,
    className: 'test-image'
  };

  test('画像が正しく表示される', () => {
    render(<OptimizedImage {...mockProps} />);
    const image = screen.getByRole('img');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.src);
    expect(image).toHaveAttribute('alt', mockProps.alt);
    expect(image).toHaveAttribute('width', mockProps.width.toString());
    expect(image).toHaveAttribute('height', mockProps.height.toString());
    expect(image).toHaveClass(mockProps.className);
  });

  test('遅延読み込みが有効', () => {
    render(<OptimizedImage {...mockProps} />);
    const image = screen.getByRole('img');
    
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  test('画像のサイズが正しく設定される', () => {
    render(<OptimizedImage {...mockProps} />);
    const image = screen.getByRole('img');
    
    expect(image).toHaveStyle({
      width: `${mockProps.width}px`,
      height: `${mockProps.height}px`
    });
  });

  test('alt属性が必須', () => {
    const { src, width, height, className } = mockProps;
    render(<OptimizedImage src={src} width={width} height={height} className={className} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
  });

  test('エラー時のフォールバック画像が表示される', () => {
    const onError = jest.fn();
    render(
      <OptimizedImage
        {...mockProps}
        src="/invalid-image.jpg"
        onError={onError}
      />
    );
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    expect(onError).toHaveBeenCalled();
  });
}); 