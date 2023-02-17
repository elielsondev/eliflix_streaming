import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders text: Hello, World!', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello, world/i);
  expect(linkElement).toBeInTheDocument();
});
