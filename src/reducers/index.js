import { combineReducers } from 'redux'

import authReducer from './auth.reducer'
import usersReducer from './users.reducer'
import adminsReducer from './admins.reducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  admins: adminsReducer,
})
