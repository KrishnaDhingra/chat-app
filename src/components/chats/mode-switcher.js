import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export default function ModeSwitcher() {

    const [ side, setSide ] = useState('left')
    return (
        <div className="relative w-24 bg-gray-100 rounded-md flex justify-between px-4 py-2 items-center">
            <BiSun onClick={() => setSide('left')} className="z-10"/>
            <RiMoonLine onClick={() => setSide('right')} className="z-10"/>
            <motion.div className={`absolute h-full ${side}-0 z-0 w-12 rounded-md bg-[#268D61]`}>
            </motion.div>
        </div>
    )
}