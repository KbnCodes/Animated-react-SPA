import React from "react"
import {NavLink} from "react-router-dom"
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from '@material-ui/icons/Info'
import LaptopIcon from '@material-ui/icons/Laptop'
import ContactMailIcon from '@material-ui/icons/ContactMail'

function Navbar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink exact className="navbar-brand" to="/">
              KbnCodes
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink exact
                    activeClassName="menu-active"
                    className="nav-link"
                    to="/"
                  >
                    <HomeIcon/> Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    <InfoIcon/> About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/courses"
                  >
                      <LaptopIcon/> Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                  >
                    <ContactMailIcon/> Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
