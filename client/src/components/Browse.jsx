import Navbar from "./shared/navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6, 7];

const Browse = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Search results ({randomJobs.length})
        </h1>
        <div className="grid gap-4">
          {randomJobs.map((job) => (
            <Job key={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
