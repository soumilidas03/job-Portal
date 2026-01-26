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
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Table>
        <TableCaption className="text-gray-500 py-4">
          A list of your recently registered companies.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b-2 border-gray-200 hover:bg-gray-50">
            <TableHead className="w-24 font-semibold text-gray-700">
              Logo
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Company Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Registration Date
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <TableCell>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Company logo"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="font-medium text-gray-900">
              Company Name
            </TableCell>
            <TableCell className="text-gray-600">01-01-2026</TableCell>
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-48" align="end">
                  <div className="space-y-2">
                    <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors text-gray-700">
                      <Edit2 className="h-4 w-4" /> Edit
                    </button>
                    <button className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-red-50 rounded-md transition-colors text-red-600">
                      <Trash2 className="h-4 w-4" /> Delete
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
