import Navbar from "./shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Pen, Mail, Phone, Download } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "../hooks/useGetAppliedJobs";

// const skills = ["HTML", "CSS", "JavaScript", "Nodejs"];
const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.profile?.profilePhoto} />
              <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Pen className="w-4 h-4" /> Edit
            </Button>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {user?.fullName}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            {user?.profile?.bio}
          </p>

          {/* Contact Info */}
          <div className="flex gap-6 text-slate-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>{user?.phoneNumber}</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {user?.profile?.skills.length > 0 ? (
              user?.profile?.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-700"
                >
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-slate-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Resume</h2>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              <Download className="w-4 h-4" />{" "}
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-slate-500">NA</span>
          )}
        </div>

        {/* Applied Jobs Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Applied Jobs
          </h2>
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
