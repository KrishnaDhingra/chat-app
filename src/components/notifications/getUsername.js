import { db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

const getUsername = async (userId) => {
  const docRef = doc(db, 'users', userId)
  const docSnap = await getDoc(docRef)
  return docSnap.data().displayName
}
export default getUsername
