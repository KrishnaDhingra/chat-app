import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLogout } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { FaUserFriends } from 'react-icons/fa'
import { IoNotificationsSharp } from 'react-icons/io5'
import ConfirmationPopup from './confirmation-popup'
import { logOut } from '../functions/logout.js'
import { AnimatePresence } from 'framer-motion'
import { ScreenContext } from '../App'

export default function Navbar() {
  const [visibility, setVisibility] = useState(false)

  let toggleVisibility = () => {
    setVisibility(false)
  }

  const { screen, setScreen } = useContext(ScreenContext)

  return (
    <nav className="left-[-70px] sm:left-[0px] h-full w-[70px] sm:w-full bg-[#268D61] flex flex-col items-center gap-6 py-5 sm:rounded-l-md">
      <Link to="/">
        <AiFillHome className="hover:text-white hover:opacity-100 text-gray-300 text-2xl font-bold opacity-70" />
      </Link>
      <Link to="/">
        <FaUserFriends
          onClick={() => setScreen('friends')}
          className="mt-4 hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"
        />
      </Link>
      <Link to="/">
        <IoNotificationsSharp
          onClick={() => setScreen('notifications')}
          className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"
        />
      </Link>

      <Link className="mt-auto" to="/settings">
        <FiSettings className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70" />
      </Link>

      <MdOutlineLogout
        onClick={() => {
          setVisibility(true)
        }}
        className="hover:text-white hover:opacity-100 text-gray-300 text-xl font-bold opacity-70"
      />
      <AnimatePresence>
        {visibility && (
          <ConfirmationPopup
            onSelect={toggleVisibility}
            operation={logOut}
            heading={'Confirm Logout'}
            text={
              'Are you sure you want to logout? This action cannot be reversed'
            }
          />
        )}
      </AnimatePresence>
    </nav>
  )
}
