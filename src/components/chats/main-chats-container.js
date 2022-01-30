import React, { useState } from 'react'
import SearchBar from './searchbar'
import InnerChatsContainer from './inner-chats-container'
import ModeSwitcher from './mode-switcher'
import MessageInput from './message-input'
import useMessage from './useMessage.js'
import { authentication } from '../../firebase'

export default function MainChatsContainer({onSelect, otherUser}) {

    const currentUserId = authentication.currentUser.uid
    const [ message, setMessage ] = useState('')

    const updateMessage = (text) => {
        setMessage(text)
    }
    const { handleSubmit } = useMessage(
        currentUserId, 
        otherUser.uid, 
        message,
        updateMessage
    )
    return (
        <main className="outer-chat-container z-0 bg-chatContainer h-[100vh] lg:max-h-[92vh] lg:w-full py-10 pl-4 sm:pl-10 hidden sm:grid gap-7 rounded-r-md m-0">
            <section className="w-full flex gap-4 pr-4 sm:pr-10">
                <SearchBar/>
                <ModeSwitcher onSelect={onSelect}/>
            </section>
            <InnerChatsContainer otherUser={otherUser} currentUserId={currentUserId}/>
            <MessageInput onChange={updateMessage} message={message} onSubmit={handleSubmit}/>
        </main>
    )
}