import Navbar from "./shared/navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchQuery } from "../redux/jobSlice";
import useGetAllJobs from "../hooks/useGetAllJobs";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7];

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  });
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Search results ({allJobs.length})
        </h1>
        <div className="grid gap-4">
          {allJobs.map((job) => (
            <Job key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
