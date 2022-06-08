import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { authentication } from '../../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { db } from '../../firebase'
import { updateProfile } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

export default function SigninPlatforms() {
  const newUserCollection = async (user) => {
    const docRef = doc(db, 'users', user.uid)
    const docSnap = getDoc(docRef)

    if (!docSnap.exists) {
      await setDoc(docRef, {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      })
    }
  }

  const GoogleLogin = () => {
    let provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
      .then((credential) => {
        newUserCollection(credential.user)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <section className="w-full sm:w-1/2 flex flex-col gap-3">
      <button
        onClick={() => GoogleLogin()}
        className="sign-up-platform-button flex text-primary font-medium items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] text-left"
      >
        <AiOutlineGoogle className="scale-150" /> Google
      </button>
      <button className="sign-up-platform-button sign-up-facebook flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left">
        <FaFacebookF className="scale-150" /> Facebook
      </button>
      <button className="sign-up-platform-button flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left">
        <AiFillApple className="scale-150" /> Apple
      </button>
    </section>
  )
}
