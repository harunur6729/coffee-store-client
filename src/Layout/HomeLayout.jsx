import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;