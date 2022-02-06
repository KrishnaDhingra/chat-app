import React from 'react'
import UserDisplayName from './userDisplayName'
import UserEmail from './userEmail'
import UserPassword from './userPassword'

const UserInfo = () => {
    return (
        <div className="flex flex-col gap-7 py-5 px-4 w-full bg-neutral-800 rounded-md">
            <UserDisplayName/>
            <UserEmail/>
            <UserPassword/>
        </div>
    )
}
export default UserInfo