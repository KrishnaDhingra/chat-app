import React from 'react'

export default function OtherUsersOnline() {
    return (
        <div className="users-online relative h-full w-full pl-8 pr-7 flex flex-col justify-center gap-2 bg-transparent">
            <div className="flex justify-between">
                <h2 className="text-primary font-semibold">Online Now</h2>
                <span className="bg-inputBg rounded-md py-1 px-2 text-xs text-primary font-semibold">12</span>
            </div>
            <div className="flex gap-4 justify-start mt-3">
                <div className="relative w-[45px] h-[45px]">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="h-full w-full rounded-full"/>

                    <div className="online dots rounded-full bg-red-500 p-1 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
                <div className="relative w-[45px] h-[45px]">
                    <img src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-full w-full rounded-full"/>

                    <div className="online dots rounded-full bg-red-500 p-1 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
                <div className="relative w-[45px] h-[45px]">
                    <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-full w-full rounded-full"/>

                    <div className="online dots rounded-full bg-red-500 p-1 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
                <div className="relative w-[45px] h-[45px]">
                    <img src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-full w-full rounded-full"/>

                    <div className="online dots rounded-full bg-red-500 p-1 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
                <div className="relative w-[45px] h-[45px]">
                    <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-full w-full rounded-full"/>

                    <div className="online dots rounded-full bg-red-500 p-1 absolute bottom-0 right-0 border-2 border-white"></div>
                </div>
            </div>
        </div>
    )
}