import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from './logo.png';

const NavBar = ({ setAuthenticated }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="border-b-2 border-indigo-800 px-4 py-2">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <img src={logo} className="h-20" alt="Logo" />
            <a
              href="/"
              className="inline-block py-2 text-indigo text-xl font-bold hover:text-red-500"
            >
              Microcosm
            </a>
            <div
              className="inline-block cursor-pointer md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
              <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
              <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
            </div>
          </div>
          <div className="hidden md:block">
            <NavLink
              to="/home"
              activeClassName="text-red-500"
              className="font-bold inline-block py-1 md:py-4 text-indigo hover:text-red-500 mr-6"
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              activeClassName="text-red-500"
              className="font-bold inline-block py-1 md:py-4 text-indigo hover:text-red-500 mr-6"
            >
              Create Story
            </NavLink>
            <NavLink
              to="/users"
              activeClassName="text-red-500"
              className="font-bold inline-block py-1 md:py-4 text-indigo hover:text-red-500 mr-6"
            >
              Search Users
            </NavLink>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        </div>
        {/* Hidden */}
        <div>
          <div className={'flow-hidden block md:hidden' + (showNav ? ' hidden' : '')}>
            <a
              href="/about"
              className="inline-block py-1 md:py-4 text-gray-100 hover:text-red-500 mr-6 font-bold"
            >
              About Us
            </a>
          </div>
        </div>
        <div className={'flow-hidden block md:hidden' + (showNav ? ' hidden' : '')}>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </header>
    </>
  );
};

export default NavBar;
