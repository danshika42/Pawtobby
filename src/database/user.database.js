import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase"


const userCollectionRef=collection(db,"Users");

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
}

export default new UserHandle();