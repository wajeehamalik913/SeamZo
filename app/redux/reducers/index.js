import { combineReducers } from 'redux'
import { user } from './user'

// We'll be combining reducers ahead, when we implement other functionalities like having friends 
const Reducers = combineReducers({
    userState: user,
})

export default Reducers