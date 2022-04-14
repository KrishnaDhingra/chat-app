import { db, authentication } from '../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

const deleteNotification = async (notification) => {
  const docRef = doc(
    db,
    'notifications',
    authentication.currentUser.uid,
    'notifications',
    notification.id,
  )
  await deleteDoc(docRef)
  console.log('Deleted')
}
export default deleteNotification
