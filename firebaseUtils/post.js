import { QuerySnapshot } from 'firebase/firestore'
import {firestore,auth} from '../firebase'
import {mHash} from '../utils/common'

class Post {
    db = firestore.collection('posts')
    constructor(post) {
        if(post) {
            this.post = {
                user_id : post.user_id || auth.currentUser.uid,
                description : post.description || '',
                post_image : post.post_image || '',
                symbol : post.symbol || mHash(),
                is_nft: post.is_nft || false,
                likes : post.likes || [],
                comments : post.comments || []
            }
        } else {
            this.post = undefined
        }
    }

    async save() {
        try {
            if(!this.post) return
            const date = new Date()
            const insetance = await this.db.add({
                user_id : this.post.user_id,
                posted_on : date.getDate(),
                description : this.post.description,
                post_image : this.post.post_image,
                symbol : this.post.symbol,
                is_nft : this.post.is_nft,
                likes : this.post.likes,
                comments : this.post.comments
            })
            return insetance
        } catch {
            return false
        }
    }

    async all() {
        try {
            const posts = firestore.collection('posts').get()
            .then(querySnapshot => {
                let data = []
                querySnapshot.forEach(record => {
                    data.push({...record.data(),id:record.id})
                })
                return data
            })
            return posts
        } catch {
            return false
        }
    }
    
    async update(id,fields) {
        try {
            firestore.collection("posts").doc(id).update(fields);
        } catch {
            return false
        }
    }
}

export default Post