import React from "react";
import "./login.css";

function Login() {
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
          <form action="">
              <input type="text" placeholder="Email Adress or User Name" />
              <input type="passowrd" placeholder="Password" />
              <div className="login-btn">Login</div>
          </form>
          <span className=" forget-password"><a href="">Forget Password</a></span>
           <div className="login-btn"> New Account</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
