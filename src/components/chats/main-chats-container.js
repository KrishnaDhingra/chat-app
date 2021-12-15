import React from 'react'
import SearchBar from './searchbar'
import InnerChatsContainer from './inner-chats-container'
import ModeSwitcher from './mode-switcher'
import MessageInput from './message-input'

export default function MainChatsContainer(props) {
    return (
        <div className="outer-chat-container z-0 bg-chatContainer h-[100vh] lg:max-h-[92vh] lg:w-full py-10 pl-4 sm:pl-10 grid gap-7 rounded-r-md m-0">
            <div className="w-full flex gap-4 pr-4 sm:pr-10">
                <SearchBar/>
                <ModeSwitcher onSelect={props.onSelect}/>
            </div>
            <InnerChatsContainer/>
            <MessageInput/>
        </div>
    )
}