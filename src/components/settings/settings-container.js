import React from 'react'
import GoBack from './goBack'
import ChangeDp from './changeDp'
import UserInfo from './userInfo'
import CreatedAt from './createdAt'
import LogoutButton from './logoutButton'
import DeleteUserButton from './deleteUserButton'
import { authentication } from '../../firebase'

const SettingsContainer = ({ toggleVisibility, setConfirmationText }) => {
  const user = authentication.currentUser

  return (
    <div className="w-full flex flex-col gap-4 max-w-[600px]">
      <GoBack />
      <ChangeDp user={user} />
      <UserInfo
        user={user}
        toggleVisibility={toggleVisibility}
        setConfirmationText={setConfirmationText}
      />
      <CreatedAt user={user} />
      <div className="flex gap-4">
        <LogoutButton />
        <DeleteUserButton />
      </div>
    </div>
  )
}
export default SettingsContainer
