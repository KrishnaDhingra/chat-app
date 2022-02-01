import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

export default function MessageInput({onChange, message, onSubmit}) {
    return (
        <section className="w-full pr-4 sm:pr-10 flex gap-4">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="h-full aspect-square rounded-full"/>
            <input 
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSubmit()} 
                value={message}
                type="text" 
                placeholder="Write here..." className="bg-transparent text-primary text-sm placeholder:text-sm outline-none grow h-full border-b border-primary focus:border-focus" />
            <IoIosSend 
                onClick={onSubmit}
                className="text-white h-full w-[40px] p-2.5 rounded-md bg-navbarBg hover:bg-[#1c7950] text-sm placeholder:text-sm"/>
        </section>
    )
}