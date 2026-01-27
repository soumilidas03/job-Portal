import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Companies</h1>
          <p className="text-gray-600">
            Manage and view all registered companies
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Filter by company name"
            className="flex-1 max-w-sm"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">Search</Button>
          <Button onClick={()=>navigate("/admin/companies/create")} className="bg-purple-600 hover:bg-purple-700">
            New Company
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
