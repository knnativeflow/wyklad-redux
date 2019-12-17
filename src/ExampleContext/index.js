import React, { useState } from 'react'

import ChildComponent from './ChildComponent'

import MyContext from './context'

const ExampleContext = () => {
  const [value, setValue] = useState(0)

  return (
    <MyContext.Provider value={value}>
      <p>Wartość w komponencie narzędnym: {value}</p>
      <ChildComponent />
      <button onClick={() => setValue(value + 1)}>Wincyj</button>
    </MyContext.Provider>
  );
}


export default ExampleContext;
