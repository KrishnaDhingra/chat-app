import React from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md";
import { AiFillHome, AiOutlineQuestionCircle, AiOutlineCloudDownload } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";


export default function Navbar({ onSelect }) {
    return (
        <nav 
        className="left-[-70px] z-10 sm:left-[0px] h-full w-[70px] sm:w-full bg-[#268D61] absolute sm:relative flex flex-col items-center gap-6 py-5 sm:rounded-l-md">

            <AiFillHome className="hover:text-white hover:opacity-100 text-gray-300 text-2xl font-bold opacity-70"/>
            <BiNotepad className="mt-4 hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            <AiOutlineCloudDownload className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            <AiOutlineQuestionCircle className="mt-auto hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            {/* <Link to="/signup"> */}
                <MdOutlineLogout 
                onClick={() => onSelect()}
                className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            {/* </Link> */}
            
        </nav>
    )
}