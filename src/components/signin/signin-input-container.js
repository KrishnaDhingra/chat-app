import React from 'react'
import SigninCredentials from './signin-credentials'
import SigninPlatforms from './signin-platforms'

export default function SigninInputContainer() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-14 px-6 max-w-[52rem] w-screen">
            <SigninCredentials/>
            <div className="hidden sm:inline font-bold text-primary">/</div>
            <SigninPlatforms/>
        </div>
    )
}