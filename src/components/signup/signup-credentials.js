import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function SignupCredentials() {
    const [ id, setId ] = useState('')
    const [ pin, setPin ] = useState('')
    const submit = (e) => {
        console.log({id, pin})
    }
    return (
        <form onSubmit={() => submit()} className="w-full sm:w-1/2 flex flex-col gap-3">
            <input 
            placeholder="Teacher / Student Id" 
            type="text" 
            className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput placeholder:text-primary outline-none bg-logininputBg focus:border-focus"
            onChange={(e) => setId(e.target.value)} 
            value={id}/>

            <input 
            placeholder="8 Digit Pin" 
            type="password" 
            className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput outline-none bg-logininputBg placeholder:text-primary focus:border-focus"
            onChange={(e) => setPin(e.target.value)} 
            value={pin}/>

            <button 
            type='submit'
            className="text-primary signup-submit-button flex justify-between items-center bg-[#00E99F] rounded px-4 py-4 border-[1.4px] border-transparent font-semibold text-left"
            >Login to you Account <BsArrowRight className="text-xl"/></button>
        </form>   
    )
}