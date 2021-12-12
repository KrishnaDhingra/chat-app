import React from 'react'
import UserChat from './user-chat'
import OtherUserChat from './other-user-chat'

export default function InnerChatsContainer() {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <UserChat/>
            <OtherUserChat/>
        </div>
    )
}