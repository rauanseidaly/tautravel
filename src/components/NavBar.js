import React,{useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/NavBar.css";
import "../assets/tau/almati-gece-sehir.jpg";
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks); 
  }
  
  return (
    <div className="navbar">
        <div className='leftSide' id={openLinks ? "open " : "close"}>
            <Link to="/home"> <h1>TAU TRAVEL</h1></Link>
        </div>
        <div className='rightSide'></div>
        <Link to="/aboutus"> ABOUT US</Link>
        <Link to="/shop"> SHOP</Link>
        <Link to="/tours"> TOURS</Link>
        <button onClick={toggleNavbar}>
        <MenuIcon> </MenuIcon>
        </button>
    </div>
  );
}

export default NavBar;
