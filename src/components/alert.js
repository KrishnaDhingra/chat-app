import React, { useState } from 'react'
import { BsExclamationLg } from "react-icons/bs";
import { motion } from 'framer-motion'


const Alert = ({text}) => {
    const [ display, toggleDisplay ] = useState('flex')
    return (    
        <motion.div 
            initial={{
                opacity: 1
            }}
            animate={{
                opacity: 0,
                transition: {
                    delay: 3
                }
            }}
            className={`${display} flex-col justify-center px-4 py-4 bg-[#646669] w-full rounded-md`}>
            <span className="font-medium text-neutral-700">Notice</span>
            <span className="font-medium text-neutral-800">{text}</span>
        </motion.div>
    )
}
export default Alert