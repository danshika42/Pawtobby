import React,{useState}  from 'react'
import { useChangevalue } from '../customHooks/useChangevalue'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,sendEmailVerification , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import sidebg from '../images/Group 45.svg'
import line from '../images/Line 5.svg'
import google from '../images/google.svg'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../Context/StateContext';
import UserHandle from '../database/user.database'

function Signup() {
  const [email,changeEmail,resetEmail]=useChangevalue("");
  const [completename,changeName,resetName]=useChangevalue("");
  const [postcode,changePostcode,resetPostcode]=useChangevalue("");
  const [password,changePassword,resetPassword]=useChangevalue("");
  const [{Users},dispatch]=useStateValue();

  function setUser(user){
    dispatch({
      type:'SET_USERS',
      user:user
    })
  }

  function setCurrentUserEmail(email){
    dispatch({
      type:'SET_CURRENTUSEREMAIL',
      email:email
    })
  }

  function setLogin(value){
    dispatch({
      type:'SET_ISLOGIN',
      value:value
    })
  }

  const getUsers=async ()=>{
    const data = await UserHandle.getalluser();
    console.log(data.docs);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const signupWithGoogle= async ()=>{
    try{
      const google_provider=new GoogleAuthProvider();
      const userCredential=await signInWithPopup(auth,google_provider);
      const userData={name:userCredential.user.displayName,email:userCredential.user.email,postcode:""};
      console.log(userCredential);
      const arr = UserHandle.getUserData(Users,userData.email);
      
      if(arr.length===0){
        await UserHandle.addUser(userData);
        getUsers();
      }

      setCurrentUserEmail(userData.email);
      setLogin(true);
      window.location.href = "/";
    }catch (error) {
      alert(error.message);
    }
  }

  const signUp=async ()=>{
      try {
        const userCredential = await createUserWithEmailAndPassword(auth,email, password)
        const userData={name:completename,postcode:postcode,email:email};
        console.log(userCredential);
        await UserHandle.addUser(userData);
        getUsers();
        resetEmail();
        resetName();
        resetPassword();
        resetPostcode();
        await sendEmailVerification(auth.currentUser)
        alert('Verify Email, Verification email sent');
        window.location.href = "/signin";
      } catch (error) {
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
          <button className='border border-gray-200 py-2 px-6 flex items-center rounded-3xl' onClick={signupWithGoogle}><img className='w-8' src={google} />Sign up with Google</button>
        </div>
        <div className='flex m-4'>
          <img src={line} />
          <p className='text-[#4d4d4d] mr-4 ml-4 font-extralight text-sm'>or sign up with Email</p>
          <img src={line} />
        </div>
        <div className='flex flex-col justify-evenly h-[25rem] w-[22rem] p-8 shadow-md'>
          <h1 className='text-2xl font-medium mb-3 mt-4'>Sign Up</h1>
          
          <h1 className='font-medium text-sm'>Name</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="text" value={completename} onChange={(e)=>changeName(e)} pattern="[A-Z]{1,2}\d[A-Z]? \d[A-Z]{2}" />

          
          
          <h1 className='font-medium text-sm'>Email</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="email" value={email} onChange={(e)=>changeEmail(e)} />

          <h1 className='font-medium text-sm'>Password</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="password" value={password} onChange={(e)=>changePassword(e)} />

          <h1 className='font-medium text-sm'>Post Code</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-4' type="postal" value={postcode} onChange={(e)=>changePostcode(e)} />

          <input onClick={signUp} className='bg-[#f8a155] rounded-sm border border-[#f8a155] py-1 px-2 mb-6 mt-2 font-medium cursor-pointer' type="submit" value="Sign Up" />
        </div>
        <div className='flex m-5 text-base text-[#000000a9]'>
          <p>Already have an account?</p>
          <NavLink className="underline ml-1" to="/signin">
              Sign In
          </NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup