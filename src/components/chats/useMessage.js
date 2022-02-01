import React from 'react'
import { db } from '../../firebase'
import {
    doc,
    addDoc,
    collection,
    serverTimestamp
} from 'firebase/firestore'
import { uid } from 'uid'

const useMessage = (currentUserId, otherUserId, messageText, updateMessage) => {

    const handleSubmit = async () => {

        const roomId = currentUserId > otherUserId ? `${currentUserId + otherUserId}` : `${otherUserId + currentUserId}`
        const colRef = collection(db, "messages", roomId, "chat")

        updateMessage('')
        
        if(messageText !== ''){
            await addDoc(colRef, {
                messageId: uid(16),
                text: messageText,
                from: currentUserId,
                to: otherUserId,
                createdAt: serverTimestamp()
            })
        }
    }
    return { handleSubmit }
}
export default useMessage