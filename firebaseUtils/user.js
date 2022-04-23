import {firestore,auth} from '../firebase'
import {getUser} from '../utils/common'

class User {
    db = firestore.collection('users')
    constructor(user) {
        if(user) {
            this.user = {
                uid : user.uid || '',
                name: user.name || '',
                username: user.username || '',
                email: user.email || '',
                password: user.password || '',
                wallet_acc: user.wallet_acc || '',
                profile_img: user.profile_img || ''
            }
        } else {
            this.user = undefined
        }
    }

    async save() {
        try {
            const insetance = await this.db.add({
                uid: this.user.uid,
                name: this.user.name,
                username: this.user.username,
                email: this.user.email,
                password: this.user.password,
                wallet_acc: this.user.wallet_acc,
                profile_img: this.profile_img
            })
            return insetance
        } catch {
            return false
        }
    }

    async update(fields) {
        try {
            getUser(auth.currentUser.uid)
            .then(user => firestore.collection("users").doc(user.id).update(fields))
        } catch {
            return false
        }
    }
}

export default User