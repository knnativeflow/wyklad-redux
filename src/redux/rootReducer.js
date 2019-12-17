import { combineReducers } from 'redux'

import { exampleValue } from 'ExampleRedux/redux'
import { users } from 'ExampleReduxFetch/redux'
import { posts } from 'ExampleReduxThunk/redux'

export default combineReducers({
  exampleValue,
  users,
  posts
})
