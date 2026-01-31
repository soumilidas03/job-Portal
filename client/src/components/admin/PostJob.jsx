import { use, useState } from "react";
import Navbar from "../shared/navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experienceLevel: "",
    position: 0,
    companyId: "",
  });
  const { companies } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const changeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value,
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <Label className="block mb-2">Job Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="e.g., Senior Developer"
              value={input.title}
              onChange={changeEventhandler}
            />
          </div>

          <div>
            <Label className="block mb-2">Description</Label>
            <Input
              type="text"
              name="description"
              placeholder="Job description"
              value={input.description}
              onChange={changeEventhandler}
            />
          </div>

          <div>
            <Label className="block mb-2">Requirements</Label>
            <Input
              type="text"
              name="requirements"
              placeholder="Required skills"
              value={input.requirements}
              onChange={changeEventhandler}
            />
          </div>
          <div>
            <Label className="block mb-2">Experience</Label>
            <Input
              type="text"
              name="experienceLevel"
              placeholder="Experience"
              value={input.experienceLevel}
              onChange={changeEventhandler}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block mb-2">Salary</Label>
              <Input
                type="text"
                name="salary"
                placeholder="e.g., $50,000 - $70,000"
                value={input.salary}
                onChange={changeEventhandler}
              />
            </div>

            <div>
              <Label className="block mb-2">Location</Label>
              <Input
                type="text"
                name="location"
                placeholder="City, State"
                value={input.location}
                onChange={changeEventhandler}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="block mb-2">Job Type</Label>
              <Input
                type="text"
                name="jobType"
                placeholder="e.g., Full-time"
                value={input.jobType}
                onChange={changeEventhandler}
              />
            </div>

            <div>
              <Label className="block mb-2">Number of Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventhandler}
              />
            </div>
          </div>

          {companies.length > 0 ? (
            <div>
              <Label className="block mb-2">Select Company</Label>
              <Select onValueChange={selectChangeHandler}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem
                      key={company._id}
                      value={company?.name?.toLowerCase()}
                    >
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                Please register a company first before posting a job.
              </p>
            </div>
          )}

          <Button className="w-full mt-8">
            {loading ? (
              <span>
                {" "}
                <Loader2 /> Posting job....
              </span>
            ) : (
              <span>Post Job</span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
