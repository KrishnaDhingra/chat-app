import React, { useState, useEffect } from 'react'
import { BsArrowRight } from "react-icons/bs";
import useForm from './useForm';
import validateInfo from './validateInfo'

export default function SigninCredentials() {

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const { handleSubmit, errors} = useForm(
        validateInfo,
        email,
        password
    );

    return (
        <div className="w-full sm:w-1/2">

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">

                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input 
                    placeholder="Email id" 
                    type="text" 
                    className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput placeholder:text-primary outline-none bg-logininputBg focus:border-focus"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                <input 
                    placeholder="6 Digit Pin" 
                    type="password" 
                    className="rounded text-primary border-[1.4px] px-4 py-4 border-loginInput outline-none bg-logininputBg placeholder:text-primary focus:border-focus"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />

                <button 
                type='submit'
                className="text-primary signup-submit-button flex justify-between items-center bg-[#00E99F] rounded px-4 py-4 border-[1.4px] border-transparent font-semibold text-left"
                >Login to you Account <BsArrowRight className="text-xl"/></button>
            </form>   
        </div>
    )
}