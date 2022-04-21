import { combineReducers } from 'redux'
import { user } from './user'
import { users } from './users'
// We'll be combining reducers ahead, when we implement other functionalities like having friends 
const Reducers = combineReducers({
    userState: user,
    usersState: users
})

export default Reducers