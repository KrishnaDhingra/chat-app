import React, { useState } from 'react'
import ModeSwitcher from '../chats/mode-switcher'
import SearchBar from './friends-search'
import FriendBar from './friend-bar'

function FriendsContainer({onSelect}){
    return (
        <main className="z-0 bg-chatContainer flex flex-col gap-6 h-[100vh] lg:max-h-[92vh] lg:w-full py-7 pl-4 sm:pl-10 rounded-r-md m-0">

            <section className="flex flex-col gap-6 w-full pr-4 sm:pr-10">
                <section className="flex w-full">
                    <p className="text-primary text-3xl font-semibold">Friends</p>

                    <button className="bg-navbarBg rounded-md text-primary font-semibold ml-auto mr-6 text-sm py-2 px-4">Add Friend</button>

                    <ModeSwitcher onSelect={onSelect}/>
                </section>

                <SearchBar />
            </section>

            <div className="h-full w-full main-chats-container overflow-y-auto sm:pr-10 pr-4">

                {[1, 2, 3, 4, 5, 6, 7, 435, 6, 7, 7 , 6].map(element => {
                    return <FriendBar />
                })}
            </div>
            
        </main>

    )
}
export default FriendsContainer