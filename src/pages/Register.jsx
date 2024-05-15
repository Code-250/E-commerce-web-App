import React, { useState } from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {

    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: ""
    });
    const [formErrors, setFormErrors] = useState({
        userName: "",
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
                case "userName":
                    errors.userName = !value ? "User name is required" : "";
                    break;
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
                <h1 className="text-center">Register</h1>
                {/* <hr /> */}
                <div class="row my-4 h-100">
                    <div className="col-md-8 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class={`form-control ${formErrors.userName && "is-invalid"}`}
                                    id="Name"
                                    name="userName"
                                    placeholder="Enter Your Name"
                                    value={formData.userName}
                                    onChange={handleChange}
                                />
                                {formErrors.userName && (
                                    <div className="invalid-feedback">{formErrors.userName}</div>
                                )}
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class={`form-control ${formErrors.email && "is-invalid"}`}
                                    id="Email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                />
                                {formErrors.email && (
                                    <div className="invalid-feedback">{formErrors.email}</div>
                                )}
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class={`form-control ${formErrors.password && "is-invalid"}`}
                                    id="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    name='password'
                                    placeholder="Password"
                                />
                                {formErrors.password && (
                                    <div className="invalid-feedback">{formErrors.password}</div>
                                )}
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Register