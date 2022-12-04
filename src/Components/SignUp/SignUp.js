import React, { useState } from "react";
import banner from "../../images/istockphoto-1321277096-612x612 1.png";
import logo from "../../images/Vector.svg";
import './SignUp.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName =(e)=>{
     setFirstName(e.target.value);
  }
  const handleLastName =(e)=>{
     setLastName(e.target.value);
  }
  const handlePhone =(e)=>{
    setNumber(e.target.value);
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value);
  }

  const handleForm = (e) =>{
    e.preventDefault();
    console.log(firstName, lastName, email, number, password);
  }

  return (
    <div className="main">
      <div className="img_container">
        <img className="logo" src={logo} alt="" />
        <img className="banner" src={banner} alt="" />
      </div>
      <div className="form_container">
        <h1 className=" ">Sign Up Form</h1>
        <form >
            <input onBlur={handleFirstName} className=" border-b-2 border-gray-300 block" type="text" placeholder="Write Last Name" />
            <input onBlur={handleLastName} className=" border-b-2 border-gray-300 block" type="text" placeholder="Write First Name" />
            <input onBlur={handlePhone} className=" border-b-2 border-gray-300 block" type="number" placeholder="+880   1xxxxxxxx" />
            <input onBlur={handleEmail} className=" border-b-2 border-gray-300 block" type="email" placeholder="Write Email Address" />
            <div>
              <input onBlur={handlePassword} className=" border-b-2 border-gray-300 block" type="password" placeholder="Write password" />
              <small className="pass_instruction">Your password must be 8 character</small>
            </div>
            <div className="btn_container">
              <button className="back_btn">Back</button>
              <button onClick={handleForm} className="signup_btn">Next Step <FaArrowRight></FaArrowRight></button>
              <button className="signup_btn">Submit <FaArrowRight></FaArrowRight></button>
            </div>
            <p className="toggle_para">Already have an account? &nbsp;<span className="login_span"><Link to='/login'>LOGIN HERE!</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
