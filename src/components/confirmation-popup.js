import React from 'react'
import { motion } from 'framer-motion'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { authentication } from '../firebase'

let logout = () => {
    signOut(authentication)
    .then(() => {
        console.log("the user signed out")
    })
    .catch((error) => {
        console.log(error.message)
    })
}
onAuthStateChanged(authentication, (user) => {
    console.log('user changed:', user)
})

let ConfirmationPopup = ({ onSelect }) => {
    return (
        <section 
            className="bg-blue-300 max-w-[400px] h-[220px] w-[screen - 10px] confirmation-popup absolute flex flex-col rounded-md p-8 items-left gap-3">
            <p 
                className="font-semibold text-2xl mb-3"
                >Confirm Logout</p>
            <p 
                className="text-sm">
                    Are you sure you want to logout? This action cannot be reversed</p>
            <div className="flex gap-4">
                <button 
                    className="text-sm w-[100px] px-4 py-2 rounded-full bg-white hover:bg-gray-100"
                    onClick={() => onSelect()}
                    >Cancel</button>
                <button 
                    className="text-sm w-[100px] px-4 py-[5px] rounded-full bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => {
                        onSelect()
                        logout()
                    }}
                >Sure</button>
            </div>

        </section>
    )
}
export default ConfirmationPopup