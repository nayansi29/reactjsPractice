import { useEffect, useState } from "react";
import React from "react";

function Signup(props) {

  const error = { color: "red" };
  const initialValues = { fname: "", lname: "", email: "", pass: "", confrmpass: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [records, setRecords] = useState([]);


  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);


  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);


  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      const newRecord = { ...formValues };
      setRecords([...records, newRecord]);
      setFormValues({ fname: "", lname: "", email: "", pass: "", confrmpass: "" });
    }
  }, [formErrors]);


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
    if (!values.pass) {
      errors.pass = "Password is required";
    }
    else if (values.pass.length < 4) {
      errors.pass = "Password must be more than 4 character";
    }
    else if (values.pass.length > 10) {
      errors.pass = "Password cannot exceed more than 10 character";
    }
    if (!values.confrmpass) {
      errors.confrmpass = "Confirm Password is required";
    }
    else if (values.pass !== values.confrmpass) {
      errors.confrmpass = "Confirm Password not matched";
    }
    return errors;
  }


  return (
    <>

      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="col-lg-4">
        {
          records.map((data) => {
            return (
              <div>
                <h1>Successfully Signed In</h1>
                <p> First Name:{data.fname}</p>
                <p>Last Name:{data.lname}</p>
                <p>Email:{data.email}</p>
                <p>Password:{data.pass}</p>
                <p>Confirm Password:{data.confrmpass}</p>
              </div>

            )
          })
        }
      </div>) :
        <div className="container mt-3" >

          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <form className="needs-validation" onSubmit={handleSubmit} method="post">
                <h3>Sign Up</h3>
                <small>{props.title}</small>
                <br />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fname">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      id="fname"
                      value={formValues.fname}
                      onChange={handleChange}
                    />
                    <p style={error}>{formErrors.fname}</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lname">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lname"
                      value={formValues.lname}
                      onChange={handleChange}
                    />
                    <p style={error}>{formErrors.lname}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p style={error}>{formErrors.email}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="pass"
                    id="pass"
                    value={formValues.pass}
                    onChange={handleChange}
                  />
                  <p style={error}>{formErrors.pass}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="confrmpass"> Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confrmpass"
                    id="confrmpass"
                    value={formValues.confrmpass}
                    onChange={handleChange}
                  />
                  <p style={error}>{formErrors.confrmpass}</p>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  id="submit"
                  type="submit"

                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      }
    </>
  );
}


export default Signup;
