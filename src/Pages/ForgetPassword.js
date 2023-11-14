import React from 'react'
import { useChangevalue } from '../customHooks/useChangevalue';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
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
      <Nav/>
        <div>
            <label>Email</label>
            <input className='border border-gray-300 rounded-md py-1 px-2 mb-4' type="email" value={email} onChange={(e)=>changeEmail(e)} />
            <input onClick={handleResetPassword} className='bg-yellow-200 rounded-sm border border-yellow-200 py-1 px-2 mb-6' type="submit" value="Send" />
        </div>
      <Footer/>
    </>
  )
}

export default ForgetPassword