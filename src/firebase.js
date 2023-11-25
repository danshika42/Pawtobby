import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQvOtyADOwzZKrphyis4c-OsjJjhPKXMc",
  authDomain: "pawtobby.firebaseapp.com",
  projectId: "pawtobby",
  storageBucket: "pawtobby.appspot.com",
  messagingSenderId: "622648981788",
  appId: "1:622648981788:web:da4f95d787be90b30862d9"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db = getFirestore(app);


