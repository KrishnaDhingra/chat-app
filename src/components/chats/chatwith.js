import React, { useContext } from 'react'
import { ChatContext } from '../../App'

export default function ChatWith() {
  const { chat, setChat } = useContext(ChatContext)

  return (
    <section className="flex flex-col sm:mb-0">
      <p className="text-sm text-secondary">Chat with</p>
      <p className="text-primary text-2xl font-semibold mb-8">
        {chat.displayName}
      </p>
    </section>
  )
}
