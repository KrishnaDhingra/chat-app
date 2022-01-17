import React from 'react'

function FriendBar() {
    return (
        <div
            className="relative friends-bar h-[68px] w-full bg-gray-chat-preview items-center flex gap-3">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="other users dp" className="h-10 aspect-square rounded-full" />
            <div className="h-full justify-center flex flex-col grow">
                <span className="font-semibold text-sm text-primary">Khushi Dhingra</span>
                <span className="text-xs text-secondary text-normal">offline</span>
            </div>
        </div>
    )
}
export default FriendBar