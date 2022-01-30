import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  doc, 
  setDoc,
} from 'firebase/firestore'

export default function OtherUsersChats({selectedUser}) {

    const colRef = collection(db, 'users')
    const [ users, setUsers ] = useState([])
    useEffect(() => {
        const unsub = onSnapshot(colRef, (snapshot) => {
    
            let users = []
            snapshot.docs.forEach(doc => {
                users.push({...doc.data(), id:doc.uid})
            })
            setUsers(users)
        })
        return () => unsub()
    }, [])

    return (
        <div className="chats-container pl-8 pr-6 pt-6 flex flex-col gap-3 h-full w-full  overflow-y-auto">
            <h2 className="text-primary font-semibold">Chats</h2>
            <input placeholder="Search for chats" type="text" className="bg-inputBg text-primary w-full py-2 px-3 outline-none border-none rounded-md focus:border-focus placeholder:text-sm"/>

            <div className="mt-5">
                {users.map((user => {
                    return(
                        <ChatPreview 
                            user={user}
                            selectedUser={selectedUser}
                        />
                    ) 
                }))}
            </div>
        </div>
    )
} 

function ChatPreview({selectedUser, user}) {
    return (
        <div
            onClick={() => selectedUser(user)}
            className="relative chat-preview h-[65px] py-3 w-full bg-gray-chat-preview flex gap-3"
        >
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="other users dp" className="h-full aspect-square rounded-full" />
            <div className="h-full justify-center flex flex-col grow">
                <span className="font-semibold text-sm text-primary">{user.displayName}</span>
                <span className="text-xs text-secondary text-normal">Hello how are you</span>
            </div>
            <span className="text-xs text-secondary text-normal">11:50</span>
        </div>
    )
}