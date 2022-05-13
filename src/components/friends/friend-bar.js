import React, { useState, useEffect, useContext } from 'react'
import { RiMessageFill } from 'react-icons/ri'
import { IoMdRemove } from 'react-icons/io'
import ConfirmationPopup from '../confirmation-popup'
import { AnimatePresence } from 'framer-motion'
import { db, authentication } from '../../firebase'
import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import getUsername from '../notifications/getUsername'
import { ScreenContext, ChatContext } from '../../App'

function FriendBar({ friend }) {
  const [visibility, setVisibility] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const { screen, setScreen } = useContext(ScreenContext)
  const { chat, setChat } = useContext(ChatContext)

  let toggleVisibility = () => {
    setVisibility(false)
  }

  useEffect(async () => {
    setDisplayName(await getUsername(friend.friendId))
  }, [])

  // this will return information about the user stored in the user collection
  // right now this returns a promise
  const getFriendInfo = async () => {
    const docRef = doc(db, 'users', friend.friendId)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  const removeFriend = async () => {
    const docRef = doc(
      db,
      'friends',
      authentication.currentUser.uid,
      'friends',
      friend.friendId,
    )
    const friendDocRef = doc(
      db,
      'friends',
      friend.friendId,
      'friends',
      authentication.currentUser.uid,
    )

    await deleteDoc(docRef)
    await deleteDoc(friendDocRef)
    console.log('Deleted Friend')
  }

  return (
    <div
      onClick={() => {
        setChat(getFriendInfo())
        setScreen('messages')
      }}
      className="friends-bar h-[68px] w-full bg-gray-chat-preview items-center flex gap-3"
    >
      <img
        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="other users dp"
        className="h-10 aspect-square rounded-full"
      />
      <div className="h-full justify-center flex flex-col grow">
        <span className="font-semibold text-sm text-primary">
          {displayName}
        </span>
        <span className="text-xs text-secondary text-normal">offline</span>
      </div>
      <div className="flex flex-row gap-4 text-sm text-secondary mr-7">
        <div className="icon-outer">
          <RiMessageFill />
        </div>
        <div
          onClick={() => setVisibility(true)}
          className="bg-red-700 rounded-[50%] p-[0.7rem] hover:bg-red-800"
        >
          <IoMdRemove className="text-black" />
        </div>
      </div>
      <AnimatePresence>
        {visibility && (
          <ConfirmationPopup
            onSelect={toggleVisibility}
            operation={removeFriend}
            heading={'Remove from friends'}
            text={
              'Are you sure you want to remove this user from your friends ?'
            }
          />
        )}
      </AnimatePresence>
    </div>
  )
}
export default FriendBar
