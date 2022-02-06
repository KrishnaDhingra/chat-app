import React from 'react'

const UserEmail = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-1">
                <span className="text-secondary text-xs">Email</span>
                <span className="text-primary text-sm">dkrishna1608@gmail.com</span>
            </div>

            <button className="text-primary h-[32px] items-start px-5 rounded-md bg-neutral-700 hover:bg-[#2e2e2e] text-sm">Edit</button>
        </div>
    )
}
export default UserEmail