import React from 'react'
import { Link } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
import {FiCalendar, FiClock,FiMapPin} from "react-icons/fi";

const Card = ({data}) => {
  //console.log(data)
  const {_id,companyName,companyLogo,minPrice,maxPrice,jobLocation,employmentType,postingDate,description,jobTitle} = data;
 // const image = URL.revokeObjectURL(companyLogo);
  return (
    <section className="card">
      <Link to={`/job/${_id}`} className="flex gap-4  flex-col sm:flex-row items-start">
      <img src={companyLogo} alt="company logo" height="80" width="80"/>
      <div>
        <h4 className="text-primary mb-1">{companyName}</h4>
        <h3 className="text-lg font-medium mb-2">{jobTitle}</h3>

        <div className="text-gray-700 text-base flex flex-wrap gap-3 mb-2">
            <span className="flex items-center gap-1"><FiMapPin/>{jobLocation}</span>
            <span className="flex items-center gap-1"><FiClock/>{employmentType}</span>
            <span className="flex items-center gap-1"><MdCurrencyRupee />{minPrice}k-{maxPrice}k</span>
            <span className="flex items-center gap-1"><FiCalendar/>{postingDate}</span>
        </div>

        <p className="text-base text-gray-700">{description}</p>

      </div>
      </Link>
    </section>
  )
}

export default Card