import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChildReduxComponent from './ChildReduxComponent'
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from './redux'

const ExampleReduxFetch = () => {
  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }

  return (
    <section>
      <button onClick={handleClick}>Pobierz userów</button>

      {/* {data.map(user => <p key={user.id}>{user.name}</p>)}
      {error && <p className="err-msg">{error}</p>}
      {isFetching && <p className="loading-msg">Ładuje...</p>} */}

      <ChildReduxComponent />
    </section>
  );
}

export default ExampleReduxFetch;


// const dispatch = useDispatch()
// const { isFetching, data, error } = useSelector((state) => state.users)

// const handleClick = () => {
//   dispatch(fetchUsers())
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => dispatch(fetchUsersSuccess(json)))
//     .catch(err => dispatch(fetchUsersError(err.message)))
// }



// const handleClick = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(fetch))
//     .catch(err => console.log(err))
// }
