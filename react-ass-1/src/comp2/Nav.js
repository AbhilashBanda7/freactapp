import React,{useState} from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import "./Nav.css";
import { UserContext } from '../context/UserContext';
import { useContext } from "react";
function Nav() {
  let [users,setUser]=useContext(UserContext)
    const [selectedItem, setSelectedItem] = useState(null);
    const handleSelect = (eventKey) => {
      setSelectedItem(eventKey);
    }
  let navigate=useNavigate()
  function Logout() {
    setUser('')
    navigate('')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" href="#">Home</NavLink> */}
    <NavLink className="nav-link p-1 x" to="/Home">Home</NavLink>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
        <NavLink className="nav-link x text-light" to="/Achievements">Achievements</NavLink>
          {/* <NavLink className="nav-link p-1"  to="/Achievements">Achievements</NavLink> */}
        </li>
        <li className="nav-item a">
          <NavLink className="nav-link text-light" to="/collab">Collab</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">WEB DEVELOPMENT</Link></li>
            <li><Link className="dropdown-item" href="#">Languages</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li> */}
        <Dropdown onSelect={handleSelect}>
            
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedItem ? selectedItem : 'Resources'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <NavLink className="nav-link " to="/item1">Other Classes</NavLink>
      <NavLink className="nav-link " to="/item2">Other Platform Problems</NavLink>
      <NavLink className="nav-link " to="/item3"></NavLink>

       
      </Dropdown.Menu>
    </Dropdown>
        <li className="nav-item a">
          <NavLink className="nav-link text-light" to="/mentor">Mentoring</NavLink>
        </li>
      </ul>
      {
        users.length==0?<form className="d-flex">
        <NavLink className="nav-link p-1 x" to="/login">Login</NavLink>
        <NavLink className="nav-link p-1 x" to="/register">Register</NavLink>
    </form>:<form className="d-flex">
          {/* <NavLink className="nav-link p-1 x" to="/signout">SignOut</NavLink> */}
          <button className="btn text-light" onClick={Logout}>SignOut</button>
      </form>
      }
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav