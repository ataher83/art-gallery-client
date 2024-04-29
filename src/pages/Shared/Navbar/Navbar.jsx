import { useContext } from "react";
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

// import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); 

    const [text] = useTypewriter({
        words: ['The Art Gallery', 'The Art Gallery', 'The Art Gallery'],
        // words: ['The', 'The Art', 'The Art Gallery'],
        loop: 0
      })


    const [theme, setTheme] = useState('light')
    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
        setTheme('dark')
        } else {
        setTheme('light')
        }
    }
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])








    const handleSignOut = () => {
        logOut()
            .then()
            .catch() 
    }

    const navLinks = <>
    <li ><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allArtAndCraftItems">All Art & Craft Items</NavLink></li>
    <li><NavLink to="/addCraftItem">Add Craft Item</NavLink></li>
    <li><NavLink to="/myArtAndCraftList">My Art & Craft List</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    {/* <li><NavLink to="/login">Login</NavLink></li> */}
    {/* <li><NavLink to="/register">Register</NavLink></li> */}
</>

    return (
        <div className="navbar bg-base-100 font-medium mt-5   container mx-auto">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[10] p-2 shadow bg-base-100 rounded-box w-52 ">
                    
                    {navLinks}

                </ul>
                </div>
                <a className="text-3xl font-bold text-purple-600" href="/"><span>{text}</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                    {navLinks}

                </ul>
            </div>
            

            <div className="navbar-end">
                {
                    user?
                        <div >
                            <span>{user.email}</span>
                            <div className="flex gap-3">
                                
                                
                                <div className="avatar  tooltip" data-tip={user.displayName} >
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                        
                                    </div>
                                </div>
                                
                                <div>
                                    <button onClick={handleSignOut}
                                    className="btn">Log out</button>
                                </div>
                            </div>
                        </div>
                        
                        :
                        <Link to="/login">
                        <button className="btn">Login / Register</button>
                        </Link>
                }
            </div>


            <div>
                <label className='cursor-pointer grid place-items-center'>
                <input
                    type='checkbox'
                    onChange={handleToggle}
                    className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                />
                <svg
                    className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <circle cx='12' cy='12' r='5' />
                    <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                </svg>
                <svg
                    className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                </svg>
                </label>
            </div>



        </div>
    );
};

export default Navbar;