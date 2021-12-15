import React from 'react'
import UserChat from './user-chat'
import OtherUserChat from './other-user-chat'
import ChatWith from './chatwith'

export default function InnerChatsContainer() {
    return (
        <div className="main-chats-container sm:w-full h-full flex flex-col gap-2  pr-4 sm:pr-10 overflow-y-auto">
                <ChatWith/>
                <UserChat/>
                <OtherUserChat/>
                <UserChat/>
                <UserChat/>
                <OtherUserChat/>
                <UserChat/>
                <OtherUserChat/>
                <OtherUserChat/>
                <OtherUserChat/>
                <UserChat/>
                <UserChat/>
                <OtherUserChat/>

        </div>
    )
}