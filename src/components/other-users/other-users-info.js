import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { authentication } from '../../firebase'

export default function OtherUsersInfo() {
  const user = authentication.currentUser
  return (
    <section className="w-full z-0 h-full flex items-center justify-center flex-col bg-transparent">
      {user.photoURL ? (
        <img
          src={user.photoURL}
          className="h-[100px] aspect-square rounded-full mb-4 object-cover"
        />
      ) : (
        <div
          src={user.photoURL}
          className="h-[100px] aspect-square rounded-full mb-4 bg-gray-300"
        ></div>
      )}

      <h2 className="text-primary font-semibold">{user.displayName}</h2>

      <p className="text-xs text-secondary">My account</p>
    </section>
  )
}
