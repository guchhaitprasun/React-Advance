import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import userReducer from './slices/userSlice';
import { fetchUserEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(fetchUserEpic);

export default store;
