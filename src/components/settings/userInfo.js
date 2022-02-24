import React from 'react'
import UserDisplayName from './userDisplayName'
import UserEmail from './userEmail'
import UserPassword from './userPassword'

const UserInfo = ({user, toggleVisibility, setConfirmationText}) => {
    return (
        <div className="flex flex-col gap-7 py-5 px-4 w-full bg-neutral-800 rounded-md">
            <UserDisplayName user={user}/>
            <UserEmail user={user} toggleVisibility={toggleVisibility} setConfirmationText={setConfirmationText}/>
            <UserPassword user={user} toggleVisibility={toggleVisibility} setConfirmationText={setConfirmationText}/>
        </div>
    )
}
export default UserInfo