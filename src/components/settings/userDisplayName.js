import React from 'react'

const UserDisplayName = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-1">
                <span className="text-secondary text-xs">Display Name</span>
                <span className="text-primary text-sm">Krishna Dhingra</span>
            </div>
            
            <button className="text-primary h-[32px] items-start px-5 rounded-md bg-neutral-700 hover:bg-[#2e2e2e] text-sm">Edit</button>
        </div>
    )
}
export default UserDisplayName