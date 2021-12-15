import React from 'react';
import OtherUsersInfo from './other-users-info';
import OtherUsersOnline from './other-users-online.js'
import OtherUsersChats from './other-users-chats.js'

export default function OtherUsersContainer() {
    return (
        <div className="bg-otheruserContainer other-users-container sm:w-[360px] lg:w-full h-screen lg:max-h-[92vh] sm:absolute lg:relative hidden sm:grid">
            <OtherUsersInfo/>
            <OtherUsersOnline/>
            <OtherUsersChats/>
        </div>
    )
}