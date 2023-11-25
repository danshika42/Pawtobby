import React from 'react'
import { NavLink } from 'react-router-dom'
import { useChangevalue } from '../customHooks/useChangevalue';
import sidebg from '../images/Group 45.svg'
import logo from '../images/Group 44.svg'
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase'

function ForgetPassword() {
  const [email,changeEmail,resetEmail]=useChangevalue("");
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth,email);
      alert('Password reset email sent. Check your inbox.');
      window.location.href='signin'
    } catch (error) {
      console.error('Error sending reset email:', error.message);
    }
  };
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='w-[-webkit-fill-available]'>
            <img src={sidebg} />
        </div>
        <div className='flex flex-col justify-center items-center w-[-webkit-fill-available]'>
          <div>
            <NavLink to='/'><img className='w-32 mb-8' src={logo} /></NavLink>
          </div>
          <div className='flex flex-col justify-evenly h-[18rem] w-[24rem] p-8 shadow-md'>
            <p className='text-sm font-thin mb-4'>Enter the email adddress associated with your account and we'll send you a link to reset your password.</p>
            <h1 className='font-medium text-sm'>Email</h1>
            <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="email" value={email} onChange={(e)=>changeEmail(e)}  />
            <input onClick={handleResetPassword} className='bg-[#f8a155] rounded-sm border border-[#f8a155] py-1 px-2  font-medium cursor-pointer' type="submit" value="Continue" />
          </div>
          <div className='flex m-5 text-base text-[#000000a9]'>
            <p>Don't have an account?</p>
            <NavLink className="underline ml-1" to="/signup">
                Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword