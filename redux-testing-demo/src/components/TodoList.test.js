import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/slice/todoSlice';
import TodoList from './TodoList';
import '@testing-library/jest-dom';

const renderWithStore = (component) => {
  const store = configureStore({ reducer: { todos: todoReducer } });
  return render(<Provider store={store}>{component}</Provider>);
};

describe('TodoList Component', () => {
  test('renders TodoList and allows adding and removing todos', () => {
    renderWithStore(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add');

    // Add a new todo
    fireEvent.change(input, { target: { value: 'Learn Redux Toolkit' } });
    fireEvent.click(addButton);

    // Check if the todo appears in the list
    expect(screen.getByText('Learn Redux Toolkit')).toBeInTheDocument();

    // Remove the todo
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    // Check if the todo is removed from the list
    expect(screen.queryByText('Learn Redux Toolkit')).not.toBeInTheDocument();
  });
});
