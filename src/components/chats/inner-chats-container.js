import React, { useState, useEffect, useContext } from 'react'
import UserChat from './user-chat'
import OtherUserChat from './other-user-chat'
import ChatWith from './chatwith'
import { db, authentication } from '../../firebase'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { ChatContext } from '../../App'

export default function InnerChatsContainer() {
  const [chats, setChats] = useState([])
  const { chat, setChat } = useContext(ChatContext)
  const otherUserId = chat.uid
  const currentUserId = authentication.currentUser.uid

  const roomId =
    currentUserId > otherUserId
      ? `${currentUserId + otherUserId}`
      : `${otherUserId + currentUserId}`
  const msgRef = collection(db, 'messages', roomId, 'chat')
  const q = query(msgRef, orderBy('createdAt', 'asc'))

  useEffect(() => {
    const unsub = onSnapshot(q, (snapshot) => {
      let chats = []
      snapshot.forEach((doc) => {
        chats.push(doc.data())
      })
      setChats(chats)
    })
    return () => unsub()
  }, [roomId])

  return (
    <section className="main-chats-container sm:w-full h-full flex flex-col gap-2  pr-4 sm:pr-10 overflow-y-auto">
      <ChatWith otherUser={chat} />

      {chats.length > 0 &&
        chats.map((element) => {
          return (
            <>
              {element.from == currentUserId ? (
                <UserChat
                  key={element.messageId}
                  messageId={element.messageId}
                  text={element.text}
                  chat={element}
                />
              ) : (
                <OtherUserChat
                  key={element.messageId}
                  text={element.text}
                  messageId={element.messageId}
                  chat={element}
                />
              )}
            </>
          )
        })}
    </section>
  )
}
