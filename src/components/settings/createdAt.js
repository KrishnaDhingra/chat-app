import React from 'react'

const CreatedAt = ({user}) => {
    return (
        <div className="flex flex-col gap-7 py-5 px-4 w-full bg-neutral-800 rounded-md">
            <div className="flex flex-col gap-1">
                <span className="text-secondary text-xs">Created at</span>
                <span className="text-primary text-sm">{user.metadata.creationTime}</span>
            </div>
        </div>
    )
}
export default CreatedAt