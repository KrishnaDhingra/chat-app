import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

export default function MessageInput() {
    return (
        <div className="w-full pr-10 flex gap-4">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="h-full aspect-square rounded-full"/>
            <input type="text" placeholder="Write here..." className="outline-none grow h-full border-b-2 border-gray-400 focus:border-[#268D61]" />
            <IoIosSend className="text-white h-full w-[40px] p-2.5 rounded-md bg-[#268D61]"/>
        </div>
    )
}