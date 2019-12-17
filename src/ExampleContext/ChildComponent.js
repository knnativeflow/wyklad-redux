import React, { useContext } from 'react'
import MyContext from './context'

const ChildComponent = () => {
  return (
    <MyContext.Consumer>
      {value => (
        <p>Wartość w komponencie dziecku: <span>{value}</span></p>
      )}
    </MyContext.Consumer>
  )
}

// const ChildComponent = () => {
//   const value = useContext(MyContext)

//   return (
//     <p>Wartość w komponencie dziecka: <span>{value}</span></p>
//   )
// }

export default ChildComponent
