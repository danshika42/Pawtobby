import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import UserHandle from "../database/user.database";
import { useStateValue } from "../Context/StateContext";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";



function BookSitter() {
  const [{Users,currentUserEmail},dispatch]=useStateValue();
  const [file,setFile]=useState(null);
  const [progress,setProgress]=useState(null);
  const Userdata=UserHandle.getUserData(Users,currentUserEmail);
  const navigate = useNavigate();
  const {bookingid}=useParams();

  useEffect(()=>{
    bookingid && getBookingData();
  },[bookingid]);

  const getBookingData=async()=>{
    const snapshot=await UserHandle.getBooking(bookingid);
    if(snapshot.exists()){
      setData({...snapshot.data()});
    }
  }

  const initialState={
    userid:Userdata[0]?.id,
    service:null,
    address:null,
    frequency:null,
    startdate:null,
    enddate:null,
    time:null,
    size:null,
    age:null,
    dogname:null,
    dogimg:null,
  }
  
  const [data,setData]=useState(initialState);

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_xauwpl9",
    //     "template_lkh80rx",
    //     form.current,
    //     "Q1evFF5z5q1Ef-BYy"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    if(bookingid===undefined){
      try{
        await UserHandle.addBooking(data);
      }catch(error){
        alert(error.message);
      } 
    }else{
      try{
        await UserHandle.updateBooking(bookingid,data);
      }catch(error){
        alert(error.message);
      }  
    }
    setFile(null);
    setProgress(null);
    navigate('/userbookings')
  };

  useEffect(()=>{
    const uploadFile=()=>{
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
        async ()=>{
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadurl)=>{
            setData((prev)=>({...prev,dogimg:downloadurl}));
          })      
        }
      )

    }
    file && uploadFile();
  },[file])

  return (
    <div className="mb-12 mt-8">
      <form className="m-auto h-[980px] w-[40%] rounded-md shadow-xl flex flex-col justify-evenly p-8" ref={form} onSubmit={handleSubmit}>
        <h1 className="mb-4 mt-4 text-2xl font-medium">{(bookingid===undefined)?("Book trusted sitters and dog walkers"):("Edit Your Booking")}</h1>
       
        <label className="text-sm font-medium">What service do you need?</label>
        <select value={data.service} onChange={handleChange} name="service" required className="border border-gray-200 rounded-md py-2 px-2 mb-2">
          <option selected disabled>Select Service</option>
          <option value="Boarding">Boarding</option>
          <option value="House Sitting">House Sitting</option>
          <option value="Dog Walking">Dog Walking</option>
        </select>

        <label className="text-sm font-medium">What's your address?</label>
        <input value={data.address} onChange={handleChange} required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="text" name="address" />
        
        <label className="text-sm font-medium">How often do you need Drop-In Visits?</label>
        <select value={data.frequency} onChange={handleChange} name="frequency" required className="border border-gray-200 rounded-md py-2 px-2 mb-2" >
          <option selected disabled>Select</option>
          <option value="One Time">One Time</option>
          <option value="Weekly">Weekly</option>
        </select>
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium mr-1">Start date :</label>
            <input value={data.startdate} onChange={handleChange} required className='border border-gray-200 rounded-md py-1 px-2' type="date" name="startdate" />
          </div>
          <div>
            <label className="text-sm font-medium mr-1">End date :</label>
            <input value={data.enddate} onChange={handleChange} required className='border border-gray-200 rounded-md py-1 px-2' type="date" name="enddate" />
          </div>
        </div>

        <label className="text-sm font-medium">Which time do you need?</label>
        <select value={data.time}  onChange={handleChange} name="time" required className="border border-gray-200 rounded-md py-2 px-2 mb-2" >
          <option selected disabled>Select Time</option>
          <option value="6am-11am">6am-11am</option>
          <option value="11am-3pm">11am-3pm</option>
          <option value="3pm-10pm">3pm-10pm</option>
        </select>

        <label className="text-sm font-medium">Name of your dog</label>
        <input value={data.dogname}  onChange={handleChange} required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="text" name="dogname" />

        <label className="text-sm font-medium">What size are your dog (lbs)?</label>
        <select value={data.size}  onChange={handleChange} name="size" required className="border border-gray-200 rounded-md py-2 px-2 mb-2">
          <option selected disabled>Select Size</option>
          <option value="Small">Small (0-15)</option>
          <option value="Medium">Medium (16-40)</option>
          <option value="Large">Large (41-100)</option>
          <option value="Giant">Giant 101+</option>
        </select>

        <label className="text-sm font-medium">How old are your dog?</label>
        <input value={data.age}  onChange={handleChange} required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="number" name="age" />

        <label className="text-sm font-medium">Upload image of your dog</label>
        <input  onChange={(e)=>setFile(e.target.files[0])} required type="file" name="dogimg" accept="image/*" />
        {
          (progress!==null && progress<100)?(<p className="text-red-400 font-semibold text-sm">Image is uploading {progress}</p>):(<></>)
        }
        <button disabled={progress!==null && progress<100}  className="mt-3 cursor-pointer rounded-sm border border-[#f8a155] bg-[#f8a155] px-2 py-1 font-medium">Book</button>
      </form>
    </div>
  );
}

export default BookSitter;
