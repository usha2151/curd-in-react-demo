import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import '../App.css';


const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
    <div className="container">
      <div className="wrapper">
      <h2 className="title">Home</h2>
      {currentUser ? (
        <p>
          <h5 className="ms">You are logged.You can view our dashboard and check all details</h5> <Link to="/dashboard" className="mt-4 title1">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/login" className="title1 mt-5">Log In</Link> <h4 className="kk">or</h4> <Link to="/signup" className="title1">Sign Up</Link> 
        </p>
      )}
      </div>
      </div>
    </>
  );
};

export default Home;