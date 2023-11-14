import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Group 44.svg"

function Nav() {
  return (
    <nav className="m-auto flex justify-between items-center p-8 sm:w-[86%]">
      <ul>
        <li>
          <img src={logo} />
        </li>
      </ul>
      <i className="fa-solid fa-bars flex text-2xl opacity-60 md:hidden"></i>
      <ul className="hidden w-[60%] justify-evenly font-medium opacity-80 md:flex">
        <li>
            <NavLink className={({isActive})=>(isActive?"text-[#F69946] bold":"")} to="/">
              Home
            </NavLink>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">
            Our Services{" "}
            <i className="fa-solid fa-sort-down ml-1 text-center align-top opacity-80"></i>
          </a>
        </li>
        <li>
        <NavLink className={({isActive})=>(isActive?"text-[#F69946] bold":"")} to="/book">Book Now</NavLink>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <NavLink className={({isActive})=>(isActive?"text-[#F69946] bold":"")} to="/signup">
           Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>(isActive?"text-[#F69946] bold":"")} to="/signin">
           Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
