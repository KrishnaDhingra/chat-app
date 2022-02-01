import React from 'react';
import OtherUsersInfo from './other-users-info';
import OtherUsersOnline from './other-users-online.js'
import OtherUsersChats from './other-users-chats.js'

export default function OtherUsersContainer({selectedUser, changeScreen}) {
    return (
        <main className="bg-otheruserContainer other-users-container sm:w-[360px] lg:w-full h-screen lg:max-h-[92vh] sm:absolute lg:relative grid">
            <OtherUsersInfo/>
            <OtherUsersOnline/>
            <OtherUsersChats selectedUser={selectedUser} changeScreen={changeScreen}/>
        </main>
    )
}