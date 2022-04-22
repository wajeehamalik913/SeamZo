import {firestore} from '../firebase'

class User {
    constructor(user) {
        this.db = firestore.collection('users')
        this.user = {
            uid : user.uid || '',
            name: user.name || '',
            username: user.username || '',
            email: user.email || '',
            password: user.password || '',
            wallet_acc: user.wallet_acc || ''
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
                wallet_acc: this.user.wallet_acc
            })
            return insetance
        } catch {
            return false
        }
    }
}

export default User