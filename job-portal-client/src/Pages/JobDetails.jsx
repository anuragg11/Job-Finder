import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader'
import { RiHandbagLine } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";


const JobDetails = () => {
  const {id} = useParams();
  const [job,setJob] = useState([]);
  useEffect(()=>{
   fetch(`http://localhost:5000/all-jobs/${id}`)
   .then(res => res.json())
   .then(data => setJob(data))
  },[]);
  //console.log(id);

  const handleApply = async() => {
    Swal.fire("Applications Closed try again later!");
  }


  return (
    <div  className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job Details"} path={"Job"}/>
      <h2 className="my-4 text-lg font-medium text-gray-800">{job.jobTitle} - {job.companyName}</h2>
      <h1 className="font-semibold text-blue text-lg">Job Details</h1>
      <p className="text-gray-400 text-sm italic font-medium">Here's how the job details align with your job preferences.<br/>Check the details and apply!</p>
      <p className="my-4 font-semibold flex items-center text-gray-800"><RiHandbagLine className="mr-2"/>Job Type</p>
      <button className="bg-gray-100 px-4 py-2 text-gray-700 rounded-lg mb-4" >{job.employmentType}</button>

      <div className="md:grid grid-cols-5 gap-8 lg:px-12 px-4 py-12">

      <div className="border-2 rounded-md px-4 py-4 bg-gray-50 mb-8">
        <h2 className="font-semibold mb-2 text-gray-800">Benefits</h2>
        <p className="text-gray-400 text-sm font-normal mb-2">Company listed benefits</p>
        <ul className="flex flex-col gap-2 text-gray-700 text-base">
          <li>1.Relocation allowance</li>
          <li>2.Gym memberships</li>
          <li>3.Mental health</li>
          <li>4.Sick leave</li>
          <li>5.Training assistance</li>
          <li>6.Working days:Mon-Tue</li>
          <li>7.Flexible schedules</li>
          <li>8.Wfh costs</li>
        </ul>
      </div>

      <div className="col-span-2 border-2 rounded-md px-4 py-4 bg-gray-50 mb-8">
      <h2 className="font-semibold mb-2 text-gray-800">Company Outline:</h2>  
      <p className="leading-relaxed text-gray-700 text-base">At {job.companyName}, we believe that technology allows people to achieve their goals.
         We're committed to our local community, and we feel that dedicating our work to real, 
         local people is a service we can give back to the town we love. What sets us apart is our passion for
          service and our dedication to providing exceptional,
         customer-centric restoration solutions that keep people's lives running smoothly.
         <br/>
         <br/>
         Opening our storefront will allow us to hire more qualified technological professionals 
         so we can expand our services, increase the number of customers we can serve and extend into specialties,
         like technological installations for local businesses.
         </p>
      </div>

      <div className="col-span-2 border-2 rounded-md px-4 py-4 bg-gray-50 mb-8">
      <h2 className="font-semibold mb-2 text-gray-800">Future Growth:</h2>  
      <p className="leading-relaxed text-gray-700 text-base">As the name {job.companyName} suggests, we are not afraid to push the boundaries of what’s possible. 
        Our team is continually exploring and embracing new technologies, methodologies, and 
        ideas that help us deliver exceptional software solutions.
         We foster a culture of creative problem solving, encouraging our employees to think outside 
         the box and embrace failure as an opportunity to learn and grow. This unyielding commitment to innovation
          enables us to stay ahead of the curve and provide cutting-edge solutions to our clients.
         </p>
      </div>
      </div>

      <p className="text-lg leading-relaxed lg:px-12 px-4 py-12 text-gray-500 text-base">We at {job.companyName} believe in breaking norms and doing whatever is needed to build things
         that get us excited!While traditional software companies focus just on technologies, 
         we know that creating outstanding digital platforms requires a much more comprehensive approach. 
         That’s where our horizontal COEs & vertical COEs give us a distinguished advantage.</p>

      <hr className="mb-8"/>
      <h2 className="font-semibold text-blue text-3xl text-center mb-8">Salary Stack</h2>
      <div className="lg:flex items-center justify-around mb-2">
        <h2 className="font-medium text-xl mb-2 text-center text-gray-700">Salary Type: {job.salaryType}</h2>
        <h2 className="font-medium mb-2 text-xl text-center text-gray-700">Minimum Price: ₹{job.minPrice}</h2>
        <h2 className="font-medium mb-2 text-xl text-center text-gray-700">Maximum Type: ₹{job.maxPrice}</h2>
      </div>
      <hr className="my-8"/>

      
      <div>
      <p className="my-4 font-semibold flex items-center text-gray-800"><GrUserExpert className="mr-2"/>Experience</p>
      <button className="bg-gray-100 px-4 py-2 text-gray-700  rounded-lg mb-4">{job.experienceLevel}</button>
      </div>
      <div>
      <p className="my-4 font-semibold flex items-center text-gray-800"><GrLocation className="mr-2"/>Job Location</p>
      <button className="bg-gray-100 px-4 py-2 text-gray-700  rounded-lg mb-4">{job.jobLocation}</button>
      </div>
      <hr className="mb-8"/>

      <p className="text-gray-500 text-sm font-medium mb-2 ">To apply for the job click on the button below and fill out the form.<br/>Ensure details provided by you are correct and valid.</p>
      <button className="bg-blue px-6 py-2 text-white rounded-lg mb-4" onClick={handleApply}>Apply Now</button>
      
    </div>
  )
}

export default JobDetails