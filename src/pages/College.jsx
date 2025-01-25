import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Colleges")
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Our Colleges</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{college.name}</h2>
              <p className="text-gray-700">
                <strong>Rating:</strong> {college.rating}/5
              </p>
              <p className="text-gray-700">
                <strong>Admission Date:</strong> {college.admissionDate}
              </p>
              <p className="text-gray-700">
                <strong>Research Papers:</strong> {college.researchCount}
              </p>
              <Link to={`/colleges/${college.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;
