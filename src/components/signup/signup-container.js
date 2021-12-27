import React from 'react'
import SignupHeader from './header'
import SignupInputContainer from './signup-input-container'
import { motion, AnimatePresence } from 'framer-motion'
import AlertContainer from '../alert-container'

export default function SignupContainer({theme}) {
    return (
        <motion.main 
            className={`${theme} relative bg-otheruserContainer grid place-content-center gap-16 w-screen lg:max-h-[92vh] max-w-[1340px] h-screen lg:rounded-md shadow-xl`}>
            <SignupHeader/>
            <SignupInputContainer/>
            <p className="text-center underline text-primary">Forgot Password?</p>
            <AlertContainer/>
        </motion.main>
    )
}