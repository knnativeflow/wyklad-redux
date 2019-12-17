import { combineReducers } from 'redux'

// CONSTS
const FETCH_POSTS = 'posts.FETCH_POSTS'
const FETCH_POSTS_SUCCESS = 'posts.FETCH_POSTS_SUCCESS'
const FETCH_POSTS_ERROR = 'posts.FETCH_POSTS_ERROR'

const CREATE_POST = 'posts.CREATE_POST'
const CREATE_POST_SUCCESS = 'posts.CREATE_POST_SUCCESS'
const CREATE_POST_ERROR = 'posts.CREATE_POST_ERROR'

// ACTION USING REDUX-THUNK
export const fetchPosts = () => (dispatch) => {
  dispatch({ type: FETCH_POSTS })

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch({type: FETCH_POSTS_SUCCESS, data: json }))
    .catch(err => dispatch({type: FETCH_POSTS_ERROR, error: err.message }))
}

export const createPost = (post) => (dispatch) => {
  dispatch({ type: CREATE_POST })

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => dispatch({type: CREATE_POST_SUCCESS, data: json }))
    .catch(err => dispatch({type: CREATE_POST_ERROR, error: err.message }))
}

// REDUCER
const initialState = {
  isFetching: false,
  data: null,
  error: null
}

const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...initialState,
        isFetching: true
      }
    case FETCH_POSTS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    }
    case FETCH_POSTS_SUCCESS: {
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

const createReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST:
      return {
        ...initialState,
        isFetching: true
      }
    case CREATE_POST_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    }
    case CREATE_POST_SUCCESS: {
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

export const posts = combineReducers({
  create: createReducer,
  list: listReducer
})
