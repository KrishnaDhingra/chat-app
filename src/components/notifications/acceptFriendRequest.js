import { db, authentication } from '../../firebase'
import {
    collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore'

const acceptFriendRequest = async (notification) => {
    const currentUserRef = collection(db, "friends", authentication.currentUser.uid, "friends")
    const otherUserRef = collection(db, "friends", notification.from, "friends")
    const connectedAt = serverTimestamp()
    await addDoc(currentUserRef, {
        friendId: notification.from,
        connectedAt: connectedAt
    })
    await addDoc(otherUserRef, {
        friendId: authentication.currentUser.uid,
        connectedAt: connectedAt

    })
}
export default acceptFriendRequest