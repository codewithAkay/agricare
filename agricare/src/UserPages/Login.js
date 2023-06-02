import React, { useContext, useState } from "react";
import "./Register";
import Register from "./Register";
import { PostCrops } from "./PostCrops";
import { createBrowserHistory } from "history";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Store } from "../utilites/Store";
const Login = (props) => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const{state,dispatch}=useContext(Store)  
  const [password, setPassword] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const datas={
      email:email,
      password:password
    }
    try {
      const result=await axios.post("http://localhost:4000/login",datas)
      dispatch({
        type:"USER_SIGIN",payload:result.data
      })
      localStorage.setItem("UserInfo",JSON.stringify(result.data))
      toast.success("Login SuccessFully")
      navigate("/postcrops")
    } catch (error) {
    toast.error("Invalid Email And Password")
    }
  };

  return (
    <section>
      <div className="container-mid">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          
          <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/Register">Register here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
