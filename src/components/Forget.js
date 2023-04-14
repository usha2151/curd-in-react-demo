import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { app } from "../config";
import { Link } from "react-router-dom";
import '../App.css';

const Forget = () => {
    const [email, setEmail] = useState('');
    const auth = getAuth(app);
    const triggerResetEmail = (e) => {
        e.preventDefault();
        
      sendPasswordResetEmail(auth, email).then(() => {
        // Password reset email sent!
        console.log("Password reset email sent");
        })
      .catch((error) => {
       console.log(error);
      });
      
    }
  return (
    <>

<div>
<div className="container">
      <div className="wrapper">
        <div className="title"><span>Forget Password</span></div>
        <form>
          <div className="row">
          <i className="fas fa-user"></i>
            <input type="email" name="email" placeholder="Email or Phone" required/>
          </div>
          <div className="row button">
          <Link to="/login" ><input type="submit" onClick={triggerResetEmail} value="Submit"/></Link>  
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Forget;