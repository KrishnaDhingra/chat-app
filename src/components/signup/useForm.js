import { useState, useEffect } from 'react';
import { authentication } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useForm = (validate, email, password) => {

  const [errors, setErrors] = useState({});
  const [ isSubmitting, setSubmitting ] = useState(false)
  const [ num, setNum ] = useState(0)
  const handleSubmit = e => {
    e.preventDefault();
    let values = {
      email: email,
      password: password
    }
    setSubmitting(true)
    setErrors(validate(values));
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        createUserWithEmailAndPassword(authentication, email, password)
      }
    },
    [errors]
  );

  return { handleSubmit, errors };
};

export default useForm;