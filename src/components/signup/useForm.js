import { useState, useEffect } from 'react';
import { authentication } from '../../firebase';
import { db } from '../../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { updateProfile } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'

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

  const setDisplayNameAsUsername = async () => {
    await updateProfile(authentication.currentUser, {
      displayName: username,
    })
  }

  const newUserCollection = async (user) => {
    const docRef = doc(db, 'users', user.uid);
    await setDisplayNameAsUsername()
    await setDoc(docRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    })
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then(credential => {
            newUserCollection(credential.user)
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