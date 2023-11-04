import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component with initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByText('0');
  expect(countElement).toBeInTheDocument();
});

test('clicking the "+" button increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByText('0');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('1');
});

test('clicking the "-" button decrements the count when count > 0', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByText('0');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('0');

  fireEvent.click(screen.getByText('+'));
  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('0');
});

test('clicking the "Reset" button resets the count to 0', () => {
  render(<Counter />);
  const resetButton = screen.getByText('Reset');
  const countElement = screen.getByText('0');

  fireEvent.click(screen.getByText('+'));
  fireEvent.click(resetButton);

  expect(countElement).toHaveTextContent('0');
});
