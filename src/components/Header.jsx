import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const links =[
        <Link key="home"  to="/"><li>Home</li></Link>,
        <Link key="addCoffee" to="/addCoffee"><li>Add coffee</li></Link>
    ]
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> Coffee</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-8 menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Header;