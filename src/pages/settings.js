import React, { useState } from 'react'
import SettingsContainer from '../components/settings/settings-container'
import ConfirmationPopup from '../components/confirmation-popup'
import { AnimatePresence } from 'framer-motion'
import { deleteUserFunc } from '../functions/deleteUser'
const Settings = () => {
    const [ visibility, setVisibility ] = useState(false)
    const [ heading, setHeading ] = useState('')
    const [ text, setText ] = useState('')

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }
    const setConfirmationText = (heading, text) => {
        setHeading(heading)
        setText(text)
    }
    return (
        <div className="relative settings-page grid place-items-center max-h-[92vh] w-full overflow-auto bg-otheruserContainer rounded-r-md py-12">
            <SettingsContainer toggleVisibility={toggleVisibility} setConfirmationText={setConfirmationText}/>
            <AnimatePresence>
                {visibility && 
                    <ConfirmationPopup onSelect={toggleVisibility} operation={deleteUserFunc} heading={heading} text={text}/>
                }
            </AnimatePresence>
        </div>
    )
}
export default Settings