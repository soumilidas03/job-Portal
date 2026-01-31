import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit2, Eye, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  

  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();
  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length > 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
          job?.company?.name
            ?.toLowerCase()
            .includes(searchJobByText.toLowerCase())
        );
      });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Table>
        <TableCaption className="text-gray-500 py-4">
          A list of your recently posted jobs.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b-2 border-gray-200 hover:bg-gray-50">
            <TableHead className="w-24 font-semibold text-gray-700">
              Company Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700">Role</TableHead>
            <TableHead className="font-semibold text-gray-700">Date</TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.length <= 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center py-4">
                You havent registered any company yet
              </TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow
                key={job._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <TableCell className="font-medium text-gray-900">
                  {job?.company.name}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {job?.title}
                </TableCell>
                <TableCell className="text-gray-600">
                  {job?.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-gray-600" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-48" align="end">
                      <div className="space-y-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/companies/${job._id}`)
                          }
                          className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors text-gray-700"
                        >
                          <Edit2 className="h-4 w-4" /> Edit
                        </button>
                        <button onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-red-50 rounded-md transition-colors text-blue-600">
                          <Eye className="h-4 w-4" /> Applicants
                        </button>
                        <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-red-50 rounded-md transition-colors text-red-600">
                          <Trash2 className="h-4 w-4" /> Delete
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
