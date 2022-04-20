import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders load text', () => {
  render(<App />);
  const getText = screen.getByText(/App is loaded/i);
  expect(getText).toBeInTheDocument();
});
