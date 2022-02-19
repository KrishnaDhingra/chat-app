import React from 'react'
import { IoMdRemove } from "react-icons/io";
import { BsCheck2 } from "react-icons/bs";
import acceptFriendRequest from './acceptFriendRequest';
import getUsername from './getUsername';
import deleteNotification from './deleteNotification'

function NotificationBar({notification}) {

    return (
        <div className="relative notification-bar h-[68px] w-full bg-gray-chat-preview items-center flex">
            
            <section className="h-full justify-center gap-1 flex flex-col grow">
                <span className="text-primary text-sm">You've received a friend request from {notification.sentByUsername}</span>
                <span className="text-xs text-secondary text-normal">1 January 10:01:10</span>
            </section>

            {notification.notificationType == 'friendRequest' && 
                <div 
                    onClick={() => {
                        acceptFriendRequest(notification)
                        deleteNotification(notification)
                    }}
                    className="p-2 rounded-full bg-green-600 hover:bg-green-700 ml-auto mr-3 text-sm">
                    <BsCheck2 className="friends-bar-icons"/>
                </div>
            }
            <div className="p-2 rounded-full bg-red-700 hover:bg-red-800  mr-7 text-sm">
                <IoMdRemove className="friends-bar-icons"/>
            </div>
        </div>
    )
}
export default NotificationBar