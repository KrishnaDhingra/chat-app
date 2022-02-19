import React, { useState, useEffect } from 'react'
import { authentication } from '../firebase'
import { updateProfile } from 'firebase/auth'

const useUpdateDisplayName = (value) => {
    const [error, setError] = useState('')
    const [isSubmitting, setSubmitting] = useState(false)
    const handleSubmit = () => {
        setSubmitting(true)
        setError(validate(value))
    }
    const clearError = () => {
        setError('')
    }
    useEffect(() => {
        if(error == '' && isSubmitting){
            updateProfile(authentication.currentUser, {
                displayName: value
              }).then(() => {
                  console.log("userUpdated")
              }).catch((error) => {
                  console.log(error)
              });
        }else{
            console.log(error)
        }
    }, [error])
    return { handleSubmit, clearError, error }
}
const validate = (value) => {
    let error = ''
    if(value.trim().length == 0){
        error = 'Name is required'
    }else{
        if(value.trim().length < 3){
            error = 'Atleast 3 characters are required'
        }else{
            error = ''
        }
    }
    return error
}
export default useUpdateDisplayName