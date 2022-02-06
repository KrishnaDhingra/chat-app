import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const GoBack = () => {
    return (
        <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)]  h-8 w-8 flex justify-center items-center ">
                <AiOutlineLeft className="text-primary"/>
            </div>
            <div className="text-primary text-md font-normal">Go Back</div>
        </div>
    )
}
export default GoBack