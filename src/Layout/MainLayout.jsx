import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../page/Navbar';

const MainLayout = (props) => {
    return (
        
        <div className=' max-w-7xl mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;