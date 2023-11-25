import React,{useState} from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword ,signOut ,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useChangevalue } from '../customHooks/useChangevalue';
import sidebg from '../images/Group 45.svg'
import logo from '../images/Group 44.svg'
import line from '../images/Line 5.svg'
import google from '../images/google.svg'
import { NavLink } from 'react-router-dom'
import { useStateValue } from '../Context/StateContext';
import UserHandle from '../database/user.database'

function Signin() {
  const [email,changeEmail,resetEmail]=useChangevalue("");
  const [password,changePassword,resetPassword]=useChangevalue("");
  const [{Users},dispatch]=useStateValue();



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
  function setUser(user){
    dispatch({
      type:'SET_USERS',
      user:user
    })
  }

  const getUsers=async ()=>{
    const data = await UserHandle.getalluser();
    console.log(data.docs);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const signinWithGoogle= async ()=>{
    try{
      const google_provider=new GoogleAuthProvider();
      const userCredential=await signInWithPopup(auth,google_provider);

      const userData={name:userCredential.user.displayName,email:userCredential.user.email,postcode:""};
      console.log(userCredential);
     
      const arr =UserHandle.getUserData(Users,userData.email);
      
      if(arr.length===0){
        await UserHandle.addUser(userData);
        getUsers();
      }
      setCurrentUserEmail(userData.email);
      setLogin(true);
      window.location.href = "/";
    }catch(error){
      alert(error.message);
    }
  }

  const signIn = async ()=>{
    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      if(userCredential.user.emailVerified){
        setCurrentUserEmail(email);
        setLogin(true);
        resetEmail();
        resetPassword();
        window.location.href = "/";
      }else{
        await signOut(auth);
        setLogin(false);
        setCurrentUserEmail("");
        alert('Verify email first!');
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
          <NavLink to='/'><img className='w-32' src={logo} /></NavLink>
        </div>
        
        <div>
          <button className='border border-gray-200 py-2 px-6 flex items-center rounded-3xl mt-11' onClick={signinWithGoogle}><img className='w-8' src={google} />Sign in with Google</button>
        </div>
        <div className='flex m-4'>
          <img src={line} />
          <p className='text-[#4d4d4d] mr-4 ml-4 font-extralight text-sm'>or sign in with Email</p>
          <img src={line} />
        </div>
        <div className='flex flex-col justify-evenly h-[18rem] w-[22rem] p-4 shadow-md'>
          <h1 className='text-2xl font-medium'>Sign In</h1>
          <h1 className='font-medium text-sm'>Email</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="email" value={email} onChange={(e)=>changeEmail(e)} />

          <h1 className='font-medium text-sm'>Password</h1>
          <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="password" value={password} onChange={(e)=>changePassword(e)} />
          <input onClick={signIn} className='bg-[#f8a155] rounded-sm border border-[#f8a155] py-1 px-2  mt-2 font-medium cursor-pointer' type="submit" value="Sign In" />
          <div className='text-sm mt-4 text-blue-400'>
            <NavLink className='text-sm mt-4 text-blue-400' to="/forgotpassword">
                Forgot password?
            </NavLink>
          </div>
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

export default Signin