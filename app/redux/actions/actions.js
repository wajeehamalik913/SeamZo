import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, FRIENDS_DATA_STATE_CHANGE,FRIENDS_POSTS_STATE_CHANGE, FRIENDS_LIKES_STATE_CHANGE, CLEAR_DATA} from '../constants/constants'
import firebase from 'firebase'
import { SnapshotViewIOSComponent } from 'react-native'
require('firebase/firestore')


export function clearData() {
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}
export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("friends")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log('does not exist')
                }
            })
    })
}

export function fetchUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("posts")
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                dispatch({ type: USER_POSTS_STATE_CHANGE, posts })
            })
    })
}

export function fetchUserFollowing() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("following")
            .doc(firebase.auth().currentUser.uid)
            .collection("userFollowing")
            .onSnapshot((snapshot) => {
                let following = snapshot.docs.map(doc => {
                    const id = doc.id;
                    return id
                })
                dispatch({ type: USER_FOLLOWING_STATE_CHANGE, following });
                for(let i = 0; i < following.length; i++){
                    dispatch(fetchfriendsData(following[i], true));
                }
            })
    })
}

export function fetchFriendsData(uid, getPosts) {
    return ((dispatch, getState) => {
        const found = getState().friendsState.friends.some(el => el.uid === uid);
        if (!found) {
            firebase.firestore()
                .collection("friends")
                .doc(uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;

                        dispatch({ type: FRIENDS_DATA_STATE_CHANGE, user });
                    }
                    else {
                        console.log('does not exist')
                    }
                })
                if(getPosts){
                    dispatch(fetchFriendsFollowingPosts(uid));
                }
        }
    })
}

export function fetchFriendsFollowingPosts(uid) {
    return ((dispatch, getState) => {
        firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                const uid = snapshot.query._.C_.path.segments[1]
                const user = getState().friendsState.friends.find(el => el.uid === uid);


                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data, user }
                })

                for(let i = 0; i< posts.length; i++){
                    dispatch(fetchfriendsFollowingLikes(uid, posts[i].id))
                }
                dispatch({ type: FRIENDS_POSTS_STATE_CHANGE, posts, uid })

            })
    })
}

export function fetchFriendsFollowingLikes(uid, postId) {
    return ((dispatch, getState) => {
        firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .doc(postId)
            .collection("likes")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot) => {
                const postId = snapshot.ZE.path.segments[3];

                let currentUserLike = false;
                if(snapshot.exists){
                    currentUserLike = true;
                }

                dispatch({ type: FRIENDS_LIKES_STATE_CHANGE, postId, currentUserLike })
            })
    })
}