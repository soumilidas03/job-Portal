import React from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";

const Applicants = () => {
  return (
    <div>
      <Navbar />
      Applicants(3)
      <ApplicantsTable/>
    </div>
  );
};

export default Applicants;
