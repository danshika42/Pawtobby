import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useStateValue } from '../Context/StateContext'
import { useChangevalue } from '../customHooks/useChangevalue';
import UserHandle from '../database/user.database'
import userimg from '../images/userimg.png'

function Profile() {
    const [{currentUserEmail,Users},dispatch]=useStateValue();
    const data=UserHandle.getUserData(Users,currentUserEmail);
    const [isEditing,setEditing]=useState(false);
    const [completename,changeName,resetName]=useChangevalue(data[0].name);
    const [postcode,changePostcode,resetPostcode]=useChangevalue(data[0].postcode);
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
    const handleSubmit=async ()=>{
        const newUserData={
            email:data[0].email,
            name:completename,
            postcode:postcode
        }
        await UserHandle.updateUser(data[0].id,newUserData);
        getUsers();
        setEditing(false);
    }
    
    return (
      <>
        <Nav />
        <div className="mb-20 mt-8">
          {isEditing ? (
            <>
               <div className="m-auto h-[320px] w-[28%] rounded-md shadow-xl flex flex-col justify-evenly p-8">
                <h1 className="mb-3 mt-4 text-2xl font-medium">Edit</h1>

                <h1 className="text-sm font-medium">Name</h1>
                <input
                required
                className="mb-4 rounded-md border border-gray-200 px-2 py-1"
                type="text"
                value={completename}
                onChange={(e) => changeName(e)}
                pattern="[A-Z]{1,2}\d[A-Z]? \d[A-Z]{2}"
                />

                <h1 className="text-sm font-medium">Post Code</h1>
                <input
                required
                className="mb-4 rounded-md border border-gray-200 px-2 py-1"
                type="postal"
                value={postcode}
                onChange={(e) => changePostcode(e)}
                />

                <input
                onClick={handleSubmit}
                className="mb-2 mt-2 cursor-pointer rounded-sm border border-[#f8a155] bg-[#f8a155] px-2 py-1 font-medium"
                type="submit"
                value="Edit"
                />
                </div>
              {/* <div className="flex h-[25rem] w-[22rem] flex-col justify-evenly p-8 shadow-md">
                
              </div> */}
            </>
          ) : (
            <>
                <div className="m-auto h-[280px] w-[28%] rounded-md shadow-xl">
                  <div className="relative flex h-[80px] flex-col items-center rounded-t-md bg-[#F69946]">
                    <div className="absolute top-[2.3rem] h-[88px] w-[88px] rounded-[50%] bg-white">
                      <img
                        className="h-full w-full rounded-[50%]"
                        src={userimg}
                      ></img>
                    </div>
                    <p className="absolute top-[7.7rem]">{data[0].name}</p>
                  </div>
                  <div className="mt-14 p-8">
                    <p className="mb-2 text-sm opacity-70 sm:text-base">
                      {data[0].email}
                    </p>
                    <p className="mb-2 text-sm opacity-70 sm:text-base">
                      {data[0].postcode}
                    </p>
                    <div
                      onClick={() => setEditing(true)}
                      className="cursor-pointer"
                    >
                      <i className="fa-solid fa-user-pen"></i>
                    </div>
                  </div>
                </div>
            </>
          )}
        </div>
        <Footer />
      </>
    ); 
}

export default Profile