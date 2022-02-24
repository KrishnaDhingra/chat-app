import React, { useState } from 'react'
import useUpdatePassword from '../../functions/useUpdatePassword';
import { IoMdRemove } from "react-icons/io";
import { BsCheck2 } from "react-icons/bs";

const UserPassword = ({user, toggleVisibility, setConfirmationText}) => {

    const [ editMode, setEditMode ] = useState(false)
    const [ newPassword, setNewPassword ] = useState('')
    const changeInput = (value) => {
        setNewPassword(value)
    }

    const { handleSubmit, error } = useUpdatePassword(newPassword)

    return (
        <div className="flex justify-between">

            <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                    <span className="text-secondary text-xs">Password</span>

                    {(error && editMode ) && <span className="text-secondary text-xs text-red-500">{error}</span>}
                </div>

                {editMode ? <ChangePasswordInput value={newPassword} changeInput={changeInput}/> : <span className="text-primary text-sm">*************</span>}

            </div>

            {editMode && 
                <>
                    <div 
                        onClick={() => {
                            handleSubmit()
                            // setEditMode(false)
                        }}
                        className="h-[30px] p-2 rounded-full bg-green-600 hover:bg-green-700 ml-auto mr-2 text-sm">
                        <BsCheck2 className="friends-bar-icons"/>
                    </div>
                    <div 
                        onClick={() => {
                            setEditMode(false)
                        }}
                        className="h-[30px] p-2 rounded-full bg-red-700 hover:bg-red-800 mr-5 text-sm">
                        <IoMdRemove className="friends-bar-icons"/>
                    </div>
                </>
            }

            <button 
                className="text-primary h-[32px] items-start px-5 rounded-md bg-neutral-700 hover:bg-[#2e2e2e] text-sm"
                onClick={() => {
                    setEditMode(!editMode)
                }}
            >Edit</button>
        </div>
    )
}

const ChangePasswordInput = ({value, changeInput}) => {
    return (
        <input 
            value={value}
            onChange={(e) => changeInput(e.target.value)}
            placeholder='New name here'
            className="bg-transparent max-w-5 text-primary text-sm placeholder:text-sm outline-none h-full border-b border-primary focus:border-focus" />
    )
}
export default UserPassword