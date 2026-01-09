import Navbar from "../shared/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Register = () => {
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

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
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
                type="password"
                placeholder="••••••••"
                className="w-full border-gray-300 focus:border-blue-500"
              />
            </div>

            <div className="space-y-3 pt-2">
              <Label className="text-sm font-medium">Account Type</Label>
              <RadioGroup defaultValue="student">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label
                    htmlFor="student"
                    className="font-normal cursor-pointer text-gray-700"
                  >
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recruiter" id="recruiter" />
                  <Label
                    htmlFor="recruiter"
                    className="font-normal cursor-pointer text-gray-700"
                  >
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file" className="text-sm font-medium">
                Profile Picture
              </Label>
              <Input
                id="file"
                accept="image/*"
                type="file"
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
