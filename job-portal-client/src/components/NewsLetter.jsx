import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <div >
        <div>
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText/>
            Email us for jobs</h3>
            <p className="text-gray-700 text-base mb-4">For inquiries about job postings,<br/>account issues,or general support,<br/>
            reach out to us via email.<br/>We're here to help you find your next opportunity!</p>

            <div className="w-full space-y-4">
                <input type="email" name="email" id="email" placeholder="name@gmail.com" className="w-full block py-2 pl-3 border rounded-lg focus-outline:none text-base text-gray-700" />
                <input type="submit" value={"Subscribe"} className="w-full block py-2 pl-3 border bg-blue rounded-lg text-white cursor-pointer font-medium text-base"/>
            </div>
            </div>

            <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FaRocket/>
            Get Noticed faster</h3>
            <p className="text-gray-700 text-base mb-4">Boost your Visibility , Highlight your skills , showcase your experience in resume , and attract your dream job!</p>

            <div className="w-full space-y-4">
                <input type="submit" value={"Upload Resume"} className="w-full block py-2 pl-3 border bg-blue rounded-lg text-white cursor-pointer font-medium text-base"/>
            </div>
            </div>

            <div className="mt-10">
           <img src="../../images/ads1.jpg" alt=""/>
            </div>

            <div className="mt-10">
           <img src="../../images/ads2.jpg" alt="" />
            </div>
    </div>
  )
}

export default NewsLetter