// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp , getApps } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcj9MhQpXQN-GMNsRyFEhTT3GGS7Y-wYw",
  authDomain: "al3gd-eef28.firebaseapp.com",
  projectId: "al3gd-eef28",
  storageBucket: "al3gd-eef28.appspot.com",
  messagingSenderId: "452554611733",
  appId: "1:452554611733:web:b9adfb73ff1d1759e3c21c"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage();
const db = getFirestore();
export  {app , storage , db };
