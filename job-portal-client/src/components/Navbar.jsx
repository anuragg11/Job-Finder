import React, { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark } from "react-icons/fa6";
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const fetchUserData = async () => {
      
        auth.onAuthStateChanged(async (user) => {
        //  console.log(user);
          if(user){
             setIsLoggedIn(true);
          }
          else{
            setIsLoggedIn(false);
          }
        });
      };
  
      useEffect(()=>{
        fetchUserData()
      },[]);
    

    async function handleLogout() {
        try {
          await auth.signOut();
          console.log("User logged out successfully!");
          Swal.fire("Logging Out");
          navigate("/login"); // Redirect to login
        } 
        
        catch (error) {
          console.error("Error logging out:", error.message);
          Swal.fire("Error Logging out");
        }
      }

    const navItems = [
        { path: "/", title: "Home" },
        { path: "/my-job", title: "Jobs" },
        { path: "salary", title: "Salary Estimate" },
        { path: "/post-job", title: "Post Job" },
    ]
    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-6">
          
            <nav className="flex justify-between items-center py-6">
                <a href="/" className="flex items-center gap-2 text-2xl text-black font-semibold text-blue"> <img src="../../images/logo.png" width="30px" height="30px" /> CareerHub World</a>

                {/* nav items for large device */}
                <ul className="hidden md:flex gap-12">
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className="text-base font-medium text-primary">
                                <NavLink to={path} className={({ isActive}) =>
                                 isActive? "active" : ""}>
                                {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* Signup and login Button */}
                <div className="text-base text-primary font-medium space-x-5 hidden lg:block">

                 
                 {isLoggedIn ? 
                 <button className="py-2 px-5 border rounded bg-blue text-white" onClick={handleLogout}>Logout</button>
                 : 
                 <>
                <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
                <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">SignUp</Link>
                </> 
                }
                   </div>

                {/* mobile type menu */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggle}>
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/>:<FaBars className="w-5 h-5 text-primary"/>
                        }
                    
                    </button>
                </div>
            </nav>

            {/* nav items for mobile */}
            <div className={`px-4 bg-gray-200 py-5 rounded-lg ${isMenuOpen ? "":"hidden"}`}>
            <ul>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className="text-base text-gray-700 first:text-gray-700 py-1">
                                <NavLink to={path} className={({ isActive}) =>
                                 isActive? "active" : ""}>
                                {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <div className="mt-2">
                      {isLoggedIn ? 
                 <button className="py-2 px-5 border rounded bg-blue text-white" onClick={handleLogout}>Logout</button>
                 : 
                 <>
                <Link to="/login" className="py-2 px-5 border rounded mr-4 text-white bg-blue">Login</Link>
                <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">SignUp</Link>
                </> 
                }
                </div>
                </ul>
            </div>
        </header>
    )
}

export default Navbar