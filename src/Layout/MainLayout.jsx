import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../page/Navbar';
import Footer from '../page/Footer';

const MainLayout = (props) => {
    return (
        
        <div className=' max-w-7xl mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;