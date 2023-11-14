import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDo5JVifmuwKtlwb4f9IUhojriSAMF1pw4",
  authDomain: "pawtobby-auth.firebaseapp.com",
  projectId: "pawtobby-auth",
  storageBucket: "pawtobby-auth.appspot.com",
  messagingSenderId: "679831706358",
  appId: "1:679831706358:web:0e67b602b405fb72922ad7"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db = getFirestore(app);
