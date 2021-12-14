import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export default function ModeSwitcher() {

    const [ side, setSide ] = useState('left')
    const [ sunColor, setsunColor ] = useState('white')
    const [ moonColor, setmoonColor ] = useState('black')

    useEffect(() => {
        return  () => {

            if(side === 'left'){
                setsunColor('black')
                setmoonColor('white')
                return
            }
            setmoonColor('black')
            setsunColor('white')
        }
    }, [side])
    return (
        <div className="relative w-24 bg-modeswithcerBg rounded-md flex justify-between px-4 py-2 items-center">
            <BiSun onClick={() => setSide('left')} className={`text-${sunColor} z-10`}/>
            <RiMoonLine onClick={() => setSide('right')} className={`text-${moonColor} z-10`}/>
            <motion.div className={`absolute h-full ${side}-0 z-0 w-1/2 rounded-md bg-navbarBg`}>
            </motion.div>
        </div>
    )
}