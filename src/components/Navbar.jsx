// Navbar.jsx
import React from 'react';
import { Link , useLocation} from "react-router-dom";
import { useEffect } from 'react';
import 'animate.css'

const Navbar = (props) => {
 
    let location = useLocation();

useEffect(() => {
    // ga.send(["pageview", location.pathname]);
    // console.log(location);
  }, [location]);


  return (
    <div>
      <nav className={`navbar  navbar-expand-lg navbar-${props.theme}   `}  style={{backgroundColor: props.theme==='dark'?'#2c2b2b':'azure' , color: props.theme==='dark'?'white':'black' }}>
      <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bold animate__animated animate__flipInY"to="/">
         Task-Manager
         
</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/task-manager/"?"active":""}` }aria-current="page" to="/task-manager/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about"?"active":""}` } to="/about">About</Link>
        </li>
      </ul>
     
      <div className=''>
        <button className='  rounded-4  border-1 btn btn-secondary' onClick={props.toggleTheme} 
        >{props.theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}</button>
      </div>
     
    </div>
  </div>
   
</nav>
    </div>
  );
};

export default Navbar;
