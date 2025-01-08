import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Logo from '../assets/image/Screenshot_4.png'

const Navbar = () => {

     const {user, singOutUser} = useContext(AuthContext);

    const handelSingOut = () => {
        singOutUser()
        .then(() => {
            console.log('succes sing out')
        })
        .catch(error => {
            console.log('fail sing out')
        })
    }

    const link = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><a>Add Tutors</a></li>
        <li><a>My Tutors</a></li>


    </>



    return (

        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className='w-10'>
                    <img src={Logo} alt="" />
                </div>
                <a className="btn btn-ghost text-xl">SkillSync</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                    link
                   }
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ? <>
                    <button onClick={handelSingOut}  className='btn'>Sign out</button>
                    </> : 
                    
                    <>
                    <Link to="/register" className="btn"> Register </Link>
              <Link to="/SingIn" className="btn"> Sing In </Link>
                    </>
                }
              
            </div>
        </div>
    );
};

export default Navbar;