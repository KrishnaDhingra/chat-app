import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from 'react-router-dom'
import { authentication } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupCredentials() {
    let history = useHistory()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const submit = (e) => {
        e.preventDefault()
        if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && password.length > 6) {

            return signInWithEmailAndPassword(authentication, email, password)
                .then((credential) => {
                    console.log('user logged in:', credential.user)

                    history.push('/')
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
        console.log('either email or password is not valid')
    }
    return (
        <form onSubmit={(e) => submit(e)} className="w-full sm:w-1/2 flex flex-col gap-3">
            <input 
            placeholder="Teacher / Student Id" 
            type="text" 
            className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput placeholder:text-primary outline-none bg-logininputBg focus:border-focus"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}/>

            <input 
            placeholder="8 Digit Pin" 
            type="password" 
            className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput outline-none bg-logininputBg placeholder:text-primary focus:border-focus"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}/>

            <button 
            type='submit'
            className="text-primary signup-submit-button flex justify-between items-center bg-[#00E99F] rounded px-4 py-4 border-[1.4px] border-transparent font-semibold text-left"
            >Login to you Account <BsArrowRight className="text-xl"/></button>
        </form>   
    )
}