import { takeEvery, put, delay } from 'redux-saga/effects';
import { incrementAsync, incrementAsyncSuccess, incrementAsyncFailure } from './counterSlice';

// Worker saga: performs the async increment task
function* incrementAsyncSaga() {
  try {
    yield delay(1000); // Simulate a delay
    yield put(incrementAsyncSuccess());
  } catch (e) {
    yield put(incrementAsyncFailure());
  }
}

// Watcher saga: watches for incrementAsync actions
export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}
