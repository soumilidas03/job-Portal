import Navbar from "../shared/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant.js";
import { toast } from "sonner";
import { setLoading, setUser } from "../../redux/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
            <p className="text-gray-600 text-sm mt-2">Enter your details</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
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

            {loading ? (
              <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Logging in...</span>
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
              >
                Log in
              </Button>
            )}

            <div className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
