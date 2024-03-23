import { Link } from "react-router-dom";
function Nav(){
    return(
        <div>
              <ul className="nav justify-content-end">
    <li className="nav-item">
      <Link className="nav-link active" to="">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="register">Register</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="login">Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " to="Technologies">Technologies</Link>
    </li>
  </ul>
        </div>
    );
}
export default Nav;