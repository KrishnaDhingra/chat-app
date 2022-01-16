import React, { useState } from 'react'
import SearchBar from './searchbar'
import InnerChatsContainer from './inner-chats-container'
import ModeSwitcher from './mode-switcher'
import MessageInput from './message-input'
import useMessage from './useMessage.js'
import { authentication } from '../../firebase'

export default function MainChatsContainer(props) {

    const currentUserId = authentication.currentUser.uid
    const [ otherUserId, setOtherUserId ] = useState('MNLJ3ToQhvZwdi1Wk9wKbXnvB123')
    const [ message, setMessage ] = useState('')

    const { handleSubmit } = useMessage(
        currentUserId, 
        otherUserId, 
        message
    )

    const updateMessage = (text) => {
        setMessage(text)
    }
    return (
        <main className="outer-chat-container z-0 bg-chatContainer h-[100vh] lg:max-h-[92vh] lg:w-full py-10 pl-4 sm:pl-10 hidden sm:grid gap-7 rounded-r-md m-0">
            <section className="w-full flex gap-4 pr-4 sm:pr-10">
                <SearchBar/>
                <ModeSwitcher onSelect={props.onSelect}/>
            </section>
            <InnerChatsContainer/>
            <MessageInput onChange={updateMessage} message={message} onSubmit={handleSubmit}/>
        </main>
    )
}