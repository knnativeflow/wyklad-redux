import React from 'react'
import { connect } from 'react-redux'

// import { fetchUsersUsingOnlyOneFunction } from './redux'

const ChildComponent = ({ dispatch, user }) => {

  // const handleClick = () => {
    // fetchUsersUsingOnlyOneFunction(dispatch)
  // }

  return (
    <section>
      <p>Dane losowego usera:</p>
      <p>{user.id} - {user.name} - {user.email}</p>
      {/* <button onClick={handleClick}>Pobierz znowu</button> */}
    </section>
  )
}

const mapStateToProps = ({ users }) => ({
  isFetching: users.isFetching,
  user: users.data[Math.floor(Math.random() * users.data.length)] || {},
  error: users.error,
})
export default connect(mapStateToProps)(ChildComponent)
