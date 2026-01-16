import Navbar from "./shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Pen, Mail, Phone, Download } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "JavaScript", "Nodejs"];

const Profile = () => {
  const isResume = true;
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NM</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="gap-2">
              <Pen className="w-4 h-4" /> Edit
            </Button>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">Full Name</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo, earum!
          </p>

          {/* Contact Info */}
          <div className="flex gap-6 text-slate-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>jk@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>9999563478</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.length > 0 ? (
              skills.map((skill) => (
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
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              <Download className="w-4 h-4" /> Download Resume
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
    </div>
  );
};

export default Profile;
