import Banner from "../components/Banner"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "../Pages/Jobs";
import SideBar from "../SideBar/SideBar";
import NewsLetter from "../components/NewsLetter";
import About from "../components/About";
import ServicesInfo from "../components/ServicesInfo";
import ReviewSection from "../components/ReviewSection";


const Home = () => {
  const [selectedCategory , setSelectedCategory] = useState(null);
  const [jobs , setJobs] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [currentPage , setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [query, setQuery] = useState("");

  useEffect(()=>{
      setIsLoading(true);
      fetch('https://job-finder-backend-etod.onrender.com/all-jobs').then(res => res.json().then(data => {
      // fetch('jobs.json').then(res => res.json().then(data => {
       // console.log(data);
       setJobs(data);
       setIsLoading(false);
      }))
  },[]);

  
    const handleInputChange = (event) => {
        setQuery(event.target.value);
        //console.log(query)
        setCurrentPage(1);
    }

    //filter jobs by title
    const filteredItems = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    //console.log(filteredItems);


  //----------------------------------Radio Filters------------------------------------------------------------//
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to page 1 on category change
  }

  //----------------------------------Button Filters-----------------------------------------------------------//
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to page 1 on button click
  }

  //---------------------------------Calculate the index range-----------------------------------------------//
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex,endIndex};
  }

  //----------------------------------Function for next page--------------------------------------------------//
  const nextPage = () => {
       if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
        setCurrentPage(currentPage+1);
       }
  }

  //----------------------------------Function for next page--------------------------------------------------//
  const prevPage = () => {
    if(currentPage > 1){
     setCurrentPage(currentPage-1);
    }
}

  //-------------------------------------Main Function--------------------------------------------------------//
  const filteredData = (jobs , selected , query) =>{
    let filteredJobs = jobs;

    //filtering input items
    if(query){
        filteredJobs = filteredItems;
    }

    //category filtering
    if(selected){
   
      filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,salaryType,experienceLevel,
        employmentType}) =>

         experienceLevel.toLowerCase() === selected.toLowerCase() ||
         employmentType.toLowerCase() === selected.toLowerCase() ||
         jobLocation.toLowerCase() === selected.toLowerCase() || 
         parseInt(maxPrice) <= parseInt(selected) ||
         salaryType.toLowerCase() === selected.toLowerCase() 
        );
        //console.log(filteredJobs);
    }

   

     //slice data based on current page
     const {startIndex,endIndex} = calculatePageRange();
     filteredJobs = filteredJobs.slice(startIndex,endIndex)
     return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const totalPages = () => {
    return Math.ceil(filteredItems.length / itemsPerPage);
  };

    const result = filteredData(jobs,selectedCategory,query);
    //console.log(result);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/* Main Content */}
      <div className="bg-gray-50 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

        {/* left side */}
        <div className="bg-white p-4 rounded">
          <SideBar handleChange={handleChange} handleClick={handleClick}/>
          </div>

        {/* mid section */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {
            isLoading ? <p className="font-normal">Loading...</p>
            :
            result.length > 0 ? <Jobs result = {result} />
            :
            <>
            <h3 className="text-lg font-semibold mb-2">{result.length} Jobs</h3>
            <p>No data found</p>
            </>
          }

          {/* pagination feature */}
          {
            result.length > 0 ? 
            (
              <div className="flex justify-center mt-4 space-x-8">
                <button onClick={prevPage} className="hover:underline" disabled={currentPage === 1}>Previous</button>
                <span className="mx-2">Page {currentPage} of {totalPages()}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages()}  className="hover:underline">
                Next
                </button>
              </div>
            )
            :
            ""
          }

          </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <NewsLetter/>
        </div>
      </div>

        {/* About Us */}
        <div>
          <About/>
        </div>

        {/* Services */}
        <div>
          <ServicesInfo/>
        </div>

        {/* Review Section */}
        <div>
          <ReviewSection/>
        </div>
    </div>
  )
}

export default Home
