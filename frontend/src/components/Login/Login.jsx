import React, { useRef,useContext } from "react";
import "./login.css";
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../Context/AuthContext'



function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching,error,dispatch,name} = useContext(AuthContext); 

  const submitHandler = async (e) => {
   
    e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value},dispatch);
   
  };

  console.log(user,isFetching);
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
            <input type="email" placeholder="Email Adress or User Name" ref={email} required />
            <input type="password" placeholder="Password" ref={password} minLength="6" required />
            <button className="login-btn" type="submit">{isFetching?"loading": "Login"}</button>
          </form>
          <span className=" forget-password">
            <a href="">Forget Password</a>
          </span>
          <div className="login-btn"> New Account</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
