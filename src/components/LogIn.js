import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from "../config";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";
import '../App.css';
const auth = getAuth(app);
const LogIn = () => {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      signInWithEmailAndPassword(auth,email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return navigate("/dashboard")
  }
  return (
    <>

<div>
<div className="container">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="email" name="email" placeholder="Email or Phone" required/>
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" name="password"  placeholder="Password" required/>
          </div>
          <div className="pass"><Link to="/forget">Forgot password?</Link></div>
          <div className="row button">
            <input type="submit" value="Login"/>
          </div>
          <div className="signup-link">Not a member? <Link to="/signup">Signup now</Link></div>
        </form>
      </div>
    </div>

    </div>
    </>
  );
};

export default LogIn;