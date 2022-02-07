import { signOut } from 'firebase/auth'
import { authentication } from '../firebase'

export const logOut = () => {
    signOut(authentication)
}