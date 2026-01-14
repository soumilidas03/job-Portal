import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-sm text-gray-500">2 days ago</span>
        <Button
          variant="ghost"
          size="sm"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-200"
        >
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12 border-2 border-gray-200">
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg9zkf0PWdFupdiDjLIkF1rWzE_oC76dNaQ&s" />
        </Avatar>
        <div>
          <h3 className="font-semibold text-purple-900 text-lg">
            Company Name
          </h3>
          <p className="text-sm text-purple-600">India</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-bold text-purple-800 mb-3">Job Title</h2>

      {/* Description */}
      <p className="text-purple-700 mb-4 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        perspiciatis alias ipsum qui odit sed reprehenderit tempora accusamus
        fugiat quos.
      </p>

      {/* Badges */}
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

      {/* Buttons */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
          Details
        </Button>
        <Button variant="outline" className="flex-1">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
