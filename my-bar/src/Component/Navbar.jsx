import{Link}from 'react-router-dom'
import { PiShoppingCartFill } from "react-icons/pi";

import './Navbar.css'
const Navbar = () => {
    return ( <div className="merf"> <header className='box'>
        <h2 className='titles'>ONLINE DRINKING LIQUOR</h2>
        <div className="nav">
        <Link to="/"className="link">HOME</Link>
        <Link to="/Product" className="link">PRODUCT</Link>
        <Link to="/Blog"className="link">ABOUT</Link>
        <Link to="/Contact"className="link">CONTACT</Link>
        <Link to="/Cart" className="link"><PiShoppingCartFill size={28}/></Link>
    </div> </header></div>);
}
 
export default Navbar;