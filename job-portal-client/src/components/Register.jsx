import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth , db} from "../Firebase/firebase.config";
import { setDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); //function from firebase auth
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      Swal.fire("Registered Successfully");
      window.location='/login'; // Redirect to login page after successful registration
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    
    <div className="max-w-screen-2xl container mx:auto xl:px-24 px-6">
       <div className="flex items-center justify-center p-6">
       <div className="md:w-1/2 p-6">
  
    <form onSubmit={handleRegister}>
      <h3 className="text-3xl text-center font-semibold my-8 text-blue">Sign Up</h3>

      <div className="flex flex-col border rounded-lg shadow-lg px-8 py-6 my-12">
      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">First name</label>
        <input
          type="text"
           className="border rounded-lg px-2 py-2"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">Last name</label>
        <input
          type="text"
           className="border rounded-lg px-2 py-2"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">Email address</label>
        <input
          type="email"
          className="border rounded-lg px-2 py-2"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">Password</label>
        <input
          type="current-password"
           className="border rounded-lg px-2 py-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
      <button type="submit" className="py-2 px-5 border rounded bg-blue text-white">
          Sign Up
        </button>
      </div>
      <p className="text-left text-sm mt-2">
        If Already registered <Link to="/login" className="text-blue">Login!</Link>
      </p>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
}
export default Register;

