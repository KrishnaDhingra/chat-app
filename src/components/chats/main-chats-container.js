import React from 'react'
import SearchBar from './searchbar'
import ChatWith from './chatwith'
import InnerChatsContainer from './inner-chats-container'
import ModeSwitcher from './mode-switcher'
import MessageInput from './message-input'

export default function MainChatsContainer() {
    return (
        <div className="outer-chat-container bg-chatContainer max-h-[92vh] w-full py-10 pl-10 grid gap-7 rounded-r-md m-0">
            <div className="w-full flex gap-4">
                <SearchBar/>
                <ModeSwitcher/>
            </div>
            <InnerChatsContainer/>
            <MessageInput/>
        </div>
    )
}