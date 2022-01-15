import React from 'react'

const AlertContainer = ({children}) => {

    return (
        <div className="absolute flex flex-col gap-4 top-0 right-0 max-w-[30rem] w-full p-6">
            {children}
        </div>
    )
}
export default AlertContainer