/*import { useDispatch, useSelector } from 'react-redux';
import {increment , descrement , reset , incrementByAmount} from './features/counter/counterSlice';



function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <br/>
      <button onClick={() => dispatch(descrement())}>-</button>
      <br/>
      <button onClick={() => dispatch(reset())}>reset</button>
      <br/>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </main>
  )
}

export default App; */

import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { items, status, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch]);
  return (
    <div>
      <h1>Users list</h1>
      {status === 'loading' && <p>Users information is still loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      {status === 'succeeded' && 
      items.map((user) => (
        <div key={user.id}>
          <h3>Name - {user.name}</h3>
          <p>E-mail - {user.email}</p>
          <p>City - {user.address.city}</p>
        </div>
      ))}

    </div>
  )
}
export default App;

