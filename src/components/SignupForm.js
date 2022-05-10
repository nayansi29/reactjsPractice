import React from 'react';

const SignupForm = (formValues, formErrors, handleChange, handleSubmit) => {


    return (
        <div className="container mt-3" >
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <form className="needs-validation" onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>
                        <small></small>
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
                                <p className="error">{formErrors.fname}</p>
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
                                <p className="error">{formErrors.lname}</p>
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
                            <p className="error">{formErrors.email}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <p className="error">{formErrors.password}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword"> Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formValues.confirmPass}
                                onChange={handleChange}
                            />
                            <p className="error">{formErrors.confirmPassword}</p>
                        </div>
                        <button
                            className="btn btn-primary btn-lg btn-block"
                            id="submit"
                            type="submit"
                        > Sign Up
                        </button>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
export default SignupForm;
