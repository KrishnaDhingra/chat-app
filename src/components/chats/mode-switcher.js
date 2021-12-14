import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiMoonLine } from "react-icons/ri";
import { BiSun } from "react-icons/bi";

export default function ModeSwitcher(props) {

    const [ side, setSide ] = useState('left')
    const [ sunColor, setsunColor ] = useState('white')
    const [ moonColor, setmoonColor ] = useState('black')

    useEffect(() => {
        if(side === 'left'){
            setmoonColor('white')
            setsunColor('black')
            return
        }
        setmoonColor('black')
        setsunColor('white')
    }, [side])
    return (
        <div className="relative w-24 bg-modeswithcerBg rounded-md flex justify-between px-4 py-2 items-center">
            <RiMoonLine 
                onClick={
                    () => {
                        setSide('left')
                        props.onSelect()
                    }
                } 
                className={`text-${moonColor} z-10`}/>

            <BiSun 
                onClick={
                    () => {
                        setSide('right')
                        props.onSelect()
                    }
                } 
                className={`text-${sunColor} z-10`}/>
            <motion.div 
                 layout 
                 className={`absolute h-full m-0 p-0 ${side === 'left' ? 'left-0' : null} ${side}-0 z-0 w-1/2 rounded-md bg-navbarBg`}>
            </motion.div>
        </div>
    )
}