import React from 'react'
import { BsCameraFill } from 'react-icons/bs'
const ChangeDp = () => {
    return (
        <div className="flex gap-4">
            <div className="relative changeDp-image-outer h-[80px]">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Other user avatar" className="h-full aspect-square rounded-full mb-4 object-cover z-1"/>
                <BsCameraFill className="hover-camera absolute text-white text-xl"/>
            </div>

            <div className="mt-4 text-primary font-medium text-[16px]">Krishna Dhingra</div>
        </div>
    )
}
export default ChangeDp