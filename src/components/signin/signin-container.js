import React, { useState } from 'react'
import SigninHeader from './header'
import SigninInputContainer from './signin-input-container'
import SignupContainer from '../signup/signup-container'
import { motion, AnimatePresence } from 'framer-motion'

export default function SigninContainer({theme}) {

    const [ action, setAction ] = useState('signin')
    const toggleAction = () => {
        if(action == 'signin'){
            setAction('signup') 
            return
        }
        setAction('signin')
    }
    if(action == 'signin'){
        return (
            <motion.main 
                className={`${theme} relative bg-otheruserContainer grid place-content-center gap-16 w-screen lg:max-h-[92vh] max-w-[1340px] h-screen lg:rounded-md shadow-xl`}>
                <SigninHeader/>
                <SigninInputContainer/>
                <section className="flex flex-col w-full justify-center">
                    <p className="text-center underline text-primary">Forgot Password?</p>
                    <p 
                        onClick={toggleAction}
                        className="text-center underline text-primary">Don't have an account? Create one.</p>
                </section>
            </motion.main>

        )
    }else{
        return (
            <SignupContainer theme={theme} onSelect={toggleAction}/>
        )
    }
}