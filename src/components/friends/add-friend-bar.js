import React, { useState, useEffect } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import sendNotification from './sendNotification'
import { db, authentication } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'

function AddFriendBar({ user }) {
  const [exists, setExists] = useState()
  useEffect(() => {
    let checkFriend = async () => {
      const docRef = doc(
        db,
        'friends',
        authentication.currentUser.uid,
        'friends',
        user.uid,
      )
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setExists(true)
      } else {
        setExists(false)
      }
    }
    checkFriend()
  }, [])

  return (
    <div className="relative friends-bar h-[68px] w-full bg-gray-chat-preview items-center flex gap-3">
      <img
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="other users dp"
        className="h-10 aspect-square rounded-full"
      />
      <div className="h-full justify-center flex flex-col grow">
        <span className="font-semibold text-sm text-primary">
          {user.displayName}
        </span>
        <span className="text-xs text-secondary text-normal">offline</span>
      </div>
      <div className="flex flex-row gap-4 text-sm text-primary mr-7">
        {exists ? (
          <span>Already Friends</span>
        ) : (
          <div className="icon-outer">
            <AiOutlineUserAdd
              onClick={() => {
                sendNotification(user)
              }}
              className="friends-bar-icons"
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default AddFriendBar
