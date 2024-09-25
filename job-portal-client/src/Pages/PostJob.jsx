import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Creatable from 'react-select/creatable';
import Swal from 'sweetalert2'

const PostJob = () => {
  const [selectedOption , setSelectedOption] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.skills = selectedOption;  
    //console.log(data)
    fetch("http://localhost:5000/post-job" ,
      {method:"POST",
      headers:{"content-Type": "application/json"},
      body: JSON.stringify(data)})
      .then(res => res.json())
      .then((result) => {
         console.log(result);
         if(result.acknowledged === true){
          Swal.fire("Job Posted Successfully");
         }
         reset();
         setSelectedOption([]);
         
     })
 }

  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'C++', label: 'C++' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'ReactJs', label: 'ReactJs' },
    { value: 'NodeJs', label: 'NodeJs' },
    { value: 'Redux', label: 'Redux' },
    { value: 'Python', label: 'Python' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'MsExcel', label: 'MsExcel' },
    { value: 'Teaching', label: 'Teaching' },
    { value: 'Python', label: 'Python' },
    { value: 'Accounting', label: 'Accounting' },
    { value: 'Designing', label: 'Desgining' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Video Shooting', label: 'Video Shooting' },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mb-32">

      {/* forms */}
      <div className="bg-gray-50 py-10 px-4 lg:px-16">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/*First Row*/}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Job title</label>
              <input type="text" placeholder="Ex:Web Developer" {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input type="text" placeholder="Ex: Microsoft" {...register("companyName")}
                className="create-job-input" />
            </div>
          </div>

          {/*Second Row*/}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Minimum Salary</label>
              <input type="text" placeholder="200(will be taken in k i.e 200000)" {...register("minPrice")}
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Maximum Salary</label>
              <input type="text" placeholder="1200(will be taken in k i.e 1200000)" {...register("maxPrice")}
                className="create-job-input" />
            </div>
          </div>

          {/*Third Row*/}
          <div className="create-job-flex">

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Job Location</label>
              <input type="text" placeholder="Ex:Delhi" {...register("jobLocation")}
                className="create-job-input" />
            </div>

          </div>

          {/*Fourth Row*/}
          <div className="create-job-flex">

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Job Posting Date</label>
              <input type="date" placeholder="28/08/2024" {...register("postingDate")}
                className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Experience level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose your experience</option>
                <option value="Any Experience">Any experience</option>
                <option value="Intership">Intership</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>

          </div>

          {/*Fifth row*/}
          <div>
          <label className="block mb-2 text-lg text-gray-700">Required Skill Sets:</label>
          <Creatable className="create-job-input py-4"
           value={selectedOption} 
           onChange={setSelectedOption} 
           options={options} 
           isMulti/> 
          </div>

            {/*Sixth Row*/}
          <div className="create-job-flex">

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Company Type</label>
              <select {...register("companyLogo")} className="create-job-input">
                <option value="">Choose your company type</option>
                <option value="/images/IT.jpg">IT Industry</option>
                <option value="/images/management.png">Management Stack</option>
                <option value="/images/sales.png">Sales</option>
                <option value="/images/education.jpg">School Education</option>
                <option value="/images/accounting.jpg">Accountant</option>
                <option value="/images/education.jpg">Higher Education</option>
                <option value="/images/healthcare.png">HealthCare</option>
                <option value="/images/finance.png">Finance</option>
                <option value="/images/construction.jpg">Constructuion</option>
                <option value="/images/graphic.jpg">Graphic Designer</option>
                <option value="/images/digital.jpg">Digital Marketing</option>
                <option value="/images/filmmaker.png">Film Industry</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg text-gray-700">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="">Choose your employment type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

          </div>

          {/*Seventh Row*/}
          <div className="w-full">
          <label className="block mb-2 text-lg text-gray-700">Job Description</label>
          <textarea {...register("description")}
           className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400 sm:text-sm"
           rows={6} 
           placeholder="Enter your Job Description here" />
          </div>


          {/*Last Row*/}
          <div className="w-full">
          <label className="block mb-2 text-lg text-gray-700">Job Posted By</label>
          <input type="email" placeholder="Your Email" {...register("postedBy")}
          className="create-job-input" />
          </div>


          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-lg cursor-pointer" />
        </form>
      </div>


    </div>
  )
}

export default PostJob