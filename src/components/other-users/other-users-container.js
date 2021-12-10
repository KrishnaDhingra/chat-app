import React from 'react';
import OtherUsersInfo from './other-users-info';
import OtherUsersOnline from './other-users-online.js'
import OtherUsersChats from './other-users-chats.js'

export default function OtherUsersContainer() {
    return (
        <div className="bg-gradient-to-b from-gray-100 via-white to-white other-users-container w-full h-full bg-blue-300">
            <OtherUsersInfo/>
            <OtherUsersOnline/>
            <OtherUsersChats/>
        </div>
    )
}