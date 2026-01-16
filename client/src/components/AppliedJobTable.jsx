import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  const appliedJobs = [
    {
      date: "01-01-2026",
      role: "Frontend Developer",
      company: "Google",
      status: "Pending",
    },
    {
      date: "02-01-2026",
      role: "React Developer",
      company: "Microsoft",
      status: "Accepted",
    },
    {
      date: "03-01-2026",
      role: "UI Developer",
      company: "Apple",
      status: "Rejected",
    },
    {
      date: "04-01-2026",
      role: "Full Stack Developer",
      company: "Amazon",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <Table>
        <TableCaption className="text-gray-600 py-4">
          A list of your recently applied jobs.
        </TableCaption>
        <TableHeader className="bg-gray-50 border-b">
          <TableRow>
            <TableHead className="w-24 font-semibold text-gray-700">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Job Role
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Company
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-50 border-b transition-colors"
            >
              <TableCell className="font-medium text-gray-800">
                {job.date}
              </TableCell>
              <TableCell className="text-gray-700">{job.role}</TableCell>
              <TableCell className="text-gray-700">{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge className={`${getStatusColor(job.status)}`}>
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
