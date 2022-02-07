import React from 'react'
import { deleteUserFunc } from '../../functions/deleteUser'
const DeleteUserButton = ({ toggleVisibility, setConfirmationText }) => {

    return (
        <button 
            onClick={() => {
                toggleVisibility()
                setConfirmationText('Confirm Deletion', 'Are you sure you want to delete this account? This action cannot be reversed')
            }}
            className="text-primary py-3 items-start px-5 w-max rounded-md bg-red-600 hover:bg-red-700 text-sm">Delete Account</button>
    )
}
export default DeleteUserButton