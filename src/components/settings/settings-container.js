import React from 'react'
import GoBack from './goBack'
import ChangeDp from './changeDp'
import UserInfo from './userInfo'
import CreatedAt from './createdAt'
import LogoutButton from './logoutButton'
import DeleteUserButton from './deleteUserButton'

const SettingsContainer = () => {
    return (
        <div className="relative w-full flex flex-col gap-4 max-w-[600px]">
            <GoBack/>
            <ChangeDp/>
            <UserInfo/>
            <CreatedAt/>
            <div className="flex gap-4">
                <LogoutButton/>
                <DeleteUserButton/>
            </div>
        </div>
    )
}
export default SettingsContainer