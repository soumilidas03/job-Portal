import { Badge } from "@/components/ui/badge";

const LatestJobCards = () => {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-purple-800">Company Name</h1>
        <h5 className="text-purple-900">Location</h5>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-purple-900">Job Title</h2>
        <div className="flex flex-wrap gap-2">
          <p className=" text-purple-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            quo?
          </p>
          <Badge className={"text-blue-900 bg-blue-200"} variant="secondary">
            12 Positions
          </Badge>
          <Badge className={"text-red-900 bg-red-200"} variant="secondary">
            Full Time
          </Badge>
          <Badge className={"text-green-900 bg-green-200"} variant="secondary">
            24 LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
