import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './features/counterSlice';
import { watchIncrementAsync } from './features/saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store and apply the saga middleware
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(watchIncrementAsync);

export default store;
