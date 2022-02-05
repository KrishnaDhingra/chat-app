import React from "react"
import { FiSettings } from "react-icons/fi"
import { authentication } from "../../firebase"

export default function OtherUsersInfo() {

    const user = authentication.currentUser
    return (
        <section className="w-full z-0 h-full flex items-center justify-center flex-col bg-transparent">

            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Other user avatar" className="h-[100px] aspect-square rounded-full mb-4 object-cover"/>
                
            <h2 className="text-primary font-semibold">{user.displayName}</h2>
            
            <p className="text-xs text-secondary">My account</p>
        </section>
    )
}