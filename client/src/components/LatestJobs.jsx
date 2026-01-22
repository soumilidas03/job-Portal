import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900">
          Latest Jobs
        </h1>
        <p className="text-purple-600 mt-2">
          Discover opportunities tailored for you
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {allJobs.length <= 0 ? (
          <span>No jobs available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
