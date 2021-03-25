import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5 bg-white text-center text-indigo flex flex-row items-center justify-between px-12">
      <div className="md:block hidden">
        "Always proud... never satisfied." - Words from the Microcosmos
      </div>
      <div className="flex flex-row justify-around">
        <NavLink to="/about" className="font-bold hover:text-red-500 inline-block">
          About
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
