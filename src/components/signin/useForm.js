import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase';
import { authentication } from '../../firebase';
import {
  collection,
  onSnapshot,
  doc, 
  setDoc
} from 'firebase/firestore'

const useForm = (validate, email, password) => {

  const [errors, setErrors] = useState({});
  const [ isSubmitting, setSubmitting ] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    let values = {
      email: email,
      password: password
    }
    setSubmitting(true)
    setErrors(validate(values));
  };

  const userCollection = async (user) => {
    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL ? user.photoURL : null,
    })
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        signInWithEmailAndPassword(authentication, email, password)
          .then(credential => {
            userCollection(credential.user)
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