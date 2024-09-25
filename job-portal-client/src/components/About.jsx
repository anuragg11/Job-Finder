import React from 'react'
import TeamCard from './ReadMore';
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div  className="max-w-screen-2xl container mx:auto xl:px-24 px-6 md:py-24 py-14">

    
    <div className="md:flex justify-between items-center">
        <div>
            <h2 className="text-blue md:text-6xl text-4xl font-[1000] mb-4 md:text-left">Growth Plan for the<br/>Future: Prepare,<br/> Connect and <br/>Succeed.</h2>
            <p className="text-gray-700 md:text-xl font-normal mb-4 text-left">Driven by a passion for growth,we help professionals <br/>and companies alike find their perfect match,<br/>
                creating a pathways to success and innovation.
            </p>
            <div className="flex gap-1 items-center mt-8">
            <img src="/images/logo.png" alt="logo" height="25" width="25" />
            <h2 className="font-semibold text-blue">CareerHub World Staff</h2>
            </div>
            <p className="ml-7 mb-8 text-gray-700">September , 2024 </p>

        </div>
        <div>
            <img src="../../images/officegroup.jpg" alt="Image"/>
        </div>
    </div>
   
    <hr className="my-8" />

    <div className="mt-28">
        <h2 className="font-medium text-lg text-center">Explore related content by topic</h2>
        <div className="flex items-center justify-center gap-2 mt-8">
         <button className="border-2 hover:bg-slate-100 rounded-full px-6 py-2 text-gray-700 text-sm">Job Seeker</button>
         <button className="border-2 hover:bg-slate-100 rounded-full px-6 py-2 text-gray-700 text-sm">Business</button>
        </div>
    </div>

    <div className="md:grid grid-cols-4 gap-8 my-8 mx-8">
      <div className="col-start-2 col-span-2 my-8 bg-white py-8 px-8 rounded-lg shadow-xl relative">  
      <img src="../../images/cloud.png" alt="cloud image" height="500" width="500" className="absolute -left-36 -top-24 -z-10"  />
      <img src="../../images/bird.png" alt="bird image" height="30" width="30" className="absolute md:-left-12 -left-8 -top-4"  />
     
            <div className="flex items-center gap-3 mb-6">
            <img src="../../images/logo.png" alt="logo" height="25" width="25" />
            <h2 className="font-semibold text-lg text-blue">CareerHub World Staff</h2>
            </div>
            <TeamCard 
        description={"Our experienced staff is the backbone of CareerWorld Hub.We are dedicated to understand the unique needs of job seekers and employers, ensuring that every connection we make leads to mutual growth and success.Our content explores the mindset shifts, organisational hurdles, and people behind business evolution. We also cover the tactics, ethics, products, and thought leadership that make growth a meaningful and positive experience."
        }
        limit={250}/>
        <div className="flex items-center gap-3 my-2">
            <h2 className="font-medium text-lg">More by CareerHub</h2>
            <FaArrowRight/>
            </div>
        </div> 
    </div>
   
   
    <div className={` my-28 md:mx-16 mx-4 flex items-center justify-center flex-col bg-center bg-cover bg-clip-padding bg-no-repeat px-8 py-8 rounded-lg `} 
    style={{backgroundImage: "url(../../images/officebg.jpg)"}}>
      <h2 className="text-4xl text-white font-extrabold text-center my-8 leading-relaxed bg-blue/30 rounded-lg px-2 py-2">Get our Premium <br/>features for the latest updates<br/> of the Market insights.</h2>
      <button className="text-white bg-blue px-6 py-2 rounded-lg mt-6">Sign Up Now</button>
    </div>

    <hr className="my-8"/>

    </div>
  )
}

export default About