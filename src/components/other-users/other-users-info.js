import React from "react"
import { FiSettings } from "react-icons/fi"

export default function OtherUsersInfo() {
    return (
        <div className="relative w-full h-full flex items-center justify-center flex-col bg-transparent">
            <FiSettings className="text-primary absolute top-7 right-7"/>
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Other user avatar" className="h-[90px] aspect-square rounded-full mb-4"/>
            <h2 className="text-primary font-semibold">Sachin Dhingra</h2>
            <p className="text-xs text-secondary">My account</p>
        </div>
    )
}