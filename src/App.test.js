import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', (https://captainrealbtc-sturdy-goldfish-x6jxrgj75gphvwrq-8000.preview.app.github.dev/ú no) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
