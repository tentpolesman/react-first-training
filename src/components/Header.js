import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg'
const Header = () => {
    return (
        <>
            <ul>
                <div className="wrapper">
                    <NavLink to='/' ><img src={Logo} alt="logo" /></NavLink>
                    <div className="right">
                        <NavLink to='/' className="navlink">Home</NavLink>
                        <NavLink to='/categories' className="navlink">Categories</NavLink>
                    </div>
                </div>
            </ul>
        </>
    )
}
export default Header;
