import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementAsync } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? 'Loading...' : 'Increment Async'}
      </button>
    </div>
  );
};

export default Counter;
