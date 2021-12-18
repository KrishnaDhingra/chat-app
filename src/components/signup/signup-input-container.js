import React from 'react'
import SignupCredentials from './signup-credentials'
import SignupPlatforms from './signup-platforms'

export default function SignupInputContainer() {
    return (
        <div className="flex items-center gap-10 bg-green-400">
            <SignupCredentials/>
            <div className="">/</div>
            <SignupPlatforms/>
        </div>
    )
}