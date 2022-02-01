import React, { useState, useEffect, useRef } from 'react'
import UserChat from './user-chat'
import OtherUserChat from './other-user-chat'
import ChatWith from './chatwith'
import { db, authentication } from '../../firebase'
import {
    collection,
    onSnapshot,
    query,
    orderBy
} from 'firebase/firestore'

export default function InnerChatsContainer({currentUserId, otherUser}) {

    const [ chats, setChats ] = useState([])
    const otherUserId = otherUser.uid

    const roomId = currentUserId > otherUserId ? `${currentUserId + otherUserId}` : `${otherUserId + currentUserId}`
    const msgRef = collection(db, "messages", roomId, "chat")
    const q = query(msgRef, orderBy('createdAt', 'asc'))

    useEffect(() => {
        const unsub = onSnapshot(q, (snapshot) => {
    
            let chats = []
            snapshot.forEach(doc => {
                chats.push(doc.data())
            })
            setChats(chats)
        })
        return () => unsub()
    }, [roomId])

    return (
        <section className="main-chats-container sm:w-full h-full flex flex-col gap-2  pr-4 sm:pr-10 overflow-y-auto">
                <ChatWith otherUser={otherUser}/>

                {chats.length > 0 && chats.map(element => {
                    return (
                        <>
                            {element.from == currentUserId ? <UserChat key={element.createdAt.nanoseconds + Math.random()} text={element.text} chat={element}/> : <OtherUserChat text={element.text} chat={element}/>}
                        </>
                    )
                })}

        </section>
    )
}