import React, { useState } from 'react'

export default function SignupCredentials() {
    const [ id, setId ] = useState('')
    const [ pin, setPin ] = useState('')
    const submit = (e) => {
        console.log({id, pin})
    }
    return (
        <form onSubmit={() => submit()} className="grow flex flex-col gap-4">
            <input 
            placeholder="Teacher / Student Id" 
            type="text" 
            className="rounded border-2 px-4 py-4 border-gray-400 outline-none focus:border-focus"
            onChange={(e) => setId(e.target.value)} 
            value={id}/>

            <input 
            placeholder="8 Digit Pin" 
            type="text" 
            className="rounded border-2 px-4 py-4 border-gray-400 outline-none focus:border-focus"
            onChange={(e) => setPin(e.target.value)} 
            value={pin}/>

            <button 
            type='submit'
            className="bg-navbarBg rounded px-4 py-4 border-2 border-transparent font-semibold text-left"
            >Login to you Account</button>
        </form>   
    )
}