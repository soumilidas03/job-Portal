import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-r from-purple-950 to-purple-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-white">Job Hunter</h1>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                Browse
              </a>
            </li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer hover:opacity-80 transition">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">Nagma Mirajkar</p>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">View profile</Button>
                  <Button variant="outline" className="w-full text-red-600 hover:text-red-700">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
