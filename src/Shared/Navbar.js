import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import phone from '../images/phone.png';
const Navbar = () => {

    const menuItems = <>
    <li><NavLink to="/">Home</NavLink> <span>|</span> </li>
    <li><NavLink to="/about">About Us</NavLink> <span>|</span> </li>
    <li><NavLink to="/services">Services</NavLink> <span>|</span> </li>
    <li><NavLink to="/media">Media</NavLink> <span>|</span> </li>
    <li><NavLink to="/album">Album</NavLink> <span>|</span> </li>
    <li><NavLink to="/blog">Blog</NavLink> <span>|</span> </li>
    <li><NavLink to="/contact">Contact Us</NavLink><span>|</span> </li>
    </>


    return (
        <div >
                 <div className='lg:grid grid-cols-3 '>
                    <div className='flex justify-center'> <span className='flex text-xl  mt-2'> <img className="w-5 h-8" src={phone}   alt="" /> +91-9999963537</span></div>

                    <div className='flex justify-center'><Link to="/" className=" btn btn-ghost normal-case text-xl"> <span className='text-pink-600  text-4xl '>Sohni Juneja</span></Link></div>

                 <div>
                   
                <span className='flex justify-center mt-2  '>
                                <a href="https://www.linkedin.com/in/md-nahid-hossain-a8522218a/" target=" _blank"><img src={linkedin} className="w-8" alt="" /></a>
                                <a href="https://www.facebook.com/mdnahid.shuvo.7330/" target=" _blank"><img src={facebook} className="w-8 mx-4" alt="" /></a>

                                <a href="https://www.instagram.com/md.nahid.shuvo/" target=" _blank"><img src={instagram} className="w-8" alt="" /></a>
                            </span>
                 </div>
                 </div>
                 

            <div className="navbar ">
                <div className="navbar-start ">
                    <div className="dropdown ml-7">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden bg-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 text-white bg-black  shadow  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                   
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