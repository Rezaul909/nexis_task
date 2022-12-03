import React, { useState } from "react";
import banner from "../../images/istockphoto-1321277096-612x612 1.png";
import logo from "../../images/Vector.svg";
import './SignUp.css';
import { FaArrowRight } from "react-icons/fa";

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main">
      <div className="img_container">
        <img className="logo" src={logo} alt="" />
        <img className="banner" src={banner} alt="" />
      </div>
      <div className="form_container">
        <h1 className=" ">Sign Up Form</h1>
        <form>
            <input className=" border-b-2 border-gray-300 block" type="text" placeholder="Write First Name" />
            <input className=" border-b-2 border-gray-300 block" type="text" placeholder="Write Last Name" />
            <input className=" border-b-2 border-gray-300 block" type="number" placeholder="+880   1xxxxxxxx" />
            <input className=" border-b-2 border-gray-300 block" type="email" placeholder="Write Email Address" />
            <div>
              <input className=" border-b-2 border-gray-300 block" type="password" placeholder="Write password" />
              <small className="pass_instruction">Your password must be 8 character</small>
            </div>
            <div className="btn_container">
              <button className="back_btn">Back</button>
              <button className="signup_btn">Next Step <FaArrowRight></FaArrowRight></button>
              <button className="signup_btn">Submit <FaArrowRight></FaArrowRight></button>
            </div>
            <p className="toggle_para">Already have an account? &nbsp;<span className="login_span"> LOGIN HERE!</span></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
