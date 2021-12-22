import { FRIENDS_DATA_STATE_CHANGE, FRIENDS_POSTS_STATE_CHANGE, FRIENDS_LIKES_STATE_CHANGE, CLEAR_DATA } from "../constants/constants"

const initialState = {
    friends: [],
    feed: [],
    friendsFollowingLoaded: 0,
}

export const friends = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_DATA_STATE_CHANGE:
            return {
                ...state,
                friends: [...state.friends, action.user]
            }
        case FRIENDS_POSTS_STATE_CHANGE:
            return {
                ...state,
                friendsFollowingLoaded: state.friendsFollowingLoaded + 1,
                feed: [...state.feed, ...action.posts]
            }
        case FRIENDS_LIKES_STATE_CHANGE:
            return {
                ...state,
                feed: state.feed.map(post => post.id == action.postId ? 
                    {...post, currentUserLike: action.currentUserLike} :
                    post)
            }
        case CLEAR_DATA:
            return initialState
        default:
            return state;
    }
}

