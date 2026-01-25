import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  APPLICATION_API_END_POINT,
  JOB_API_END_POINT,
} from "../utils/constant";
import { setSingleJob } from "../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  const isInitiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id,
    ) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/applyJob/${jobId}`,
        { withCredentials: true },
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          application: [...singleJob.application, { applicant: user?._id }],
        };
        dispatch(updateSingleJob);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.application.some(
              (application) => application.applicant === user?._id,
            ),
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{singleJob?.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="text-blue-900 bg-blue-200" variant="secondary">
            {singleJob?.position} Positions
          </Badge>
          <Badge className="text-red-900 bg-red-200" variant="secondary">
            {singleJob?.jobType}
          </Badge>
          <Badge className="text-green-900 bg-green-200" variant="secondary">
            {singleJob?.salary} LPA
          </Badge>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className="mb-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
        >
          {isApplied ? "Already Applied" : "Apply now"}
        </Button>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Job Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm font-medium">Role</p>
              <p className="text-lg font-semibold">{singleJob?.title}</p>
            </div>

            <div>
              <p className="text-gray-600 text-sm font-medium">Location</p>
              <p className="text-lg font-semibold">{singleJob?.location}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Experience Required
              </p>
              <p className="text-lg font-semibold">
                {singleJob?.experienceLevel}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Salary</p>
              <p className="text-lg font-semibold">{singleJob?.salary} LPA</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Total Applicants
              </p>
              <p className="text-lg font-semibold">
                {singleJob?.application?.length}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Posted Date</p>
              <p className="text-lg font-semibold">
                {singleJob?.createdAt.split("T")[0]}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Description
            </p>
            <p className="text-gray-700 leading-relaxed">
              {singleJob?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
