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
import { MoreHorizontal, CheckCircle, XCircle } from "lucide-react";
import { Button } from "../ui/button";

const shortListingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <Table>
          <TableCaption className="text-gray-600">
            A list of your recent applicants
          </TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow className="border-b border-gray-200 hover:bg-gray-50">
              <TableHead className="w-40 font-semibold text-gray-700">
                Full Name
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Email
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Contact
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Resume
              </TableHead>
              <TableHead className="text-right font-semibold text-gray-700">
                Date
              </TableHead>
              <TableHead className="text-right font-semibold text-gray-700">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium text-gray-900">
                fullName
              </TableCell>
              <TableCell className="text-gray-600">email</TableCell>
              <TableCell className="text-gray-600">contact</TableCell>
              <TableCell>
                <a href="#" className="text-blue-600 hover:underline">
                  View
                </a>
              </TableCell>
              <TableCell className="text-right text-gray-600">date</TableCell>

              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-gray-100"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <PopoverHeader className="font-semibold">
                      Status
                    </PopoverHeader>
                    <PopoverDescription className="space-y-2 pt-2">
                      {shortListingStatus.map((status) => (
                        <Button
                          key={status}
                          variant="ghost"
                          className="w-full justify-start text-sm"
                        >
                          {status === "accepted" ? (
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="mr-2 h-4 w-4 text-red-600" />
                          )}
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Button>
                      ))}
                    </PopoverDescription>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicantsTable;
