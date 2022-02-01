import React, { useState } from 'react'
import ModeSwitcher from '../chats/mode-switcher'
import NotificationBar from './notification-bar'

export const NotificationContainer = ({onSelect}) => {
    return (

        <main className="z-0 bg-chatContainer flex flex-col gap-9 h-[100vh] lg:max-h-[92vh] lg:w-full py-7 pl-4 sm:pl-10 rounded-r-md m-0">

            <section className="flex w-full justify-between pr-4 sm:pr-10">
                <p className="text-primary text-3xl font-semibold">Notifications</p>
                <ModeSwitcher onSelect={onSelect}/>
            </section>

            <div className="h-full w-full main-chats-container overflow-y-auto sm:pr-10 pr-4">
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
                <NotificationBar/>
            </div>



        </main>
    )
}
export default NotificationContainer