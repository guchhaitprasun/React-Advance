import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/dataSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  const d = useSelector((state) => state);

  console.log(d)

  // Dispatch fetchData thunk when component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts:</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
