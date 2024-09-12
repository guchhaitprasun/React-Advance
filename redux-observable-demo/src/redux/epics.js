import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fetchUser, fetchUserSuccess, fetchUserFailure } from './slices/userSlice';

// Define the epic
export const fetchUserEpic = (action$) =>
  action$.pipe(
    ofType(fetchUser.type),
    mergeMap(action =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/users/${action.payload}`).pipe(
        map(response => fetchUserSuccess(response)),
        catchError(error => of(fetchUserFailure(error.message)))
      )
    )
  );
