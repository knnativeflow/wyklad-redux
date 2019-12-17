// CONSTS
const FETCH_USERS = 'users.FETCH_USERS'
const FETCH_USERS_SUCCESS = 'users.FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'users.FETCH_USERS_ERROR'

// ACTION
export const fetchUsers = () => ({ type: FETCH_USERS })
export const fetchUsersError = (error) => ({ type: FETCH_USERS_ERROR, error })
export const fetchUsersSuccess = (data) => ({ type: FETCH_USERS_SUCCESS, data })

// REDUCER
const initialState = {
  data: [],
  isFetching: false,
  error: null
}
export const users = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return {
        ...initialState,
        isFetching: true
      }
    case FETCH_USERS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    }
    default:
      return state;
  }
}

// JUST DO IT
export const fetchUsersUsingOnlyOneFunction = (dispatch) => {
  dispatch(fetchUsers())
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(fetchUsersSuccess(json)))
      .catch(err => dispatch(fetchUsersError(err.message)))
}
