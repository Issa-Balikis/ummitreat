import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import "./navbar.css"


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)


    const toggleNavbar = () => {
        setShowNavbar(prevState => !prevState)
    }
    return (
        <div className="navbar">
            <h1>Ummi's <span>Treat</span></h1>
            <div className= {showNavbar ? "links" :  "links-mobile" }>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </ul>
            <div className="bars-btn"
                 onClick={toggleNavbar}>
                {showNavbar ? <ReorderIcon /> :  <CloseIcon /> }
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;