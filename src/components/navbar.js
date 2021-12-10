import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { AiFillHome, AiOutlineQuestionCircle, AiOutlineCloudDownload } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";


export default function Navbar() {
    return (
        <nav className="h-full w-full bg-[#268D61] flex flex-col items-center gap-6 py-5 rounded-l-md">
            <AiFillHome className="hover:text-white hover:opacity-100 text-gray-300 text-2xl font-bold opacity-70"/>
            <BiNotepad className="mt-4 hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            <AiOutlineCloudDownload className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            <AiOutlineQuestionCircle className="mt-auto hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            <MdOutlineLogout className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
        </nav>
    )
}