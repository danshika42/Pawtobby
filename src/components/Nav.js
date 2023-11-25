import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Group 44.svg"
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useStateValue } from "../Context/StateContext";
import UserHandle from "../database/user.database";

function Nav() {
  const [{isLoggedIn,Users,currentUserEmail},dispatch]=useStateValue();
  const data=UserHandle.getUserData(Users,currentUserEmail);

  function setLogin(value){
    dispatch({
      type:'SET_ISLOGIN',
      value:value
    })
  }
  function setCurrentUserEmail(email){
    dispatch({
      type:'SET_CURRENTUSEREMAIL',
      email:email
    })
  }
  const logOut=async ()=>{
    setCurrentUserEmail("");
    setLogin(false)
    await signOut(auth);
  }
  return (
    <nav className="m-auto flex justify-between items-center p-8 sm:w-[86%]">
      <ul>
        <li>
         <NavLink to='/'><img className='w-32' src={logo} /></NavLink>
        </li>
      </ul>
      <i className="fa-solid fa-bars flex text-2xl opacity-60 md:hidden"></i>
      <ul className="hidden w-[60%] justify-evenly tems-center font-medium opacity-80 md:flex">
        <li>
            <NavLink className={({isActive})=>(isActive?"text-[#F69946] bold":"")} to="/">
              Home
            </NavLink>
        </li>
        {/* <li>
          <a href="">About Us</a>
        </li> */}
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
        {
            isLoggedIn?(
              <>
               <li>
                <div onClick={logOut} className="cursor-pointer">
                  Sign Out
                </div>
                </li>
              </>
            ):(
              <>
               <li>
                <NavLink to="/signin">
                  Sign In
                </NavLink>
                </li>
              </>
            )
          }
          {
            isLoggedIn && 
            <>
             <NavLink to="/profile" className={({isActive})=>(isActive?"text-[#F69946] bold flex items-center":"flex items-center")} >
              <li>
                <i className="fa-solid fa-user"></i>
              </li>
              <li>
                <p className="font-thin text-sm ml-2">{data[0].name}</p>
              </li>
            </NavLink>
            </>
          }
      </ul>
    </nav>
  );
}

export default Nav;
