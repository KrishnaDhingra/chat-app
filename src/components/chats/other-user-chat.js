import React from 'react'

export default function OtherUserChat() {
    return (
        <div 
        className="chats mr-auto flex flex-col gap-1 w-max min-w-[100px] sm:min-w-[160px] lg:min-w-[200px] sm:max-w-[450px] max-w-[320px]">

            <span className="bg-chatSecondary w-min-content text-sm text-chatSecondary px-4 p-3 rounded-md rounded-bl-none text-left">Hell</span>
            
            <span className="text-xs text-left text-secondary">11:50</span>
        </div>
    )
}