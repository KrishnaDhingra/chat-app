import React from 'react'
import GoBack from './goBack'
import ChangeDp from './changeDp'
import UserInfo from './userInfo'
import CreatedAt from './createdAt'
import LogoutButton from './logoutButton'

const SettingsContainer = () => {
    return (
        <div className="relative w-full h-full flex flex-col gap-4 max-w-[600px] max-h-[80vh]">
            <GoBack/>
            <ChangeDp/>
            <UserInfo/>
            <CreatedAt/>
            <LogoutButton/>
        </div>
    )
}
export default SettingsContainer