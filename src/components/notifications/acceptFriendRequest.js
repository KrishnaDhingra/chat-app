import { db, authentication } from '../../firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import deleteNotification from './deleteNotification'

const acceptFriendRequest = async (notification) => {
  const currentUserRef = doc(
    db,
    'friends',
    authentication.currentUser.uid,
    'friends',
    notification.from,
  )
  const otherUserRef = doc(
    db,
    'friends',
    notification.from,
    'friends',
    authentication.currentUser.uid,
  )
  const connectedAt = serverTimestamp()
  await setDoc(currentUserRef, {
    friendId: notification.from,
    connectedAt: connectedAt,
  })
  await setDoc(otherUserRef, {
    friendId: authentication.currentUser.uid,
    connectedAt: connectedAt,
  })
  console.log('Added friend')
  await deleteNotification(notification)
}
export default acceptFriendRequest
