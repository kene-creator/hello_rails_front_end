import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../app/greetings';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveGreetings());
  }, []);

  return (
    <div>
      {greetings.map((greeting) => (
        <h1 key={greeting.message}>{greeting.message}</h1>
      ))}
    </div>
  );
}

export default Greeting;
