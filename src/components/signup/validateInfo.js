export default function validateInfo(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.username) {
      errors.username = 'Username is required';
    } else if (values.password.length < 3) {
      errors.password = 'Password needs to be 3 characters or more';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    if (!values.password2) {
      errors.password2 = 'Confirming the pin is required'
    } else if (values.password !== values.password2){
      errors.password2 = 'Confirmation not passed'
    }
    return errors;
  }