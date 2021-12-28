import React from 'react'
import SignupHeader from './header'
import SignupCrededntials from './signup-credentials'
import { motion, AnimatePresence } from 'framer-motion'
import AlertContainer from '../alert-container'

export default function SignupContainer({theme, onSelect}) {
    return (
        <motion.main 
            className={`${theme} bg-otheruserContainer grid place-content-center gap-16 w-screen lg:max-h-[92vh] max-w-[1340px] h-screen lg:rounded-md shadow-xl`}>
            <SignupHeader/>
            <SignupCrededntials/>
            <section className="flex flex-col w-full justify-center">
                <p onClick={onSelect} className="text-center underline text-primary">Already have an account? Login.</p>
            </section>
        </motion.main>
    )
}