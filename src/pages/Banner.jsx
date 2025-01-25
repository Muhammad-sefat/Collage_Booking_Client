import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a college name.");
      return;
    }

    try {
      const response = await fetch(
        `https://college-booking-server-two.vercel.app/search-college?name=${searchTerm}`
      );
      if (response.ok) {
        const college = await response.json();
        console.log(college);
        navigate(`/colleges/${college.id}`, { state: college });
      } else {
        toast.error("College not found. Please try again.");
      }
    } catch (error) {
      console.error("Error searching for college:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/vzrHhc8/pexels-anastasia-shuraeva-8466778.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream College</h1>
        <p className="text-lg mb-6">
          Search for colleges and explore their facilities
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Search for a college"
            className="px-4 py-2 w-4/5 rounded-l-lg text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 px-4 py-2 rounded-r-lg text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
