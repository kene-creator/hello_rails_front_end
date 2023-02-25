import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../app/greetings';

function Greeting() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveGreetings());
  }, []);

  return <div>{greetings.message}</div>;
}

export default Greeting;
