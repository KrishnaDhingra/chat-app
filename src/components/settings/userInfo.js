import React from 'react'
import UserDisplayName from './userDisplayName'
import UserEmail from './userEmail'
import UserPassword from './userPassword'

const UserInfo = ({user}) => {
    return (
        <div className="flex flex-col gap-7 py-5 px-4 w-full bg-neutral-800 rounded-md">
            <UserDisplayName user={user}/>
            <UserEmail user={user}/>
            <UserPassword user={user}/>
        </div>
    )
}
export default UserInfo