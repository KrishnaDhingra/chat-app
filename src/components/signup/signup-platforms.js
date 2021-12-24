import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { authentication } from '../../firebase'
import { 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

export default function SignupPlatforms() {

    let history = useHistory()

    const GoogleLogin = async () => {
        let provider = new GoogleAuthProvider()
        await signInWithPopup(authentication, provider)
        onAuthStateChanged(authentication, (user) => {
            if(user){
                return history.push('/')
            }
        })
    }
    return (
        <section className="w-full sm:w-1/2 flex flex-col gap-3">
            <button 
                onClick={() => GoogleLogin()}
                className="sign-up-platform-button flex text-primary font-medium items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] text-left"
            ><AiOutlineGoogle className="scale-150"/> Google</button>
            <button 
                className="sign-up-platform-button sign-up-facebook flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left"
            ><FaFacebookF className="scale-150"/> Facebook</button>
            <button 
                className="sign-up-platform-button flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left"
            ><AiFillApple className="scale-150"/> Apple</button>
        </section>
    )
}