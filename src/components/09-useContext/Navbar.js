import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from "react-router-dom"
import { UserContext } from './UserContext'

export const Navbar = () => {

  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const handleLogOut = () => {
    setUser({});
    history.push('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact activeClassName="text-info" className="nav-link nav-item" to="/login" >Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="text-info" className="nav-link nav-item" to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="text-info" className="nav-link nav-item" to="/about" >About</NavLink>
            </li>
          </ul>
          {
            Object.entries(user).length !== 0 
            ?
              <button className="btn btn-danger" onClick={handleLogOut}>Log Out</button>
            :
              null
          }
        </div>
      </div>
    </nav>
  )
}
