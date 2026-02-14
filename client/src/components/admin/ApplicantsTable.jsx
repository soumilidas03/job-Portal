import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal, CheckCircle, XCircle, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const shortListingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  return (
    <div className="w-full p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-600">Manage and review job applications</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
          <Table>
            <TableCaption className="text-gray-500 py-4">
              A list of your recent applicants
            </TableCaption>
            <TableHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-200">
              <TableRow className="hover:bg-blue-50">
                <TableHead className="font-semibold text-gray-800">
                  Full Name
                </TableHead>
                <TableHead className="font-semibold text-gray-800">
                  Email
                </TableHead>
                <TableHead className="font-semibold text-gray-800">
                  Contact
                </TableHead>
                <TableHead className="font-semibold text-gray-800">
                  Resume
                </TableHead>
                <TableHead className="font-semibold text-gray-800">
                  Date
                </TableHead>
                <TableHead className="text-right font-semibold text-gray-800">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants?.application?.map((item) => (
                <TableRow
                  key={item._id}
                  className="hover:bg-blue-50/50 border-b border-gray-100 transition-colors"
                >
                  <TableCell className="font-medium text-gray-900">
                    {item?.applicant?.fullName}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {item?.applicant?.email}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {item?.applicant?.phoneNumber}
                  </TableCell>
                  <TableCell>
                    {item?.applicant?.profile?.resume ? (
                      <a
                        href={item?.applicant?.profile?.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                      >
                        <FileText className="h-4 w-4" />{" "}
                        {item?.applicant?.profile?.resumeOriginalName}
                      </a>
                    ) : (
                      <span>NA</span>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-blue-100 text-gray-600"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-48 p-3">
                        <PopoverHeader className="font-semibold text-gray-900 mb-3">
                          Update Status
                        </PopoverHeader>
                        <PopoverDescription className="space-y-2">
                          {shortListingStatus.map((status) => (
                            <Button
                              key={status}
                              variant="ghost"
                              className="w-full justify-start text-sm hover:bg-blue-50"
                            >
                              {status === "accepted" ? (
                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                              ) : (
                                <XCircle className="mr-2 h-4 w-4 text-red-600" />
                              )}
                              <span className="text-gray-700">
                                {status.charAt(0).toUpperCase() +
                                  status.slice(1)}
                              </span>
                            </Button>
                          ))}
                        </PopoverDescription>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsTable;
