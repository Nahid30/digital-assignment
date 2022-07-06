import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/media">Media</NavLink></li>
    <li><NavLink to="/album">Album</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>


    return (
        <div >
            <div className="navbar ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 text-white bg-black  shadow  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    {/* <Link to="/" className="btn btn-ghost normal-case text-xl"> <span className='text-red-500'>Rapid</span> <span className='text-white'>Manufacturer</span> </Link> */}
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal p-0 text-black">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;