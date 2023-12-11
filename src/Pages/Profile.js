import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useStateValue } from '../Context/StateContext'
import UserHandle from '../database/user.database'
import userimg from '../images/userimg.png'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

function Profile() {
    const [{currentUserEmail,Users},dispatch]=useStateValue();
    const data=UserHandle.getUserData(Users,currentUserEmail);

    const [isEditing,setEditing]=useState(false);

    const initialState={
      name:data[0]?.name,
      email:data[0]?.email,
      postcode:data[0]?.postcode,
      userImg:data[0]?.userImg,
      petImg:data[0]?.petImg,
      houseImg:data[0]?.houseImg,
      idImg:data[0]?.idImg,
    }

    const [userData,setUserdata]=useState(initialState);
    const {name,email,postcode,userImg,petImg,houseImg,idImg}=userData;
    const [progress,setProgress]=useState(null);

    const handleChange=(e)=>{
      setUserdata((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleChangeFile=(e)=>{
        const file=e.target.files[0];
        const uploadImg=()=>{
          console.log(file);
  
          const storageRef=ref(storage,file.name);
          const uploadTask=uploadBytesResumable(storageRef,file);
    
          uploadTask.on("state_changed",(ss)=>{
            const progress=(ss.bytesTransferred/ss.totalBytes)*100;
            setProgress(progress);
            switch(ss.state){
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          }, (error)=>{
            console.log(error);
          },
            ()=>{
              getDownloadURL(uploadTask.snapshot.ref).then((downloadurl)=>{
                setUserdata((prev)=>({...prev,[e.target.name]:downloadurl}));
              })      
            }
          )
        }
        file && uploadImg();
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
    
    const handleSubmit=async ()=>{
      if(progress!==null && progress<100){
        alert("Image is Uploading")
      }else{
        await UserHandle.updateUser(data[0]?.id,userData);
        getUsers();
        setEditing(false);
      }
    }
    
    return (
      <>
        <Nav />
        <div className="mb-20 mt-8">
          {isEditing ? (
            <>
               <div className="m-auto h-[720px] w-[28%] rounded-md shadow-xl flex flex-col justify-evenly p-8">
                <h1 className="mb-3 mt-4 text-2xl font-medium">Update Profile</h1>

                <h1 className="text-[0.81rem] font-medium">Name</h1>
                <input
                required
                className="mb-4 rounded-md border border-gray-200 px-2 py-1"
                type="text"
                value={name}
                name="name"
                onChange={(e) => handleChange(e)}
                />
                <label className='text-[0.81rem]'>Upload Your image (optional)</label>
                <input className='mb-4 text-base' disabled={progress!==null && progress<100} onChange={handleChangeFile} type='file' accept="image/*" name="userImg" />

                <h1 className="text-sm font-medium">Post Code</h1>
                <input
                required
                className="mb-4 rounded-md border border-gray-200 px-2 py-1"
                type="postal"
                value={postcode}
                name="postcode"
                onChange={(e) => handleChange(e)}
                />
                <label  className='text-[0.81rem]'>Upload Photo ID image (Government id or Passport)</label>
                <input  className='mb-4 text-base'  disabled={progress!==null && progress<100} onChange={handleChangeFile} required type='file' accept="image/*" name="idImg" />

                <label  className='text-[0.81rem]'>Upload pet image</label>
                <input  className='mb-4 text-base'  disabled={progress!==null && progress<100} onChange={handleChangeFile} required type='file' accept="image/*" name="petImg" />
              
                <label  className='text-[0.81rem]'>Upload home and surroundings image (optional)</label>
                <input className='mb-4 text-base'  disabled={progress!==null && progress<100} onChange={handleChangeFile} type='file' accept="image/*" name="houseImg" />
              
                {
                  (progress!==null && progress<100)?(<p className="text-red-400 font-semibold text-sm">Image is uploading {progress}</p>):(<></>)
                }
                <input
                onClick={handleSubmit}
                disabled={progress!==null && progress<100}
                className="mb-2 mt-2 cursor-pointer rounded-sm border border-[#f8a155] bg-[#f8a155] px-2 py-1 font-medium"
                type="submit"
                value="Edit"
                />
                </div>
            </>
          ) : (
            <>
                <div className="m-auto h-[610px] w-[28%] rounded-md shadow-xl">
                  <div className="relative flex h-[80px] flex-col items-center rounded-t-md bg-[#F69946]">
                    <div className="absolute top-[2.3rem] h-[88px] w-[88px] rounded-[50%] bg-white">
                    {
                      (data[0]?.userImg!=="") 
                        ?
                      <img
                        className="h-full w-full rounded-[50%]"
                        src={data[0]?.userImg}
                      ></img>
                      :
                      <img
                        className="h-full w-full rounded-[50%]"
                        src={userimg}
                      ></img>
                    }
                      
                    </div>
                    <p className="absolute top-[8.1rem]">{data[0]?.name}</p>
                  </div>
                  <div className="mt-14 p-8">
                    <div className='flex'>
                      <p className='mr-1 text-sm opacity-70 sm:text-base'>Email :</p>
                      <p className="mb-2 text-sm opacity-70 sm:text-base">
                        {data[0]?.email}
                      </p>
                    </div>
                    <div className='flex'>
                      <p className='mr-1 text-sm opacity-70 sm:text-base'>Post Code :</p>
                      <p className="mb-2 text-sm opacity-70 sm:text-base">
                        {data[0]?.postcode}
                      </p>
                    </div>
                    {
                        (data[0]?.petImg!=="") 
                          &&
                          <div className='flex mb-2'>
                            <p className='mr-2 mb-2 text-sm opacity-70 sm:text-base'>Your Pet Image :</p>
                            <img
                            className="h-[98px] w-[98px] rounded-sm"
                            src={data[0]?.petImg}
                            ></img>
                          </div> 
                      }
                      {
                        (data[0]?.houseImg!=="") 
                          && 
                          <div className='flex mb-2'>
                            <p className='mr-2 mb-2 text-sm opacity-70 sm:text-base'>Your House :</p>
                            <img
                            className="h-[98px] w-[98px] rounded-sm"
                            src={data[0]?.houseImg}
                            ></img>
                          </div> 
                      } 
                      {
                        (data[0]?.idImg!=="") 
                          && 
                          <div className='flex mb-2'>
                            <p className='mr-2 mb-2 text-sm opacity-70 sm:text-base'>Your Id :</p>
                            <img
                            className="h-[98px] w-[98px] rounded-sm"
                            src={data[0]?.idImg}
                            ></img>
                          </div> 
                      }
                    {
                      (data[0]?.petImg==="" || data[0]?.houseImg==="" || data[0]?.idImg==="") 
                      ?<p className='mb-2 text-sm opacity-70 sm:text-sm text-red-600 font-semibold cursor-pointer' onClick={() => setEditing(true)}>Upload images</p>:<></>
                    }
                    
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