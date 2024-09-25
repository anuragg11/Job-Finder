import React from 'react'
import Location from './Location'
import Salary from './Salary'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

const SideBar = ({handleChange,handleClick}) => {
  return (
    <div className="space-y-5">
        <h3 className="text-lg font-semibold mb-2">Filters</h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
        <hr className="my-2"/>
        <div className="flex items-center justify-center">
        <img src="../../images/ads3.jpg" alt="ads"  width="300"/>
        </div>

    </div>
  )
}

export default SideBar