import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

const SalaryEstimated = () => {
    const [searchText , setSearchText] = useState("");
    const [salary , setSalary] = useState([]); 
    // console.log(searchText)

    useEffect(() => {
        fetch("salary.json").then(res => res.json()).then( (data) => setSalary(data))
    },[searchText])

    const handleSearch = () => {
        const filter = salary.filter(job => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        //console.log(filter);
        setSalary(filter);
      }

  return (
    <div className="max-w-screen-2xl container mx:aut0 xl:px-24 px-4">
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>

        <div className="mt-5">
            <div className="search-box p-2 text-center mb-2">
                <input type="text" name="search" id="search" 
                className="py-2 pl-3 border focus:outline-none lg:w-1/2 mb-4 w-full rounded-lg bg-gray-50" 
                onChange={(e) => setSearchText(e.target.value)}/>
                <button className=" ml-2 bg-blue text-white font-semibold px-8 py-2 rounded-lg"
                onClick={handleSearch}>Search</button>
            </div>

        </div>

        {/*Salary Display Card*/}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 place-items-center">
            {
                salary.map((data) => (
                 <div key={data.id} className="shadow-md border rounded-md px-8 py-8">
                     <h4 className="font-medium text-xl text-gray-700">{data.title}</h4>
                     <p className="my-2 font-normal text-blue text-lg">{data.salary}</p>
                     <div className="flex flex-wrap gap-4">
                        <a href="/" className="underline cursor text-gray-600">{data.status}</a>
                        <a href="/" className="underline cursor text-gray-600">{data.skills}</a>
                     </div>
                 </div>
                ))
            }
        </div>
    </div>
  )
}

export default SalaryEstimated