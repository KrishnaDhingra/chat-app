import React from "react"
import { FiSettings } from "react-icons/fi"
import { authentication } from "../../firebase"

export default function OtherUsersInfo() {

    const user = authentication.currentUser
    return (
        <section className="relative w-full z-0 h-full flex items-center justify-center flex-col bg-transparent">
            <FiSettings className="text-primary absolute top-7 right-7"/>

            <img src={user.photoURL} alt="Other user avatar" className="h-[90px] aspect-square rounded-full mb-4"/>
                
            <h2 className="text-primary font-semibold">{user.displayName}</h2>
            
            <p className="text-xs text-secondary">My account</p>
        </section>
    )
}