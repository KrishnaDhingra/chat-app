import React from 'react'
import SignupHeader from './header'
import SignupInputContainer from './signup-input-container'
import SignupPlatforms from './signup-platforms'

export default function SignupContainer() {
    return (
        <main className="grid gap-4 max-w-[1000px] w-screen">
            <SignupHeader/>
            <SignupInputContainer/>
        </main>
    )
}