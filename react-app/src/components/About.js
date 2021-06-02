import React from 'react';
import portfolio_pic from './portfolio_pic.jpg';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';

const About = ({ authenticated }) => {
  return (
    <>
      {/* Splash Nav Bar */}
      {!authenticated && (
        <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 px-4 py-4">
          <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <img src={logo} className="h-20" alt="Logo" />
              <a
                href="/"
                className="inline-block py-2 text-white text-xl font-bold hover:text-red-500"
              >
                Microcosm
              </a>
              <div className="inline-block cursor-pointer md:hidden">
                <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div className="bg-gray-400 w-8 mb-2" style={{ height: '2px' }}></div>
                <div className="bg-gray-400 w-8" style={{ height: '2px' }}></div>
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <NavLink
                  to="/about"
                  activeClassName="text-red-500"
                  className="inline-block py-1 md:py-4 text-gray-100 hover:text-red-500 mr-6 font-bold"
                >
                  About
                </NavLink>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="/login"
                className="inline-block py-1 md:py-4 text-white hover:text-red-500 mr-6"
              >
                Login
              </a>
              <a
                href="/sign-up"
                className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-red-400 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 h-full bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
        <div className="col-span-1 grid grid-rows-1 items-center justify-around">
          <div className="row-span-1 flex align-center items-center">
            <img
              className="w-4/5 h-4/5 mx-5 my-5 rounded-full border-4 border-white"
              src={portfolio_pic}
              alt="An image of Johnny Tran"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <h1 className="text-6xl font-semibold text-white my-6">Hi there, I'm Johnny!</h1>
          <p className="text-white text-2xl font-semibold my-4 mr-4">
            I'm an actor, community-organizer, and loving partner... oh and I code! I'm passionate
            about storytelling and leveraging collective collaboration to make everything as
            accessible as possible. This app was made using a PostgreSQL Database with a
            Python/Flask backend; and React / Redux on the frontend. I'm always pushing myself to
            explore more complex features integrated with intuitive design. Visit my portfolio to
            learn more about me and my other work!
          </p>

          <a
            href="https://www.linkedin.com/in/thejohnnytran"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl w-1/6 my-8 py-2 text-center font-bold text-indigo hover:bg-indigo-100"
          >
            My LinkedIn Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
