import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock des fichiers SVG
jest.mock('../assets/react.svg', () => 'reactLogo');
jest.mock('../assets/vite.svg', () => 'viteLogo');

describe('App Component', () => {
  test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders initial counter value', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });

    expect(button).toBeInTheDocument();
  });

  test('increments counter on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

  test('renders links with correct href attributes', () => {
    render(<App />);
    const viteLink = screen.getByRole('link', { name: /vite/i });
    const reactLink = screen.getByRole('link', { name: /react/i });

    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
  });
});
