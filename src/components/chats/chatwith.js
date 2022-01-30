import React from 'react'

export default function ChatWith({otherUser}) {
    return (
        <section className="flex flex-col sm:mb-0">
            <p className="text-sm text-secondary">Chat with</p>
            <p className="text-primary text-2xl font-semibold mb-8">{otherUser.displayName}</p>
        </section>
    )
}