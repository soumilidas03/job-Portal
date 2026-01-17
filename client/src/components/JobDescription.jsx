import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Frontend Developer</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="text-blue-900 bg-blue-200" variant="secondary">
            12 Positions
          </Badge>
          <Badge className="text-red-900 bg-red-200" variant="secondary">
            Full Time
          </Badge>
          <Badge className="text-green-900 bg-green-200" variant="secondary">
            24 LPA
          </Badge>
        </div>

        <Button
          disabled={isApplied}
          className="mb-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
        >
          {isApplied ? "Already Applied" : "Apply now"}
        </Button>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Job Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm font-medium">Role</p>
              <p className="text-lg font-semibold">Frontend Developer</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Location</p>
              <p className="text-lg font-semibold">Kolkata</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Experience Required
              </p>
              <p className="text-lg font-semibold">2 years</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Salary</p>
              <p className="text-lg font-semibold">20-50K</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Total Applicants
              </p>
              <p className="text-lg font-semibold">1200</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Posted Date</p>
              <p className="text-lg font-semibold">01-01-2026</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Description
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reprehenderit quia nam, sunt est itaque autem adipisci
              aut tempora quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
