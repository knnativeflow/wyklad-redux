import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChildReduxComponent from './ChildReduxComponent'

const ExampleRedux = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.exampleValue)

  return (
    <section>
      <p>Wartość w komponencie narzędnym: {value}</p>
      <ChildReduxComponent />
      <button onClick={() => dispatch({ type: 'increment' })}>Wincyj</button>
    </section>
  );
}

export default ExampleRedux;
