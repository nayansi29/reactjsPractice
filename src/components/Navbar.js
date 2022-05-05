import { NavLink } from "react-router-dom";

function Navbar()
{
    return(<>
    
    <nav className="navbar navbar-expand-sm bg-light">

  <div className="container-fluid">

    <ul className="navbar-nav">
      <li className="nav-item">
      <NavLink className="nav-link" to="/signUp" style={({isActive})=> {return { backgroundColor: isActive ?'blue':''}}}>SignUp</NavLink>
     
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/booking" style={({isActive})=>{return {backgroundColor:isActive?'blue':''}}}>Booking</NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/header" style={({isActive})=>{return {backgroundColor:isActive?'blue':''}}}>Header</NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/login" style={({isActive})=>{return {backgroundColor:isActive?'blue':''}}}>Login</NavLink>
      </li>
    
    </ul>
  </div>

</nav>
    </>);
}

export default Navbar;