import { db, authentication } from '../../firebase';
import {
    addDoc,
    collection,
    serverTimestamp
} from 'firebase/firestore'
import { uid } from 'uid';


const sendNotification = async (user) => {
    const colRef = collection(db, 'notifications', user.uid, 'notifications')
    await addDoc(colRef, {
        id: uid(16),
        notificationType: 'friendRequest',
        from: authentication.currentUser.uid,
        sentByUsername: authentication.currentUser.displayName,
        sentAt: serverTimestamp()
    })
}
export default sendNotification