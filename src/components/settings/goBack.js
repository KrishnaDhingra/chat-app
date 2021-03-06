import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

const GoBack = () => {

    const history = useHistory()

    return (
        <div className="flex items-center gap-3 mb-4">
            <div onClick={() => history.goBack()} className="rounded-full bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.5)]  h-8 w-8 flex justify-center items-center ">
                <AiOutlineLeft className="text-primary"/>
            </div>
            <div className="text-primary text-md font-normal">Go Back</div>
        </div>
    )
}
export default GoBack