import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h3 className="text-primaryBlue font-[700] text-4xl">Defi</h3>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white space-x-4">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <li>
              <button className="main-button text-white">Use Defi</button>
            </li>
          </ul>
        </div>
        {/*Hamburger icon */}
        <div
          onClick={() => {
            handleNav();
          }}
          className="block md:hidden"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/*Mobile Menu */}
        <div
          className={
            nav
              ? "w-full flex justify-center z-10 bg-black text-white absolute text-center top-[90px] left-0 h-auto py-6 md:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul className="flex-row space-y-4 text-2xl">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <li>
              <button className="main-button text-white my-4 px-9">
                Use Defi
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
