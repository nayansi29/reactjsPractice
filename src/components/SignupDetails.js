import React from 'react'

const SignupDetails = (props) => {
  return (
    <div className="col-lg-4">
      <h1>Successfully Signed In</h1>
      <p> First Name:{props.formValues.fname}</p>
      <p>Last Name:{props.formValues.lname}</p>
      <p>Email:{props.formValues.email}</p>
      <p>Password:{props.formValues.password}</p>
      <p>Confirm Password:{props.formValues.confirmPassword}</p>
    </div>
  );
}

export default SignupDetails;