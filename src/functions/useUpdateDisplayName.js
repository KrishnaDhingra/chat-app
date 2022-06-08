import React, { useState, useEffect } from 'react'
import { authentication, db } from '../firebase'
import { updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'

const useUpdateDisplayName = (value) => {
  const [error, setError] = useState()
  const [isSubmitting, setSubmitting] = useState(false)
  const handleSubmit = () => {
    setSubmitting(true)
    setError(validate(value))
  }
  const updateDisplayName = async () => {
    const userRef = doc(db, 'users', authentication.currentUser.uid)
    await updateDoc(userRef, {
      displayName: value,
    })
    updateProfile(authentication.currentUser, {
      displayName: value,
    })
      .then(() => {
        console.log('display name updated')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    if (error == '' && isSubmitting) {
      updateDisplayName()
    } else {
      console.log(error)
    }
  }, [error])
  return { handleSubmit, error }
}
const validate = (value) => {
  let error = ''
  if (value.trim().length == 0) {
    error = 'Name is required'
  } else {
    if (value.trim().length < 3) {
      error = 'Minimum 3 characters'
    } else if (value.trim().length > 12) {
      error = 'Maximum 12 characters'
    } else {
      error = ''
    }
  }
  return error
}
export default useUpdateDisplayName
