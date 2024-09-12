import todoReducer, { addTodo, removeTodo } from './todoSlice';
import '@testing-library/jest-dom';

describe('todoSlice', () => {
  const initialState = [];

  it('should handle initial state', () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addTodo', () => {
    const newTodo = 'Learn Redux Toolkit';
    const action = addTodo(newTodo);
    const nextState = todoReducer(initialState, action);
    expect(nextState).toEqual([{ id: expect.any(Number), text: newTodo }]);
  });

  it('should handle removeTodo', () => {
    const initialStateWithTodos = [
      { id: 1, text: 'Learn Redux Toolkit' },
      { id: 2, text: 'Learn Testing' },
    ];
    const action = removeTodo(1);
    const nextState = todoReducer(initialStateWithTodos, action);
    expect(nextState).toEqual([{ id: 2, text: 'Learn Testing' }]);
  });
});
