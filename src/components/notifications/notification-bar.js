import React from 'react'
import { IoMdRemove } from "react-icons/io";

function NotificationBar() {
    return (
        <div className="relative notification-bar h-[68px] w-full bg-gray-chat-preview items-center flex">
            
            <section className="h-full justify-center flex flex-col grow">
                <span className="text-primary text-sm">You have a friend request from Krishna Dhingra</span>
                <span className="text-xs text-secondary text-normal">12 January 12:40:23</span>
            </section>

            <div className="icon-outer notification-remove-icon-outer ml-auto mr-7 text-smicon-outer">
                <IoMdRemove className="friends-bar-icons"/>
            </div>
        </div>
    )
}
export default NotificationBar