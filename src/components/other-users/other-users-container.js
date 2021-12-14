import React from 'react';
import OtherUsersInfo from './other-users-info';
import OtherUsersOnline from './other-users-online.js'
import OtherUsersChats from './other-users-chats.js'

export default function OtherUsersContainer() {
    return (
        <div className="bg-otheruserContainer other-users-container w-full max-h-[92vh]">
            <OtherUsersInfo/>
            <OtherUsersOnline/>
            <OtherUsersChats/>
        </div>
    )
}