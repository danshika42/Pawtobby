import React,{useState} from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword ,signOut ,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useChangevalue } from '../customHooks/useChangevalue';
import sidebg from '../images/Group 45.svg'
import logo from '../images/Group 44.svg'
import line from '../images/Line 5.svg'
import google from '../images/google.svg'
import { NavLink } from 'react-router-dom'

function Signin() {
  const [email,changeEmail,resetEmail]=useChangevalue("");
  const [password,changePassword,resetPassword]=useChangevalue("");

  const signinWithGoogle = async ()=>{
    const google_provider=new GoogleAuthProvider();
    signInWithPopup(auth,google_provider)
    .then((res)=>{
      const newUser={...res,name:res.user.displayName,email:res.user.email};
      res=newUser;
      console.log(res);
      window.location.href = "/";
    }).catch((error)=>{
      alert(error.message)
    });
  }

  const signIn = async ()=>{
    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      if(userCredential.user.emailVerified){
        window.location.href = "/";
      }else{
        await signOut(auth);
        alert('Verify email');
      }
    }catch(error){
      alert(error.message);
    }
  }
 

  return (
    <>
      <div className='flex justify-between items-center'>
      <div className='w-[-webkit-fill-available]'>
          <img src={sidebg} />
      </div>
      <div className='flex flex-col justify-center items-center w-[-webkit-fill-available]'>
        <div>
          <NavLink to='/'><img className='w-32 m-3' src={logo} /></NavLink>
        </div>
        <div className='flex flex-col justify-evenly h-[22rem] w-[22rem] p-7 shadow-md'>
          <h1 className='text-2xl font-medium'>Sign In</h1>
          <h1 className='font-medium text-sm'>Email</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="email" value={email} onChange={(e)=>changeEmail(e)} />

          <h1 className='font-medium text-sm'>Password</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="password" value={password} onChange={(e)=>changePassword(e)} />
          <input onClick={signIn} className='bg-[#f8a155] rounded-sm border border-[#f8a155] py-1 px-2  mt-2 font-medium cursor-pointer' type="submit" value="Sign In" />
        </div>
        <div className='flex mt-8 mb-8'>
          <img src={line} />
          <p className='text-[#4d4d4d] mr-4 ml-4 font-extralight text-sm'>or sign in with Google</p>
          <img src={line} />
        </div>
        <div>
          <button className='border border-gray-200 py-2 px-6 flex items-center rounded-3xl' onClick={signinWithGoogle}><img className='w-8' src={google} />Sign in with Google</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin