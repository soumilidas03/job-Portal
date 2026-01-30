import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { COMPANY_API_END_POINT } from "../../utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import axios from "axios";
import useGetCompanyById from "../../hooks/useGetCompanyById";

const CompanySetup = () => {
  const param = useParams();
  useGetCompanyById(param.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("website", input.website);
    formdata.append("location", input.location);
    if (input.file) {
      formdata.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${param.id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setInput({
      name: singleCompany?.name || "",
      description: singleCompany?.description || "",
      website: singleCompany?.website || "",
      location: singleCompany?.location || "",
      file: singleCompany?.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate("/admin/companies")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Company Setup
          </h1>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div>
              <Label className="text-sm font-semibold text-gray-700">
                Company Name
              </Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Enter company name"
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-700">
                Description
              </Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Enter company description"
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-700">
                Website
              </Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                placeholder="https://example.com"
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-700">
                Location
              </Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                placeholder="Enter location"
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-sm font-semibold text-gray-700">
                Logo
              </Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="mt-2"
              />
            </div>

            <div className="flex gap-4 pt-4">
              {loading ? (
                <Button className="w-full" type="submit">
                  Updating
                </Button>
              ) : (
                <Button className="w-full" type="submit">
                  Update Company
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySetup;
