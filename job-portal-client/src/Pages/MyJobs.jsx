import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {auth , db} from "../Firebase/firebase.config";
import { getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2'

const MyJobs = () => {

    const [mail,setMail] = useState(null); 
    const [ jobs ,setJobs] = useState([]);
    const [searchText , setSearchText] = useState("");
    const [isLoading , setIsLoading] = useState(true);
    const [originalJobs, setOriginalJobs] = useState([]);
 

    //set current page
    const [currpage , setCurrPage] = useState(1);
    const itemsPerPage = 4;


    const fetchUserData = async () => {
      return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(async (user) => {
              if (user) {
                  try {
                      const docRef = doc(db, 'Users', user.uid);
                      const docSnap = await getDoc(docRef);
                      if (docSnap.exists()) {
                          const userEmail = docSnap.data().email;
                          setMail(userEmail);
                          resolve(userEmail);
                      }
                      else {
                          //console.log('User data not found');
                          reject('User data not found');
                      }
                  }
                  catch (error) {
                     // console.error('Error fetching user data:', error);
                      reject(error);
                  }
              }
               else {
                 // console.log('No user is signed in');
                  reject('No user is signed in');
              }
          });
  
          // Cleanup function to unsubscribe from auth state changes
          return () => unsubscribe();
      });
  };
  
    
    

  useEffect(() => {
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const userEmail = await fetchUserData();
            if (userEmail) {
                const response = await fetch(`https://job-finder-backend-etod.onrender.com/myJobs/${userEmail}`);
                if (response.ok) {
                    const data = await response.json();
                    setJobs(data);
                    setOriginalJobs(data);

                } else {
                    console.error('Error fetching jobs:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
}, [mail]); // Depend on mail to refetch when it changes


useEffect(() => {
  if (searchText === '') {
      setJobs(originalJobs);
  } else {
      const filtered = jobs.filter(job =>
          job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
      );
      setJobs(filtered);
  }
  setCurrPage(1); // Reset to the first page when searching or clearing
}, [searchText, originalJobs]);

    //pagination
    const indexOfLastItem = currpage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem,indexOfLastItem);

    //next and prev button
    const nextPage = () =>{
      if(indexOfLastItem < jobs.length){
          setCurrPage(currpage+1);
      }
    }

    const prevPage = () =>{
      if(currpage > 1){
        setCurrPage(currpage-1);
      }
    }

    const handleSearch = () => {
      const filter = jobs.filter(job => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
     // console.log(filter);
      setJobs(filter);
      setIsLoading(false);
    }

    const showItemsAfterDelete = async () => {
        try {
          setIsLoading(true);
          const userEmail = await fetchUserData();
          if (userEmail) {
              const response = await fetch(`https://job-finder-backend-etod.onrender.com/myJobs/${userEmail}`);
              if (response.ok) {
                  const data = await response.json();
                  setJobs(data);
                  setOriginalJobs(data);

              } else {
                  console.error('Error fetching jobs:', response.statusText);
              }
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
          setIsLoading(false);
      }
    }

    const handleDelete = (id) => {
      //console.log(id);
        fetch(`https://job-finder-backend-etod.onrender.com/job/${id}` ,{
          method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged === true){
            Swal.fire("Job Deleted Successfully");
          }
          showItemsAfterDelete();
        })
    }
  
  return (
    <div className="max-w-screen-2xl container mx:aut0 xl:px-24 px-4">

      <div className="my-jobs-container">
        <h1 className="text-center p-4 mt-2 text-gray-700">All the jobs posted by you</h1>
        <div className="search-box p-2 text-center mb-2">
          <input type="text" name="search" id="search" 
          className="py-2 pl-3 border focus:outline-none lg:w-1/2 mb-4 w-full rounded-lg bg-gray-50"
          onChange={(e) => setSearchText(e.target.value)}/>
         
          <button className="bg-blue text-white font-semibold px-8 py-2 rounded-lg ml-2" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/*Table*/}

      { isLoading? 
       <div><p className="flex items-center justify-center h-20 text-base">Loading...</p></div>
       :
       <>
      <section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-gray-700">All Posted Job</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
         <Link to="/post-job"><button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a Job</button>
         </Link> 
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          NO.
                        </th>
          <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          JOB TITLE
                        </th>
           <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          COMPANY NAME
                        </th>
          <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          SALARY
                        </th>
          <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         EDIT
                        </th>
          <th className="px-6 bg-blueGray-50 text-gray-700 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         DELETE
                        </th>
          </tr>
        </thead>

        <tbody>
          {
            currentJobs.map((job,index)=>(
              <tr key={index}>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-700 ">
                {index+1}
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700">
                {job.jobTitle}
              </td>
              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700">
              {job.companyName}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-700">
                ${job.minPrice}-{job.maxPrice}
              </td>
              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <Link to={`/edit-job/${job?._id}`}><button className="bg-gray-500 py-2 px-4 text-white rounded-sm">Edit</button></Link>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <button onClick={() => handleDelete(job._id)} className="bg-red-500 py-2 px-6 text-white rounded-sm">Delete</button>
              </td>
            </tr>
            ))   
          }
        </tbody> 
      </table>
    </div>
  </div>
</div>

{/* pagination */}
<div className="flex justify-center text-black space-x-8 mb-8"> 
     {
       currpage > 1 && (<button className="hover:underline" onClick={prevPage}>Previous</button>)
     }
     {
      indexOfLastItem < jobs.length && (<button className="hover:underline" onClick={nextPage}>Next</button>)
     }
 </div>

<footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-700 font-semibold py-1">
        "Connect with qualified candidates - hire from here smarter,faster!"</div>
      </div>
    </div>
  </div>
</footer>
 </section>
 </>}
    </div>
  )
}


export default MyJobs
