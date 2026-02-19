import { useEffect, useState } from "react";
import Navbar from "./shared/navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase()) 
          
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]);
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Available Jobs
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Section */}
          <aside className="lg:col-span-1">
            <FilterCard />
          </aside>

          {/* Jobs Section */}
          <section className="lg:col-span-3">
            {filterJobs?.length === 0 ? (
              <div className="flex items-center justify-center h-40 border rounded-lg bg-gray-50">
                <span className="text-gray-500 text-lg">
                  No jobs found. Try adjusting filters.
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filterJobs?.map((job) => (
                  <Job jobId={job._id} job={job} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Jobs;
