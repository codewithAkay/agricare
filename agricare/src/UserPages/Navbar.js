import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import { App } from '../App';
import logo from '../Images/logo2.png';
import { Store } from '../utilites/Store';


function Navbar(props) {
  const {state,ctxdispatch}=useContext(Store)
    const {UserInfo}=state
    const navigate=useNavigate()
  const { isLoggedIn, isPostCropsPage } = props;
  const handleOut=()=>{
    localStorage.removeItem("UserInfo")
    navigate('/')
    window.location.reload()
  }
  return (
    <div className="home-container">
      <nav className="navbar">
      
        <div className="logo">
        <a href="/">
          <img src={logo} alt="Agricare Logo" />
          </a>
        </div>
        <ul className="navbar-nav">
          {UserInfo?
          <>
          <li className='nav-item'><button onClick={handleOut} style={{backgroundColor:"orange",color:'white',textAlign:"center"}}>LogOut</button></li>
          <li className="nav-item">
            <Link to="/postcrops" className="nav-link">
              Dashboard
            </Link>
          </li>
          </>
          : <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
          }
         
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
        
      </nav>
     
    </div>
  );
}

export default Navbar;
