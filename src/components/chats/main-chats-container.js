import React from 'react'
import SearchBar from './searchbar'
import ChatWith from './chatwith'
import InnerChatsContainer from './inner-chats-container'
import ModeSwitcher from './mode-switcher'

export default function MainChatsContainer() {
    return (
        <div className="main-chats-container h-full w-full p-10 flex flex-col gap-7 rounded-r-md m-0 overflow-y-auto">
            <div className="w-full flex gap-4">
                <SearchBar/>
                <ModeSwitcher/>
            </div>
            <ChatWith/>
            <InnerChatsContainer/>
        </div>
    )
}