import React from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";


export default function Navbar({ selectedUser, changeScreen, onSelect }) {
    return (
        <nav 
            className="left-[-70px] z-10 sm:left-[0px] h-full w-[70px] sm:w-full bg-[#268D61] absolute sm:relative flex flex-col items-center gap-6 py-5 sm:rounded-l-md">

            <Link to="/">
                <AiFillHome className="hover:text-white hover:opacity-100 text-gray-300 text-2xl font-bold opacity-70"/>
            </Link>

            <FaUserFriends 
                onClick={() => changeScreen('friends')}
                className="mt-4 hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>

            <IoNotificationsSharp 
                onClick={() => changeScreen('notifications')}
                className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            
            <Link className="mt-auto" to="/settings">
                <FiSettings className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
            </Link>

            <MdOutlineLogout 
                onClick={() => onSelect()}
                className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"/>
        
        </nav>
    )
}