import { USERS_DATA_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, CLEAR_DATA } from "../constants/constants"

const initState = {
    users: [],
    feed: [],
    usersFollowingLoaded: [],
}
export const users = (state = initState, action) => {
      switch (action.type) {
            case USERS_DATA_STATE_CHANGE:
                  return {
                  ...state,
                  users: [...state.users, action.user]
            }
            
            case USERS_POSTS_STATE_CHANGE:
                  return {
                  ...state,
                  usersFollowingLoaded: state.usersFollowingLoaded + 1,
                  feed: [...state.feed, ...action.posts]
            }
                  
            case CLEAR_DATA:
                  return initState
            default:
                  return state;
      }
}