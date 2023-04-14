import React, {useState, useRef} from "react";
import {useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { app } from "../config";
import '../App.css';
import { Link } from "react-router-dom";
const auth = getAuth(app);
const SignUp = () => {
  const form = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = event => {
        setPassword(event.target.value);
      };
    


  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    


    emailjs.sendForm('service_us5ym9h', 'template_h1u66ie', form.current, 'oYkFvry-qBnIFFcph')
      .then((result) => {
          console.log(result.text);
          console.log("email has been sent");
      }, (error) => {
          console.log(error.text);
      });


    
    try {
     createUserWithEmailAndPassword(auth, email, password);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return  navigate("/dashboard");
      
  }
  
  return (
    <>
      <div>
<div className="container">
      <div className="wrapper">
        <div className="title"><span>Register Form</span></div>
        <form ref={form} onSubmit={handleSubmit}>
        <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" name="user_name" placeholder="Enter Name"  required/>
          </div>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="email" name="user_email" placeholder="Email or Phone" value={email} onChange={handleEmailChange} required/>
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" name="password"  placeholder="Password" value={password} onChange={handlePasswordChange} required/>
          </div>
          <div className="row button">
            <input type="submit" value="submit"/>
          </div>
          <div className="signup-link">Not a member? <Link to="/login" >Signin now</Link></div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default SignUp;