import React from "react"
import { FiSettings } from "react-icons/fi"
import { authentication } from "../../firebase"
import { BigHead } from "@bigheads/core";
import { getRandomOptions  } from "../bigheads";

export default function OtherUsersInfo() {

    const user = authentication.currentUser
    user.photoURL  = null

    return (
        <section className="relative w-full z-0 h-full flex items-center justify-center flex-col bg-transparent">
            <FiSettings className="text-primary absolute top-7 right-7"/>
            {user.photoURL ? 
                <img src={user.photoURL} alt="Other user avatar" className="h-[90px] aspect-square rounded-full mb-4"/> : 
                <BigHead className="h-[90px] aspect-square" {...getRandomOptions()} />
            }
            <h2 className="text-primary font-semibold">{user.displayName}</h2>
            <p className="text-xs text-secondary">My account</p>
        </section>
    )
}