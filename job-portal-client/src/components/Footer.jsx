import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 lg:px-24 px-4 py-12 ">
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center mb-6">
                  <img src="../../images/logo.png" className="h-8 me-3" alt="Company Logo" />
                  <span className="self-center text-xl text-blue font-semibold whitespace-nowrap">CareerHub World</span>
              </a>

              <h2 className="mb-1 text-lg font-medium text-gray-700">Follow us on:</h2> 

              <div className="flex mt-4 justify-start sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                  <FaFacebookF className="text-xl"/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white ms-5">
                 <FiInstagram className="text-xl"/>
                  <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white ms-5">
                 <IoLogoTwitter className="text-xl"/>
                  <span className="sr-only">Twitter page</span>
              </a>
            
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white ms-5">
               <FaLinkedin className="text-xl"/>
            <span className="sr-only">LinkDin account</span>
              </a>  
          </div>
          <h2 className="mb-1 text-lg font-medium text-gray-700 mt-4">Contact Us:</h2> 
          <h2 className="text-base font-medium text-gray-500  hover:text-gray-700 cursor">Jaipur,Rajasthan </h2>
          <div className="flex">
          <MdLocalPhone className="text-gray-500 hover:text-gray-900 text-xl"/>
          <h2 className="text-base font-medium text-gray-500  hover:text-gray-700 cursor">+91 234 598 6776</h2>
          </div>
          </div>


          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline">About</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Blog</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Careers</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">Help Center</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Notices</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Grievances</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Report issue</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Licensing</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">CareerHub World™</a>. All Rights Reserved.
          </span>
      </div>

        </div>

    </footer>
  )
}

export default Footer
