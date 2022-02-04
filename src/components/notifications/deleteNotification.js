import { db, authentication } from '../../firebase';
import {
    collection,
    onSnapshot,
    deleteDoc,
} from 'firebase/firestore'

const deleteNotification = async (notification) => {
    const colRef = collection(db, 'notifications', authentication.currentUser.uid, 'notifications')
    console.log("this is coming from delete notification")
}
export default deleteNotification