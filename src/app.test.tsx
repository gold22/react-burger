import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders the constructor page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Соберите бургер/i);
  expect(linkElement).toBeInTheDocument();
});
