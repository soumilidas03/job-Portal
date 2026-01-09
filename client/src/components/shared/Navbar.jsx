import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-purple-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Job Hunter
            </h1>
          </div>

          {/* Navigation Links & Auth */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Menu Links */}
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition duration-200 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition duration-200 font-medium"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-white transition duration-200 font-medium"
                >
                  Browse
                </a>
              </li>
            </ul>

            {/* Auth Section */}
            {!user ? (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-purple-700 font-medium"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-white text-purple-900 hover:bg-gray-100 font-medium">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer hover:opacity-75 transition">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>NM</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>NM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Nagma Mirajkar
                        </p>
                        <p className="text-xs text-gray-500">Premium Member</p>
                      </div>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 font-medium"
                      >
                        <FaUser size={16} /> View Profile
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium"
                      >
                        <IoLogOut size={16} />
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
