import { useState, useEffect } from 'react';
import { authentication } from '../../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';

const useForm = (validate, email, username, password, password2) => {

  const [errors, setErrors] = useState({});
  const [ isSubmitting, setSubmitting ] = useState(false)
  const handleSubmit = e => {
    e.preventDefault();
    let values = {
      email: email,
      username: username,
      password: password,
      password2: password2
    }
    setSubmitting(true)
    setErrors(validate(values));
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then(credential => {
            console.log(credential.user)
          })
          .catch(error => {
            console.log(error.message)
          })
      }
    },
    [errors]
  );

  return { handleSubmit, errors };
};

export default useForm;