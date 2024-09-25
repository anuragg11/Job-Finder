import React from 'react'

const ServicesInfo = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-6">
        <h2 className="md:text-4xl  text-3xl font-[1000] text-center text-blue">With Our Architecture-First Approach we build a 
            <br/>strong foundation for talent and businesses on our digital platform</h2>

            <div className="md:grid grid-cols-4 gap-6 lg:px-12 px-4 py-12 ">

                 <div className="border rounded-lg px-2 py-2 mb-6 bg-gray-50 text-base text-gray-700 flex flex-col items-center">
                    <p>Our platform offers <span className="font-extrabold text-blue">personalized job recommendations </span> , advanced search filters , 
                     and a user friendly interface to help talent discover opportunities
                      that matches their skills and career aspirations.</p>
                    <img src="../../images/talent2.png" alt="image" width="200px" className="mx-8 mt-8 rounded-full"/>
                 </div>
                 <div className="border rounded-lg px-2 py-2 mb-6 bg-gray-50 text-base text-gray-700  flex flex-col items-center">
                    <p>For businesses,with our customizable job postings and  <span className="font-extrabold text-blue">company branding options</span> to smart candidate matching 
                  and analytics,we ensure that businesses find the right fit efficiently.</p>
                    <img src="../../images/solution.png" alt="image" width="200px" className="mx-8 mt-8 rounded-full"/>
                 </div>
                 <div className="border rounded-lg px-2 py-2 mb-6 bg-gray-50 text-base text-gray-700  flex flex-col items-center">
                    <p>Our portal <span className="font-extrabold text-blue">integrates data analytics </span>  to offer actionable insights for both talent and businesses.<br/>It helps in optimizing hiring strategies.</p>
                    <img src="../../images/secure2.png" alt="image" width="200px" className="mx-8 mt-8 rounded-full"/>
                 </div>
                 <div className="border rounded-lg px-2 py-2 mb-6 bg-gray-50 text-base text-gray-700  flex flex-col items-center">
                    <p>We ensure that sure data is protected with <span className="font-extrabold text-blue">advanced security protocols</span> while maintianing high
                      performance even during peak usage times.</p>
                    <img src="../../images/secure.png" alt="image" width="200px" className="mx-8 mt-10 rounded-full"/>
                 </div>
            </div>

            <hr className="my-6"/>

            <h2 className="md:text-4xl  text-3xl font-[700] text-center text-blue mb-6">Trusted by Leading Companies</h2>
            <div className="flex md:flex-row flex-col items-center md:justify-around justify-center">
              <img src="../../images/atlassian.png" alt="" width="200" />
              <img src="../../images/google.png" alt="" width="150" />
              <img src="../../images/jio.jpg" alt="" width="130" />
              <img src="../../images/Uber.jpg" alt="" width="110" />
              <img src="../../images/dsl.jpg" alt="" width="110" />
            </div>

            <hr className="my-6"/>
    </div>
  )
}

export default ServicesInfo