import React from 'react'
import { logOut } from '../../functions/logout'
const LogoutButton = () => {
    return (
        <button 
            onClick={() => logOut()}
            className="text-primary py-3 items-start px-5 w-max rounded-md bg-neutral-800 hover:bg-neutral-900 text-sm">Log out</button>
    )
}
export default LogoutButton