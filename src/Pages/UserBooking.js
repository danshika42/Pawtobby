import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import UserHandle from '../database/user.database'
import { useStateValue } from '../Context/StateContext';
import { useNavigate } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

function UserBooking() {
    const [open,setOpen]=useState(false);
    const [booking,setBooking]=useState({});
    const [bookingdata,setBookingData]=useState([]);
    const [{currentUserEmail,Users},dispatch]=useStateValue();
    const userdata=UserHandle.getUserData(Users,currentUserEmail);
    const navigate=useNavigate();
    const getUserBookings= async ()=>{
        const data=await UserHandle.getallbookings();
        const bookings=data.docs.map((doc) => ({ ...doc.data(), bookingId:doc.id }))
        const Userbookings=UserHandle.getallBookingofUser(bookings,userdata[0]?.id);
        setBookingData(Userbookings); 
    }

    const handleDelete=async (id)=>{
        await UserHandle.deleteBooking(id);
    }

    useEffect(()=>{
        getUserBookings();
        console.log(bookingdata);
    },[])

    const handleModal=(bdata)=>{
        setBooking(bdata);
        setOpen(true);
    }


    return (
        <>
        <Nav/>
        <div className='m-8'>
            <h1 className='mb-4 text-2xl font-medium opacity-70'>Your Bookings</h1>
            <div className='grid grid-flow-row gap-4'>
                    {
                        bookingdata.map((bdata)=>(
                        
                                <div className='flex shadow-sm p-4 w-[80%]' key={bdata.bookingId}>
                                    <div className='h-[160px] w-[160px]'>
                                        <img className='h-full w-full  rounded-sm' src={bdata.dogimg} />
                                    </div>
                                    <div className='ml-8 opacity-70'>
                                        <p className='text-xl mb-2 font-semibold'>{bdata.dogname}</p>
                                        <p className='text-[0.92rem] mb-1'>{bdata.service}</p>
                                        <p className='text-[0.92rem] mb-1'>{bdata.time}</p>
                                        <div className='flex text-[0.92rem] mb-1'>
                                            <p className='mr-2'>{bdata.startdate}</p>
                                            <p>{bdata.enddate}</p>
                                        </div>
                                        <div>
                                            <button onClick={()=>handleModal(bdata)} className='hover:bg-[#fca254] bg-[#fd973e] rounded-sm  py-1 px-2  mt-2 font-medium text-white mr-2 text-[0.93rem]'>View</button>
                                            <button onClick={()=>navigate(`/book/${bdata.bookingId}`)} className='hover:bg-[#fca254] bg-[#fd973e] rounded-sm  py-1 px-2  mt-2 font-medium text-white text-[0.93rem]'>Update</button>
                                        </div>
                                    </div>
                                </div>
                        
                            
                        ))
                    }
                    {
                                                open && (
                                                    <BookingModal 
                                                    open={open}
                                                    setOpen={setOpen}
                                                    handleDelete={handleDelete}
                                                    {...booking}
                                                    />
                                                )
                                            }
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default UserBooking