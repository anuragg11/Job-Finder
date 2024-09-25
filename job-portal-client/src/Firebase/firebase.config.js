// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdlyXUBiQ_VXgZoKY6ksdkZyntILBB3Q",
  authDomain: "job-portal-login-auth.firebaseapp.com",
  projectId: "job-portal-login-auth",
  storageBucket: "job-portal-login-auth.appspot.com",
  messagingSenderId: "540289140831",
  appId: "1:540289140831:web:a53aeec1d34b04a4c833ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;