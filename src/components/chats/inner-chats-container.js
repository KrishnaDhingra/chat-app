import React from 'react'
import UserChat from './user-chat'
import OtherUserChat from './other-user-chat'
import ChatWith from './chatwith'
// import firebaseConfig from '../../firebase'
// import { initializeApp } from 'firebase/app'
// import {
//     getFirestore,
//     getDocs,
//     collection,
//     onSnapshot,
//     addDoc,
//     deleteDoc,
//     doc
// } from 'firebase/firestore'

// // const firebaseConfig = {
// //     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //     appId: process.env.REACT_FIREBASE_APP_ID
// // }

// // initializeApp(firebaseConfig)

// const db = getFirestore()
// const colRef = collection(db, 'chats')

// onSnapshot(colRef, (snapshot)=> {

//     let users = []
//     snapshot.docs.forEach(doc => {
//         users.push({...doc.data(), id:doc.id})
//     })
//     console.log(users)
// })

export default function InnerChatsContainer() {
    return (
        <section className="main-chats-container sm:w-full h-full flex flex-col gap-2  pr-4 sm:pr-10 overflow-y-auto">
                <ChatWith/>
                <UserChat/>
                <OtherUserChat/>
                <UserChat/>
                <UserChat/>
                <OtherUserChat/>
                <UserChat/>
                <OtherUserChat/>
                <OtherUserChat/>
                <OtherUserChat/>
                <UserChat/>
                <UserChat/>
                <OtherUserChat/>

        </section>
    )
}