import React from 'react'
import { BiSearch } from "react-icons/bi"

export default function OtherUsersChats() {
    return (
        <div className="pl-8 pt-6 flex flex-col gap-3 h-full w-full">
            <h2 className="font-semibold">Chats</h2>
            <div className="relative w-full">
                <BiSearch className="absolute text-gray-200"/>
                <input placeholder="Search for chats" type="text" className="w-full py-2 px-3 outline-none border-2 border-gray-200 rounded-md placeholder:text-sm"/>
            </div>
        </div>
    )
} 