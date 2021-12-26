import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { authentication } from '../../firebase'
import { 
    signInWithPopup, 
    GoogleAuthProvider,
} from 'firebase/auth'

export default function SignupPlatforms() {


    const GoogleLogin = () => {
        let provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((credential) => {
                console.log('user logged in:', credential.user)
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