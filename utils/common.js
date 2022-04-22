import {firestore} from '../firebase'

/* Some common funtions used throughout the app */

//This funtions create a 5 digit hash to generate symbol of a post to be made NFT
export const mHash = () => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
   return result.toUpperCase();
}

//This funtion get the user from firebase based on user Id
export const getUser = (uid) => {
    const user = firestore.collection('users').where('uid','==',uid).get()
    .then(querySnapShot => {
        return querySnapShot.docs[0].data()
    })
    return user
}