import { useEffect, useState } from "react";
import "../css/Navbar.css";
import {Link, useLocation} from "react-router-dom";


function Navbar() {
  const [navbar, setNavbar] = useState(false);
    const location=useLocation();
    const [loc,setLoc]=useState("/");
    useEffect(()=>{
     setLoc(location.pathname);
  },[location])
  const hamburger = (value) => {
    setNavbar(value);
  }
  return (
   
        <div className="navbar">
          <div className="container">
            <ul className="navlinks">

            {loc==="/"? "":<Link to="/">
              Home</Link>}
              {loc==="/Body"?"":
              <Link to="/Body">About</Link>}
              {loc==="/Services"?"":
              <Link to="/Services">Services</Link>}
              {loc==="/Skills"?"":
              <Link to="/Skills">Skills</Link>}
            </ul>
            <li className="hamburger">
            <span className="icon" onClick={()=>hamburger(true)}>
              <button onClick={()=>hamburger(true)}>&#9776;</button>
            </span>
            </li>
            </div>
            
          {navbar ? (
            <>
            <div id="mySidebar" className="sidebar">
              <span  className="closebtn" onClick={() => hamburger(false)}>
                &times;
                </span>
              <ul>
                <li>
                  <Link to="/" onClick={() => hamburger(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/Body" onClick={() => hamburger(false)}>About</Link>
                </li>
                <li>
                  <Link to="/Services" onClick={() => hamburger(false)}>Services</Link>
                </li>
                <li>
                  <Link to="/Skills" onClick={() => hamburger(false)}>Skills</Link>
                </li>
                </ul>
            </div>
       
    </>
  ):(
    ""
   
  )}
   </div>
   );
}


export default Navbar;
