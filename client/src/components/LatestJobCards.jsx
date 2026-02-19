import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
    >
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-purple-800">
          {job?.company?.name}
        </h1>
        <h5 className="text-purple-900">{job?.location}</h5>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-purple-900">{job?.title}</h2>
        <div className="flex flex-wrap gap-2">
          <p className=" text-purple-900">{job?.description}</p>
          <Badge className={"text-blue-900 bg-blue-200"} variant="secondary">
            {job?.position} Positions
          </Badge>
          <Badge className={"text-red-900 bg-red-200"} variant="secondary">
            {job?.jobType}
          </Badge>
          <Badge className={"text-green-900 bg-green-200"} variant="secondary">
            {job?.salary}LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
