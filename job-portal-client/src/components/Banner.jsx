import React from 'react'
import {FiSearch} from 'react-icons/fi'


const Banner = ({query,handleInputChange}) => {
    
  return (
    <div className="max-w-screen-2xl container mx:auto xl:px-24 px-6 md:py-20 py-14">
    <h1 className="text-5xl font-bold text-black/80 mb-3">Build Your <span className="text-blue">Career</span> with us!</h1> 
    <p className="text-lg font-18 text-gray-600 mb-8">Unlock your potential with<span className="text-blue"> CareerHub World </span>,Your Dream Job is waiting for you!</p>
    
    <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
            <div className="flex rounded-lg shadow-md md:w-1/2 w-full">

                <input type="text" name="title" id="title" placeholder="Search a Job" 
                className="block flex-1 border-2 rounded-lg bg-tranparent py-1.5 pl-8 text-gray-600 placeholder:text-gray-400
                sm:text-sm sm:leading-6" 
                onChange={handleInputChange}
                value={query}
             />
                <FiSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
            </div>

           

            <button type="submit" className="bg-blue text-white text-base font-medium py-1 px-8 rounded-lg shadow-md ml-2">Search</button>

        </div>
    </form>
    <hr className="my-6"/>
    <div className="flex flex-col items-center text-center mt-6">
    <p className="text-2xl font-[700] text-blue py-1 mb-4">Innovative Matching -
         Our Smart Algorithms Connect <br/> You with Roles That Align with Your Long-Term Career Ambitions.</p>
    <div className="md:flex gap-10 items-center">
    <img src="../../images/homebg1.png" alt="image" height="100" width="300" className="rounded-full" />
    <img src="../../images/homebg.png" alt="image" height="100" width="300" className="rounded-full" />
    <img src="../../images/homebg3.png" alt="image" height="100" width="300" className="rounded-full" />
    </div>
               
    </div>
    </div>
)
}

export default Banner