import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';
import '@testing-library/jest-dom';

test('renders initial count', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const countElement = screen.getByText(/Count: -1/i);
  expect(countElement).toBeInTheDocument();
});
