import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {auth } from "../Firebase/firebase.config";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


// import SignInwithGoogle from "./signInWIthGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      Swal.fire("Logged in Successfully");
      window.location = "/";
    }
     catch (error) {
      console.log(error.message);
      Swal.fire("Invalid PassWord Or Mail");
  };
}

  return (
    <div className="max-w-screen-2xl container mx:auto xl:px-24 px-6">

    <div className="flex items-center justify-center p-6">
      <div className="md:w-1/2 p-6">
    <form onSubmit={handleSubmit}>
      
      <h3 className="text-3xl text-center font-semibold my-8 text-blue">Login</h3>

      <div className="flex flex-col border rounded-lg shadow-lg px-8 py-6 my-12">
      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">Email address:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg px-2 py-2"
        />
      </div>

      <div className="mb-3 flex flex-col">
        <label className="text-lg font-medium text-gray-800">Password:</label>
        <input
          type="current-password"
            className="border rounded-lg px-2 py-2"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="py-2 px-5 border rounded bg-blue text-white">
          Submit
        </button>
      </div>
      <p className="text-left text-sm mt-2">
        New user <Link to="/sign-up" className="text-blue">Register Here!</Link>
      </p>
      </div>
      
    </form>
    </div>
    </div>
    </div>
  );
}


export default Login;