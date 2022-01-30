import React from 'react'

export default function ChatWith({otherUser}) {
    return (
        <section className="flex flex-col mb-4 sm:mb-0">
            <p className="text-sm text-secondary">Chat with</p>
            <p className="text-primary text-2xl font-semibold">{otherUser.displayName}</p>
        </section>
    )
}