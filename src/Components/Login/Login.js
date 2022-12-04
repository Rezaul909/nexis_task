import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/istockphoto-1321277096-612x612 1.png";
import logo from "../../images/Vector.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <div className="main">
      <div className="img_container">
        <img className="logo" src={logo} alt="" />
        <img className="banner" src={banner} alt="" />
      </div>
      <div className="form_container">
        <h1 className=" ">Log in Form</h1>
        <form>
          <input
            onBlur={handleEmail}
            className=" border-b-2 border-gray-300 block"
            type="email"
            placeholder="Write Email Address"
          />
          <div>
            <input
              onBlur={handlePassword}
              className=" border-b-2 border-gray-300 block"
              type="password"
              placeholder="Write password"
            />
            <small className="pass_instruction">
              Your password must be 8 character
            </small>
          </div>
          <div className="btn_container">
            <button onClick={handleForm} className="signup_btn">
              Log In
            </button>
          </div>
          <p className="toggle_para">
            Don’t have an account? &nbsp;
            <span className="login_span">
              <Link to="/">SIGNUP HERE!</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
