import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  return <div>
    <h2>Redux saga example</h2>
    <button onClick={() => dispatch(fetchUserRequest())}>Fetch Users</button>
    {
      loading && <p>Loading ....</p>
    }
    {
      error && <p>{error}</p>
    }
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  </div>
}

export default App;