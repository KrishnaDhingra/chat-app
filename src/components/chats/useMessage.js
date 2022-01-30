import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import {
    doc,
    addDoc,
    collection,
    serverTimestamp
} from 'firebase/firestore'

const useMessage = (currentUserId, otherUserId, messageText, updateMessage) => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const roomId = currentUserId > otherUserId ? `${currentUserId + otherUserId}` : `${otherUserId + currentUserId}`
        const colRef = collection(db, "messages", roomId, "chat")

        if(messageText !== ''){
            await addDoc(colRef, {
                text: messageText,
                from: currentUserId,
                to: otherUserId,
                createdAt: serverTimestamp()
            })
        }
        updateMessage('')
    }
    return { handleSubmit }
}
export default useMessage