import React from 'react'
import GoBack from './goBack'
import ChangeDp from './changeDp'
import UserInfo from './userInfo'

const SettingsContainer = () => {
    return (
        <div className="relative w-full h-full flex flex-col gap-4 max-w-[600px] max-h-[80vh]">
            <GoBack/>
            <ChangeDp/>
            <UserInfo/>
        </div>
    )
}
export default SettingsContainer