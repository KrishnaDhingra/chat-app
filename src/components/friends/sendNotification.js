import { db, authentication } from '../../firebase'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { uid } from 'uid'

const sendNotification = async (user) => {
  const id_ = uid(16)
  const colRef = doc(db, 'notifications', user.uid, 'notifications', id_)
  await setDoc(colRef, {
    id: id_,
    notificationType: 'friendRequest',
    from: authentication.currentUser.uid,
    sentAt: serverTimestamp(),
  })
}
export default sendNotification
