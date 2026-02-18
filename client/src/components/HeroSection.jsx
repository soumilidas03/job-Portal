import React, { useState } from "react";
import { setSearchQuery } from "../redux/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };
  return (
    <section className="bg-gradient-to-r from-purple-400 to-purple-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">
          Find Your Dream Job
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Discover thousands of job opportunities with all the information you
          need
        </p>
        <div className="flex gap-4 justify-center ">
          <input
            type="text"
            placeholder="Job title, keywords..."
            onChange={(e) => setQuery(e.target.value)}
            className="px-6 py-3 rounded-lg bg-white text-gray-800 w-96"
          />
          <button
            onClick={searchJobHandler}
            className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
