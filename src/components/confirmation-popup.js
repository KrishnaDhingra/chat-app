import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './backdrop.js'

let ConfirmationPopup = ({ onSelect, operation, heading, text }) => {

    const variants = {
        hidden:{
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.2
            }
        },
        exit:{ 
            opacity: 0,
            transition: {
               duration: 0.2
            }
        }
    }

    return (
        <Backdrop onClick={onSelect}>

            <motion.section 
                onClick={(e) => e.stopPropagation()}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-blue-300 max-w-[400px] h-[220px] w-[screen - 10px] confirmation-popup absolute flex flex-col rounded-md px-8 items-left justify-center gap-3">
                <p className="font-semibold text-2xl mb-3">{heading}</p>
                <p className="text-sm">{text}</p>
                <div className="flex gap-4">
                    <button 
                        className="text-sm w-[100px] px-4 py-2 rounded-full bg-white hover:bg-gray-100"
                        onClick={() => onSelect()}
                        >Cancel</button>
                    <button 
                        className="text-sm w-[100px] px-4 py-[5px] rounded-full bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => {
                            onSelect()
                            operation()
                        }}
                    >Sure</button>
                </div>

            </motion.section>

        </Backdrop>
    )
}
export default ConfirmationPopup