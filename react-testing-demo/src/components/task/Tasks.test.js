import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks"
import '@testing-library/jest-dom';

test('renders the component', () => {
    render(<Tasks />);
    expect(screen.getByText(/My Task Section/i)).toBeInTheDocument();
  });