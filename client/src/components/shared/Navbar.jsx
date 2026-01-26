import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "../../redux/authSlice";
import { USER_API_END_POINT } from "../../utils/constant.js";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="bg-linear-to-r from-purple-900 to-purple-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Job Hunter
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {user && user.role === "recruiter" ? (
                <>
                  <li className="text-gray-100 hover:text-white transition duration-200 font-medium">
                    <Link to="/admin/companies">Companies</Link>
                  </li>
                  <li className="text-gray-100 hover:text-white transition duration-200 font-medium">
                    <Link to="/admin/jobs">Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-gray-100 hover:text-white transition duration-200 font-medium">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-gray-100 hover:text-white transition duration-200 font-medium">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                  <li className="text-gray-100 hover:text-white transition duration-200 font-medium">
                    <Link to="/browse">Browse</Link>
                  </li>
                </>
              )}
            </ul>

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
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={user?.profile?.profilePhoto} />
                        <AvatarFallback>
                          {user?.fullName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user.fullName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.profile.bio}
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      {user && user.role === "student" && (
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-2 font-medium"
                        >
                          <FaUser size={16} />{" "}
                          <Link to="/profile"> View Profile</Link>
                        </Button>
                      )}

                      <Button
                        onClick={logoutHandler}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:bg-purple-700 p-2 rounded"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {user && user.role === "recruiter" ? (
              <>
                <a
                  href="/admin/companies"
                  className="block text-gray-100 hover:text-white py-2 font-medium"
                >
                  Companies
                </a>
                <a
                  href="/admin/jobs"
                  className="block text-gray-100 hover:text-white py-2 font-medium"
                >
                  Jobs
                </a>
              </>
            ) : (
              <>
                <a
                  href="/"
                  className="block text-gray-100 hover:text-white py-2 font-medium"
                >
                  Home
                </a>
                <a
                  href="/jobs"
                  className="block text-gray-100 hover:text-white py-2 font-medium"
                >
                  Jobs
                </a>
                <a
                  href="/browse"
                  className="block text-gray-100 hover:text-white py-2 font-medium"
                >
                  Browse
                </a>
              </>
            )}

            {!user ? (
              <div className="flex gap-2 pt-2">
                <Link to="/login" className="flex-1">
                  <Button
                    variant="ghost"
                    className="w-full text-white hover:bg-purple-700"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/register" className="flex-1">
                  <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer hover:opacity-75 transition">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={user?.profile?.profilePhoto} />
                        <AvatarFallback>
                          {user?.fullName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {user?.fullName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user?.profile?.bio}
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 font-medium"
                      >
                        <Link to="/profile">
                          <FaUser size={16} /> View Profile
                        </Link>
                      </Button>
                      <Button
                        onClick={logoutHandler}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
