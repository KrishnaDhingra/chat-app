import React, { useState } from 'react'
import Alert from './alert'

const AlertContainer = () => {

    return (
        <div className="absolute flex flex-col gap-4 top-0 right-0 max-w-[30rem] w-full p-6">
            <Alert/>
            <Alert/>
            <Alert/>
        </div>
    )
}
export default AlertContainer