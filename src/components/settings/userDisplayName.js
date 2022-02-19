import React, { useState } from 'react'
import { IoMdRemove } from "react-icons/io";
import { BsCheck2 } from "react-icons/bs";

const UserDisplayName = ({user}) => {

    const [ editMode, setEditMode ] = useState(false)
    const [ newName, setNewName ] = useState('')
    const changeInput = (value) => {
        setNewName(value)
    }
    const updateDisplayName = () => {
        
    }
    return (
        <div className="flex justify-between">

            <div className="flex flex-col gap-1">
                <span className="text-secondary text-xs">Display Name</span>

                {editMode ? <ChangeDisplayNameInput value={newName} changeInput={changeInput}/> : <span className="text-primary text-sm">{user.displayName}</span>}

            </div>

            {editMode && 
                <>
                    <div 
                        onClick={() => setEditMode(false)}
                        className="h-[30px] p-2 rounded-full bg-green-600 hover:bg-green-700 ml-auto mr-2 text-sm">
                        <BsCheck2 className="friends-bar-icons"/>
                    </div>
                    <div 
                        onClick={() => setEditMode(false)}
                        className="h-[30px] p-2 rounded-full bg-red-700 hover:bg-red-800 mr-5 text-sm">
                        <IoMdRemove className="friends-bar-icons"/>
                    </div>
                </>
            }

            <button 
                className="text-primary h-[32px] items-start px-5 rounded-md bg-neutral-700 hover:bg-[#2e2e2e] text-sm"
                onClick={() => setEditMode(!editMode)}
            >Edit</button>
        </div>
    )
}

const ChangeDisplayNameInput = ({value, changeInput}) => {
    return (
        <input 
            value={value}
            onChange={(e) => changeInput(e.target.value)}
            placeholder='New name here'
            className="bg-transparent text-primary text-sm placeholder:text-sm outline-none grow h-full border-b border-primary focus:border-focus" />
    )
}
export default UserDisplayName