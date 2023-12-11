import "./App.css";
import Home from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import SearchSitter from "./Pages/SearchSitter";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import ForgetPassword from "./Pages/ForgetPassword";
import Profile from "./Pages/Profile";
import UserBooking from "./Pages/UserBooking";


function App() {
  return (
    <div className="m-auto max-w-[1590px]">
     <Routes>
      <Route path='/' Component={Home} />
      <Route path='/signin' Component={Signin}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/forgotpassword' Component={ForgetPassword}/>
      <Route path='/profile' Component={Profile} />
      <Route path='/book' Component={SearchSitter} />
      <Route path='/book/:bookingid' Component={SearchSitter} />
      <Route path='/userbookings' Component={UserBooking} />
     </Routes>
    </div>
  );
}

export default App;
