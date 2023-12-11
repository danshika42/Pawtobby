import { addDoc, collection, doc, getDoc, getDocs, updateDoc,deleteDoc } from "firebase/firestore"
import { db } from "../firebase"


const userCollectionRef=collection(db,"Users");
const bookingCollectionRef=collection(db,"Bookings");

class UserHandle {
    addUser=(user)=>{
        return addDoc(userCollectionRef,user);
    };

    updateUser=(id,newuser)=>{
        const userdoc=doc(db,"Users",id);
        return updateDoc(userdoc,newuser);
    };

    getUser=(id)=>{
        const userdoc=doc(db,"Users",id);
        return getDoc(userdoc);
    }

    getalluser=()=>{
        return getDocs(userCollectionRef);
    }
    getUserData=(Users,email)=>{
        const data=Users.filter(user=>user.email===email);
        return data;
    }


    addBooking=(booking)=>{
        return addDoc(bookingCollectionRef,booking);
    };

    updateBooking=(id,newBooking)=>{
        const bookingdoc=doc(db,"Bookings",id);
        return updateDoc(bookingdoc,newBooking);
    };

    getBooking=(id)=>{
        const bookingdoc=doc(db,"Bookings",id);
        return getDoc(bookingdoc);
    }

    getallbookings=()=>{
        return getDocs(bookingCollectionRef);
    }

    getallBookingofUser=(Bookings,userid)=>{
        const data=Bookings.filter(booking=>booking.userid===userid);
        return data;
    }

    deleteBooking=(id)=>{
        const bookingDoc=doc(db,"Bookings",id);
        return deleteDoc(bookingDoc);
    }
}

export default new UserHandle();