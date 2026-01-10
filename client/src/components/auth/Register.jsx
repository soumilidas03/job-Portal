import Navbar from "../shared/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "../../utils/constant.js";
import axios from "axios";
import { toast } from "sonner";

const Register = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("fullName", input.fullName);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);
      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 text-sm mt-2">
              Join our platform today
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                value={input.fullName}
                name="fullName"
                onChange={changeEventHandler}
                type="text"
                placeholder="John Henry"
                className="w-full border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                type="email"
                placeholder="john@gmail.com"
                className="w-full border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                type="tel"
                placeholder="9XXXXXXX"
                className="w-full border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                type="password"
                placeholder="••••••••"
                className="w-full border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-3 pt-2">
              <Label className="text-sm font-medium text-gray-800">
                Account Type
              </Label>

              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* Student */}
                <label
                  htmlFor="student"
                  className={`flex items-center justify-center gap-2 p-4 rounded-lg border cursor-pointer transition-all
        ${
          input.role === "student"
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
                >
                  <Input
                    type="radio"
                    id="student"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="hidden"
                  />
                  <span className="font-medium">Student</span>
                </label>

                {/* Recruiter */}
                <label
                  htmlFor="recruiter"
                  className={`flex items-center justify-center gap-2 p-4 rounded-lg border cursor-pointer transition-all
        ${
          input.role === "recruiter"
            ? "border-blue-600 bg-blue-50 text-blue-700"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
                >
                  <Input
                    type="radio"
                    id="recruiter"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="hidden"
                  />
                  <span className="font-medium">Recruiter</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file" className="text-sm font-medium">
                Profile Picture
              </Label>
              <Input
                id="file"
                accept="image/*"
                type="file"
                name="file"
                // value={input.file}
                onChange={changeFileHandler}
                className="border-gray-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
            >
              Sign Up
            </Button>

            <div className="text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
