import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://college-booking-server-two.vercel.app/Colleges")
      .then((res) => res.json())
      .then((data) => {
        const selectedCollege = data.find(
          (college) => college.id === parseInt(id)
        );
        setCollege(selectedCollege);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!college) return <p>College not found</p>;
  return (
    <div>
      {" "}
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">{college.name}</h1>
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p>
          <strong>Admission Process:</strong> {college.admissionProcess}
        </p>
        <p>
          <strong>Events:</strong> {college.events}
        </p>
        <p>
          <strong>Research Works:</strong> {college.research}
        </p>
        <p>
          <strong>Sports Categories:</strong> {college.sports}
        </p>
      </div>
    </div>
  );
};

export default CollegeDetails;
