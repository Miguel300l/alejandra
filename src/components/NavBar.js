import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Horizontal from "../assets/logo alejandra.png";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">

            <img src={Horizontal} alt="Logo" className="img-logo" width="200" style={{ marginTop: -30 }} />

          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                INICIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Album"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ALBUM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Pensamientos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                PENSAMIENTOS
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
