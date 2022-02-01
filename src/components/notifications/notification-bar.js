import React from 'react'
import { IoMdRemove } from "react-icons/io";

function NotificationBar({from, sentByUsername, sentAt}) {
    return (
        <div className="relative notification-bar h-[68px] w-full bg-gray-chat-preview items-center flex">
            
            <section className="h-full justify-center gap-1 flex flex-col grow">
                <span className="text-primary text-sm">You've received a friend request from {sentByUsername}</span>
                <span className="text-xs text-secondary text-normal">1 January 10:01:10</span>
            </section>

            <div className="icon-outer notification-remove-icon-outer ml-auto mr-7 text-smicon-outer">
                <IoMdRemove className="friends-bar-icons"/>
            </div>
        </div>
    )
}
export default NotificationBar