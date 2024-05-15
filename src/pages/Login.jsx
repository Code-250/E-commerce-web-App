import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: ""
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      console.log(formData.email, "thse are the data");
      validateField(formData);
    }
    // validateField("password", formData.password);
    if (formValid) {
      console.log(formData);
      // Place your login logic here
    }
  };

  const validateField = (fieldData) => {
    let errors = { ...formErrors };

    for (const fieldName in fieldData) {
      const value = fieldData[fieldName];
      switch (fieldName) {
        case "email":
          errors.email = !value ? "Email is required" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format";
          break;
        case "password":
          errors.password = !value ? "Password is required" : "";
          break;
        default:
          break;
      }
    }

    setFormErrors(errors);

    // Check if the whole form is valid
    setFormValid(Object.values(formData).every(value => !!value) && Object.values(errors).every(error => !error));
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        {/* <hr /> */}
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class={`form-control ${formErrors.email && "is-invalid"}`}
                  id="floatingInput"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
                {formErrors.email && (
                  <div className="invalid-feedback">{formErrors.email}</div>
                )}
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class={`form-control ${formErrors.password && "is-invalid"}`}
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formErrors.password && (
                  <div className="invalid-feedback">{formErrors.password}</div>
                )}
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
