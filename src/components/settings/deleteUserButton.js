import React, { useState } from 'react'
import { deleteUserFunc } from '../../functions/deleteUser'
import ConfirmationPopup from '../confirmation-popup'
import { AnimatePresence } from 'framer-motion'

const DeleteUserButton = () => {
  const [visibility, setVisibility] = useState(false)

  let toggleVisibility = () => {
    setVisibility(false)
  }

  return (
    <>
      <button
        onClick={() => setVisibility(true)}
        className="text-primary py-3 items-start px-5 w-max rounded-md bg-red-600 hover:bg-red-700 text-sm"
      >
        Delete Account
      </button>

      <AnimatePresence>
        {visibility && (
          <ConfirmationPopup
            onSelect={toggleVisibility}
            operation={deleteUserFunc}
            heading={'Confirm Deletion'}
            text={
              'Are you sure you want to Delete this account? This action cannot be reversed'
            }
          />
        )}
      </AnimatePresence>
    </>
  )
}
export default DeleteUserButton
