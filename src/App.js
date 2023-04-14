import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import Forget from "./components/Forget";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forget />} />
          </Route>
       </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;