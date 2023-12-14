import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import UserHandle from "../database/user.database";
import { useStateValue } from "../Context/StateContext";
import { NavLink, useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";

function UserBooking() {
  const [bookingdata, setBookingData] = useState([]);
  const [{ currentUserEmail, Users }, dispatch] = useStateValue();
  const userdata = UserHandle.getUserData(Users, currentUserEmail);
  const navigate = useNavigate();
  const getUserBookings = async () => {
    const data = await UserHandle.getallbookings();
    const bookings = data.docs.map((doc) => ({
      ...doc.data(),
      bookingId: doc.id,
    }));
    const Userbookings = UserHandle.getallBookingofUser(
      bookings,
      userdata[0]?.id
    );
    setBookingData(Userbookings);
  };

  const handleDelete = async (id) => {
    await UserHandle.deleteBooking(id);
  };

  useEffect(() => {
    getUserBookings();
    console.log(bookingdata);
  }, []);


  return (
    <>
      <Nav />
      <div className="m-8">
        { (bookingdata?.length==0)? (
            <>
              <h1 className="mb-4 text-2xl font-medium opacity-70">No Bookings</h1>
              <p>Go to <NavLink className="text-blue-400" to='/book'>Book Now</NavLink> and start booking</p>
            </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-medium opacity-70">
              Your Bookings
            </h1>
            <div className="grid grid-flow-row gap-4">
              {bookingdata.map((bdata) => (
                <div
                  className="flex w-[80%] p-4 shadow-sm"
                  key={bdata.bookingId}
                >
                  <div className="h-[160px] w-[160px]">
                    <img
                      className="h-full w-full  rounded-sm"
                      src={bdata.dogimg}
                    />
                  </div>
                  <div className="ml-8 opacity-70">
                    <p className="mb-2 text-xl font-semibold">
                      {bdata.dogname}
                    </p>
                    <p className="mb-1 text-[0.92rem]">{bdata.service}</p>
                    <p className="mb-1 text-[0.92rem]">{bdata.time}</p>
                    <div className="mb-1 flex text-[0.92rem]">
                      <p className="mr-2">{bdata.startdate}</p>
                      <p>{bdata.enddate}</p>
                    </div>
                    <div className="flex">
                      <BookingModal handleDelete={handleDelete} {...bdata}/>
                      <button
                        onClick={() => navigate(`/book/${bdata.bookingId}`)}
                        className="mt-2 rounded-sm bg-[#fd973e]  px-2 py-1  text-[0.93rem] font-medium text-white hover:bg-[#fca254]"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default UserBooking;
