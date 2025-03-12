import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../components/Home';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
                
            },
            {
                path:'updateCoffee',
                element:<UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default router;