import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const setActive = ({ isActive }) => {
    return { backgroundColor: isActive ? "blue" : "" };
  }
  return (

    <nav className="navbar navbar-expand-sm bg-light ">
      <div className="container-fluid">
        <ul className="navbar-nav">

          <li className="nav-item ">
            <NavLink className="nav-link" to="/signUp" style={setActive}>SignUp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/booking" style={setActive}>Booking</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/header" style={setActive}>Header</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/table" style={setActive}>Table</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login" style={setActive}>Login</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/users" style={setActive}>Users</NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/userdata" style={setActive}>UserData</NavLink>
          </li> */}

        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
