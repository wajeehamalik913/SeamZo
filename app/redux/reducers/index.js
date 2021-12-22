import { combineReducers } from 'redux'
import { friends } from './friends'
import { user } from './user'

const Reducers = combineReducers({
    userState: user,
    friendsState: friends
})

export default Reducers