import React, { useRef,useContext } from "react";
import "./register.css";
import {registerCall} from '../../apiCalls'
import {AuthContext} from '../../Context/AuthContext'
import {Link} from 'react-router-dom'



function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const rePassword = useRef();
  

  const submitHandler = async (e) => {
    e.preventDefault();
   if(password.current.value ===rePassword.current.value){
    registerCall({username:username.current.value ,email:email.current.value,password:password.current.value});

   }
   else{
     password.current.setCustomValidity("Both Password Didn't matched")
   }
   
    
   
  };

  
  return (
    <div className="Login">
      <div className="login-wraper">
        <div className="login-left">
          <div className="logo">fakeBook</div>
          <span className="tag-line">
            Fakebook helps you connect and share with the people in Kibria's
            life.
          </span>
        </div>
        <div className="login-right">
          <form action="" onSubmit={submitHandler}>
            <input type="email" placeholder="Email Address " ref={email} required />
            <input type="text" placeholder=" User Name" ref={username} required />
            <input type="password" placeholder="Password" ref={password} minLength="6" required />
            <input type="password" placeholder="Re enter Password" ref={rePassword} minLength="6" required />
            <button className="login-btn" type="submit">Register</button>
          </form>
          <span className=" forget-password">
            <a href="">Forget Password</a>
          </span>
          <Link to="/login">
          <button className="login-btn"> Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
