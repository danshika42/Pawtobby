import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Group 44.svg"

function Banner() {
  return (
    <div className="h-[484px] bg-mobile-banner-bg bg-no-repeat lg:bg-banner-bg">
      <nav className="m-auto flex justify-between items-center p-8 sm:w-[86%]">
        <ul>
        <ul>
          <li>
            <img src={logo} />
          </li>
        </ul>
        </ul>
        <i className="fa-solid fa-bars flex text-2xl opacity-60 md:hidden"></i>
        <ul className="hidden w-[60%] justify-evenly font-medium opacity-80 md:flex">
          <li>
            <NavLink className={({isActive})=>("text-[#F69946] bold")} to="/">
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
      <div className="m-auto mt-10 w-[60%] md:m-0  md:w-[50%]">
        <div className="m-auto  md:ml-[15rem] md:mt-[3rem] md:w-[50%]">
          <h1 className="mb-6 text-2xl font-semibold md:text-4xl">
            Book Online
          </h1>
          <p className="text-md">
            If you want someone to care for your pet when you’re away, Pawtobby
            is a great choice.
          </p>
          <button className="mt-6 rounded-sm bg-[#F69946] px-4 py-1 text-white">
            Book Now <i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
