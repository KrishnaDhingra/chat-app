import { useState, useEffect } from 'react';
import { authentication } from '../../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { BigHead } from "@bigheads/core";
import { getRandomOptions  } from "../bigheads";
import { updateProfile } from "firebase/auth";

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

  const updateUserProfile = () => {
    updateProfile(authentication.currentUser, {
      displayName: username,
    })
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then(credential => {
            updateUserProfile()
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