import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, USERS_DATA_STATE_CHANGE, USERS_POSTS_STATE_CHANGE, CLEAR_DATA} from '../constants/constants'
import firebase from 'firebase'
import { SnapshotViewIOSComponent } from 'react-native'

require('firebase/firestore')

// Clearing the redux store using the constant CLEAR_DATA
export function clearData() {
    return ((dispatch) => {
        dispatch({type: CLEAR_DATA})
    })
}


// As the name suggest, fetching User 
export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
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

// Redux store function to fetch all the user posts. and display if called upon

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


// Fetching the user following based on the following collections, it is to be properly implemented later on

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
                    dispatch(fetchUsersData(following[i], true));

                }
            })
    })
}

export function fetchUsersData(uid, getPosts) {
      return ((dispatch, getState) => {
      
            firebase.firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
                  if (snapshot.exists) {
                        let user = snapshot.data();
                        user.uid = snapshot.id;

                        dispatch({ type: USERS_DATA_STATE_CHANGE, user });
                  }
            })
            if (getPosts) {
            dispatch(fetchUsersFollowingPosts(uid));
            }
      
      })
}



export function fetchUsersFollowingPosts(uid) {
    return ((dispatch, getState) => {
        firebase.firestore()
            .collection("posts")
            .doc(uid)
            .collection("userPosts")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                  const uid = snapshot.docs[0].ref.path.split('/')[1];
                  


                  let posts = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                  })

                  
                  dispatch({ type: USERS_POSTS_STATE_CHANGE, posts, uid })

            })
    })
}

