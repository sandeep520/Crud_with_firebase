import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [activetab, setActivetab] = useState("Home");
 const  location=useLocation();
  useEffect(()=>{
      if(location.pathname==='/')
      {
          setActivetab("Home")
      }
      else if(location.pathname==='/add')
      {
          setActivetab('AddCOntact')
      }
      else if (location.pathname==='/about')
      {
          setActivetab('About')
      }
      else if (location.pathname==='/login')
      {
          setActivetab('Login')
      }

  },[location])
  return (
    <div className="header">
      <p className="logo">Contact App</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activetab === "Home" ? "active" : ""} `}
            onClick={() => setActivetab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activetab === "AddContact" ? "active" : ""} `}
            onClick={() => setActivetab("AddContact")}
          >
            AddContact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activetab === "AddContact" ? "active" : ""} `}
            onClick={() => setActivetab("About")}
          >
            About
          </p>
        </Link>
        <Link to="/login">
          <p
            className={`${activetab === "Login" ? "active" : ""} `}
            onClick={() => setActivetab("login")}
          >
            Login
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
