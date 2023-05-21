import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg"

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <div className="logo-container">
       <div>{ <img src={logo} alt="agbusi" className="logo-image" />}</div>
      </div>
      <nav className={isNavbarOpen ? "responsive_nav" : ""}>
	  	<a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#" className="about-button" >Contact us</a>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
		{isNavbarOpen ? <FaTimes logo/> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
