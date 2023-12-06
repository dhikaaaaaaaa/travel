import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleHome}>
          GO TRAVEL
        </span>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">
            <FontAwesomeIcon icon={faUser} /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
