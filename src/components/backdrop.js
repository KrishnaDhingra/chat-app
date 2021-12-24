import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick} ) => {
    return (
        <motion.div 
            onClick={() => onClick()}
            className="absolute flex justify-center items-between w-full h-full bg-[#000000e1] rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop