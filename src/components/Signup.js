import { useState } from "react";
import './signup.css';
import React from "react";
import SignupForm from "./SignupForm";
import SignupDetails from "./SignupDetails";

function Signup() {
  const initialValues = { fname: "", lname: "", email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      errors.fname = "First Name is required";
    }
    if (!values.lname) {
      errors.lname = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    else if (!regex.test(values.email)) {
      errors.email = "Please Enter Valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character";
    }
    else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Confirm Password not matched";
    }
    return errors;
  }
  if (isSubmit && Object.keys(formErrors).length === 0) {
    return (
      <SignupDetails formValues={formValues} />

    )
  }
  else {
    return (
      <SignupForm formValues={formValues} formErrors={formErrors} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
  }
}
export default Signup;
