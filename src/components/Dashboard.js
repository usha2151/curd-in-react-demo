import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config";
import { AuthContext } from "./Auth";
import { Link } from "react-router-dom";
import '../index.css';
const auth = getAuth(app);
const Dashboard = () => {
    const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
   return navigate("/login")
  }
  return (
    <div>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">LikeWay</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <Link class="btn btn-warning" type="submit" onClick={() => signOut(auth)}>Logout</Link>
    </form>
  </div>
</nav>
<img src="pic.jpg" class="img-fluid" alt="..."></img>
    
    </div>
  );
};

export default Dashboard;