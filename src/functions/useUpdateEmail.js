import React, { useState, useEffect } from 'react'
import { authentication } from '../firebase'
import { updateEmail } from 'firebase/auth'

const useUpdateEmail = (value) => {
    const [error, setError] = useState()
    const [isSubmitting, setSubmitting] = useState(false)
    const handleSubmit = () => {
        setSubmitting(true)
        setError(validate(value))
    }
    useEffect(() => {
        if(error == '' && isSubmitting){
            updateEmail(authentication.currentUser, value).then(() => {
                  console.log("email updated")
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
        error = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email address is invalid';
    } else{
        error = ''
    }
    return error
}
export default useUpdateEmail