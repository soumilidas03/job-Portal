import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setsearchCompanyByText } from "../../redux/companySlice";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "../../hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "../../redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Jobs</h1>
          <p className="text-gray-600">Manage and view all registered jobs</p>
        </div>

        <div className="flex gap-4 mb-8">
          <Input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Filter by job name"
            className="flex-1 max-w-sm"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            className="bg-purple-600 hover:bg-purple-700"
          >
            New Job
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
