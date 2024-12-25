// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import Footer from "./shared/Footer";
// import { Button } from "./ui/button";
// import { Search } from "lucide-react";

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allJobs);

//   // serach implementing start
//   const [search, setSearch] = useState("");
//   // serach implementing end

//   useEffect(() => {
//     if (searchedQuery) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div>
//       <Navbar />

//       {/* implementing job search filter */}
//       <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto mt-8">
//         <input
//           type="text"
//           placeholder="Search for jobs"
//           onChange={(e) => setSearch(e.target.value)}
//           className="outline-none border-none w-full bg-transparent"
//         />
//         <Button
//           // onClick={searchJobHandler}
//           className="rounded-r-full bg-[#F83002] hover:bg-[#6A38C2]"
//         >
//           <Search className="h-5 w-5" />
//         </Button>
//       </div>

//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex gap-5">
//           <div className="w-20%">
//             <FilterCard />
//           </div>
//           {filterJobs.length <= 0 ? (
//             <span>Job not found</span>
//           ) : (
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
//               <div className="grid grid-cols-3 gap-4">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                     key={job?._id}
//                   >
//                     <Job job={job} search={search} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Jobs;

// latest code
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Footer from "./shared/Footer";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { filterJobs, setSearchedQuery } from "@/redux/jobSlice";

const Jobs = () => {
  const { filteredJobs, searchedQuery } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // Update filteredJobs based on search query in local state
  useEffect(() => {
    if (searchedQuery) {
      setSearch(searchedQuery);
    }
  }, [searchedQuery]);

  // Handle live search filtering
  useEffect(() => {
    if (search) {
      dispatch(setSearchedQuery(search)); // Dispatch searched query to Redux
      dispatch(filterJobs()); // Trigger job filtering after search change
    }
  }, [search, dispatch]);

  return (
    <div>
      <Navbar />
      {/* Job search filter */}
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search query on every keystroke
          className="outline-none border-none w-full bg-transparent"
        />
        <Button className="rounded-r-full bg-[#F83002] hover:bg-[#6A38C2]">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>
          {filteredJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filteredJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
