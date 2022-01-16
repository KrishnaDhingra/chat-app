import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import {
    doc,
    getDoc,
    updateDoc,
    setDoc,
    serverTimestamp
} from 'firebase/firestore'

const useMessage = (currentUserId, otherUserId, messageText) => {
    
    const updateForCurrentUser = async () => {
        const docRef = doc(db, 'users', currentUserId)
        const docSnap = await getDoc(docRef)
        const previousMessages = docSnap.data().messages
        previousMessages.push({
            from: currentUserId,
            message: messageText
        })
        let finalMessages = previousMessages
        updateDoc(docRef, {
            messages: finalMessages
        })
    }
    const updateForOtherUser = async () => {
        const docRef = doc(db, 'users', otherUserId)
        const docSnap = await getDoc(docRef)
        const previousMessages = docSnap.data().messages
        previousMessages.push({
            from: currentUserId,
            message: messageText
        })
        let finalMessages = previousMessages
        updateDoc(docRef, {
            messages: finalMessages
        })
    }


    const handleSubmit = async () => {

        updateForCurrentUser()
        updateForOtherUser()
    }
    return { handleSubmit }
}
export default useMessage