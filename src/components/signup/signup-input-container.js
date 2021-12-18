import React from 'react'
import SignupCredentials from './signup-credentials'
import SignupPlatforms from './signup-platforms'

export default function SignupInputContainer() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-14 px-6 max-w-[52rem] w-screen">
            <SignupCredentials/>
            <div className="hidden sm:inline font-bold text-primary">/</div>
            <SignupPlatforms/>
        </div>
    )
}