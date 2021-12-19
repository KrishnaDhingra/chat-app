import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

export default function SignupPlatforms() {
    return (
        <section className="w-full sm:w-1/2 flex flex-col gap-3">
            <button 
                type='submit'
                className="sign-up-platform-button flex text-primary font-medium items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] text-left"
            ><AiOutlineGoogle className="scale-150"/> Google</button>
            <button 
                type='submit'
                className="sign-up-platform-button sign-up-facebook flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left"
            ><FaFacebookF className="scale-150"/> Facebook</button>
            <button 
                type='submit'
                className="sign-up-platform-button flex text-primary items-center gap-4 bg-transparent rounded px-4 py-4 border-[1.4px] font-medium text-left"
            ><AiFillApple className="scale-150"/> Apple</button>
        </section>
    )
}