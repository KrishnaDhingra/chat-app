import React, { useState, useEffect } from 'react'
import { authentication } from '../firebase'
import { updatePassword } from 'firebase/auth'

const useUpdatePassword = (value) => {
    const [error, setError] = useState()
    const [isSubmitting, setSubmitting] = useState(false)
    const handleSubmit = () => {
        setSubmitting(true)
        setError(validate(value))
    }
    useEffect(() => {
        if(error == '' && isSubmitting){
            updatePassword(authentication.currentUser, value).then(() => {
                  console.log("password updated")
              }).catch((error) => {
                  console.log(error)
              });
        }else{
            console.log(error)
        }
    }, [error])
    return { handleSubmit, error }
}
const validate = (value) => {
    let error = ''
    if (value.trim().length == 0) {
        error = 'Password required';
    } else if(value.trim().length < 6){
        error = '6 Minimum characters'
    } else {
        error = ''
    }
    return error
}
export default useUpdatePassword