import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

export default function SignupPlatforms() {
    return (
        <section className="grow flex flex-col gap-4">
            <button 
                type='submit'
                className="flex items-center gap-4 bg-transparent rounded px-4 py-4 border-2 border-black font-semibold text-left"
            ><AiOutlineGoogle className="scale-150"/> Google</button>
            <button 
                type='submit'
                className="flex items-center gap-4 bg-transparent rounded px-4 py-4 border-2 border-black font-semibold text-left"
            ><FaFacebookF className="scale-150"/> Facebook</button>
            <button 
                type='submit'
                className="flex items-center gap-4 bg-transparent rounded px-4 py-4 border-2 border-black font-semibold text-left"
            ><AiFillApple className="scale-150"/> Apple</button>
        </section>
    )
}