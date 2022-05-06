import { useState } from "react";
function Signup(props) {


  const [signupUser, setSignupUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confrmpass: "",
  });


  const handleInputs = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setSignupUser({ ...signupUser, [name]: value });


  }
  const handleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    <>
      <div className="container mt-3">
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
                    placeholder=""
                    value={signupUser.fname}
                    onChange={handleInputs}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    id="lname"
                    placeholder=""
                    value={signupUser.lname}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Please Enter Email"
                  value={signupUser.email}
                  onChange={handleInputs}

                />
              </div>
              <div className="mb-3">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="pass"
                  id="pass"
                  placeholder="Please Enter Password"
                  value={signupUser.pass}
                  onChange={handleInputs}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confrmpass"> Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confrmpass"
                  id="confrmpass"
                  placeholder="Please Enter Confirm Password"
                  value={signupUser.confrmpass}
                  onChange={handleInputs}
                />
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
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
