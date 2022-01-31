import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome to beautiful', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to beautiful/i);
  expect(linkElement).toBeInTheDocument();
});
