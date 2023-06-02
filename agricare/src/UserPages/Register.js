import React, { useState } from "react";
import axios from 'axios';
import "./Register.css";


import { Link, useNavigate } from "react-router-dom";

import registerpicture from '../Images/registerpicture.jpg';

const emailRegex =/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})$/;
const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/; 
export const Register = (props) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState("");
const navigate=useNavigate()
const [name, setName] = useState('');
const [isFarmer, setIsFarmer] = useState(false);
const [isBuyer, setIsBuyer] = useState(false);
const [errors, setErrors] = useState({});
const [errorMessages, setErrorMessages] = useState({
name: '',
email: '',
password: '',
accountType: ''
});
const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const errorMessagesCopy = {...errorMessages};
var type = '';
    if (!name) {
        errors.name = true;
        errorMessagesCopy.name = 'Please enter your full name';
    } else {
        errorMessagesCopy.name = '';
    }

    if (!email || !email.match(emailRegex)) {
        errors.email = true;
        errorMessagesCopy.email = 'Please enter a valid email';
    } else {
        errorMessagesCopy.email = '';
    }

    if (!password || !password.match(passwordRegex)) {
        errors.password = true;
        errorMessagesCopy.password = 'Please enter a valid password (must contain at least 6 characters)';
    } else {
        errorMessagesCopy.password = '';
    }
    if (!confirmPassword || !confirmPassword.match(passwordRegex) || confirmPassword!==password) {
        errors.confirmPassword = true;
        errorMessagesCopy.confirmPassword = 'Invalid confirm password';
    } else {
        errorMessagesCopy.confirmPassword = '';
    }

    if (!isFarmer && !isBuyer) {
        errors.accountType = true;
        errorMessagesCopy.accountType = 'Please select an account type';
    } else {
        errorMessagesCopy.accountType = '';
    }
if(isFarmer)
{
    type = 'Farmer';
}
else
{
    type = 'Buyer';
}
    setErrors(errors);
    setErrorMessages(errorMessagesCopy);

    if (Object.keys(errors).length === 0) {
        console.log(email, isFarmer, isBuyer);
    }                
    
    
    axios.post('http://localhost:4000/register', {
        'name':name,
        'password':password,
        'email':email,
        'type':type,

    })
  .then(response => {
    // Handle the response data
    console.log(response.data);
    navigate("/login")
  })
  .catch(error => {
    // Handle the error
    console.log(error);
  });
}

const handleFormSwitch = () => {
    if (typeof props.onFormSwitch === 'function') {
        props.onFormSwitch('login');
    }
}

const handleIsFarmerChange = (e) => {
    setIsFarmer(e.target.checked);
    if (e.target.checked) {
        setIsBuyer(false);
    }
}

const handleIsBuyerChange = (e) => {
    setIsBuyer(e.target.checked);
    if (e.target.checked) {
        setIsFarmer(false);
    }
}

return (
    <section>
        <div className="container-mid">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name" />
                    {errors.name && <p className="error-message">{errorMessages.name}</p>}
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    {errors.email && <p className="error-message">{errorMessages.email}</p>}
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" id="password" name="password" />
{errors.password && <p className="error-message">{errorMessages.password}</p>}
<label htmlFor="confirm-password">Confirm Password</label>
<input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="" id="confirm-password" name="confirm-password" />
{errors.confirmPassword && <p className="error-message">{errorMessages.confirmPassword}</p>}

<div>
                            <input type="checkbox" id="isFarmer" name="isFarmer" checked={isFarmer} onChange={handleIsFarmerChange} />
                            <label htmlFor="isFarmer">Register as farmer</label>
                        </div>
                        <div>
                            <input type="checkbox" id="isBuyer" name="isBuyer" checked={isBuyer} onChange={handleIsBuyerChange} />
                            <label htmlFor="isBuyer">Register as buyer</label>
                            {errors.accountType && <p className="error-message">{errorMessages.accountType}</p>}
                        </div>
<button type="submit">Register</button>

</form>
<p>Already have an account? <Link to="/login">Login here</Link></p>

</div>

</div>

</section>
);}

