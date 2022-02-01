import { db, authentication } from '../../firebase';
import {
    collection,
    onSnapshot,
    deleteDoc,
} from 'firebase/firestore'

const deleteNotification = async (notification) => {
    const colRef = collection(db, 'notifications', authentication.currentUser.uid, 'notifications')
    await onSnapshot(colRef, (snapshot) => {
        snapshot.forEach(doc => {
            if(doc.data().id == notification.id){
                deleteDoc(doc)
            }
        })
    })
}
export default deleteNotification