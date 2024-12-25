import { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job); // Get all jobs from Redux.
  const [filterJobs, setFilterJobs] = useState(allJobs); // Holds the filtered job list.

  // Track the search query state.
  const [search, setSearch] = useState("");

  // This function will handle live filtering of jobs based on search query.
  const filterJobsBySearch = (query) => {
    if (!query) {
      // If no query, show all jobs.
      setFilterJobs(allJobs);
    } else {
      // Filter jobs based on title, description, and location (case-insensitive).
      const filtered = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.description.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.company.name.toLowerCase().includes(query.toLowerCase())
        );
      });
      setFilterJobs(filtered);
    }
  };

  // UseEffect to update the job list when `search` changes.
  useEffect(() => {
    filterJobsBySearch(search);
  }, [search, allJobs]); // Re-run filtering whenever `search` or `allJobs` changes.

  return (
    <div>
      <Navbar />

      {/* Implementing job search filter */}
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for Jobs/Skills/designation/companies"
          onChange={(e) => setSearch(e.target.value)} // Update search query on every keystroke.
          value={search}
          className="outline-none border-none w-full bg-transparent"
        />
        <Button className="rounded-r-full bg-[#F83002] hover:bg-[#6A38C2]">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex flex-col gap-5">
          {/* Job Cards Section */}
          {filterJobs.length <= 0 ? (
            <span className="text-center text-lg">No jobs found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
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
      {/* <Footer /> */}
    </div>
  );
};

export default Jobs;
