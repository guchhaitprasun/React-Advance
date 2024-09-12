import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';

const UserComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const [id, setId] = useState(1)

  const handleFetchUser = () => {
    dispatch(fetchUser(id)); // Fetch user with ID 1
  };

  return (
    <div>
      <button onClick={handleFetchUser}>Fetch User</button>
      <input type='number' min={1} value={id} onChange={(e) => {setId(e.target.value)}}/>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
