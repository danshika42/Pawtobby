import React,{useState}  from 'react'
import { useChangevalue } from '../customHooks/useChangevalue'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,sendEmailVerification , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import sidebg from '../images/Group 45.svg'
import logo from '../images/Group 44.svg'
import line from '../images/Line 5.svg'
import google from '../images/google.svg'
import { NavLink } from 'react-router-dom'

function Signup() {
  const [email,changeEmail,resetEmail]=useChangevalue("");
  const [completename,changeName,resetName]=useChangevalue("");
  const [postcode,changePostcode,resetPostcode]=useChangevalue("");
  const [password,changePassword,resetPassword]=useChangevalue("");
  const [googleName,setName]=useState('');
  const [googleEmail,setEmail]=useState('');

  const signupWithGoogle = async ()=>{
    try{
      const google_provider=new GoogleAuthProvider();
      var userCredential=await signInWithPopup(auth,google_provider);
      setName(userCredential.user.displayName);
      setEmail(userCredential.user.email);
      const newUser={...userCredential,fname:"Anshika Dubey"};
      userCredential=newUser
      console.log(userCredential);
    }catch(error){
      console.error('Error during registration:', error.message);
    }
  }

  const signUp=async ()=>{
      try {
        var userCredential = await createUserWithEmailAndPassword(auth,email, password)
        const newUser={...userCredential,fname:"Anshika Dubey"};
        userCredential=newUser
        console.log(userCredential);
        await sendEmailVerification(auth.currentUser)
        alert('Verification email sent');
      } catch (error) {
        console.error('Error during registration:', error.message);
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
        <div className='flex flex-col justify-evenly h-[25rem] w-[23rem] p-8 shadow-md'>
          <h1 className='text-2xl font-medium mb-3 mt-4'>Sign Up</h1>
          
          <h1 className='font-medium text-sm'>Name</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="text" value={completename} onChange={(e)=>changeName(e)} pattern="[A-Z]{1,2}\d[A-Z]? \d[A-Z]{2}" />

          <h1 className='font-medium text-sm'>Post Code</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="postal" value={postcode} onChange={(e)=>changePostcode(e)} />
          
          <h1 className='font-medium text-sm'>Email</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="email" value={email} onChange={(e)=>changeEmail(e)} />

          <h1 className='font-medium text-sm'>Password</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="password" value={password} onChange={(e)=>changePassword(e)} />
          <input onClick={signUp} className='bg-[#f8a155] rounded-sm border border-[#f8a155] py-1 px-2 mb-6 mt-2 font-medium cursor-pointer' type="submit" value="Sign Up" />
        </div>
        <div className='flex mt-8 mb-8'>
          <img src={line} />
          <p className='text-[#4d4d4d] mr-4 ml-4 font-extralight text-sm'>or sign up with Google</p>
          <img src={line} />
        </div>
        <div>
          <button className='border border-gray-200 py-2 px-6 flex items-center rounded-3xl' onClick={signupWithGoogle}><img className='w-8' src={google} />Sign up with Google</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup