import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../../firebase'
import { authentication } from '../../firebase'

const useForm = (validate, email, password) => {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let values = {
      email: email,
      password: password,
    }
    setSubmitting(true)
    setErrors(validate(values))
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((credential) => {
          console.log('User signed in')
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }, [errors])

  return { handleSubmit, errors }
}

export default useForm
