import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
const [isMenuOpen,setIsMenuOpen] = useState(false);

    return (
      <div className='sticky w-full top-0'>
<div className='lg:flex items-center justify-between py-5 lg:px-6 bg-green-50'>
      <p className='text-center text-green-600 font-semibold'>413-992-8931</p>
      <div className='text-center lg:pl-28'>
      <p className='text-green-700 font-bold text-2lg'>ALL POINTS <span className='text-indigo-900'>MOVERS LLC</span></p>
      <small className='font-semibold'>we take care of the details..and deliver peach of mind</small>
      </div>
      <p className='text-green-600 font-semibold text-center'>appointsmoverslic@gmail.com</p>
    </div>

    <did className='container mx-auto'>
          <div className="navbar bg-green-600 text-white">
      <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} 
             onClick={() => setIsMenuOpen(true)}
            className="btn btn-white btn-sm lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            {isMenuOpen && (
          <div className="absolute text-left top-14 left-2 right-3 w-screen">
              <div className="p-5 me-12 bg-green-600 border rounded shadow-sm">
                         
                  <nav>
                      <ul className="flex flex-col gap-2">
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/home'>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/about'>About us</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/videos'>Videos</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/contact'>Contact us</NavLink>
                                        
                      </ul>
                                    
                  </nav>
              </div>
          </div>
                    )}
          </div>
         </div>
        <div className="navbar-center pr-38 lg:flex hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-white text-lg">
          <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/home'>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/about'>About us</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/videos'>Videos</NavLink>
                        <NavLink className={({ isActive }) =>
                                    isActive
                                        ? 'text-lg font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-theme-default'
                                        : 'text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-theme-default'
                                } to='/contact'>Contact us</NavLink>
              
          </ul>
        </div>
          <div className='navbar-end'>
          <label className="mt-1 mr-1 lg:hidden  bg-white rounded btn btn-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
            />
                  </svg>
            </label>
    <button className="btn bg-white btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
       </div>
    </did>
      </div>
 
           
    );
};

export default Header