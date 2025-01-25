import React, { useEffect, useState } from "react";
import CollegeCard from "../component/CollegeCard";

const CollegeCards = () => {
  const [college, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Colleges")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, [college]);
  return (
    <div>
      <section id="college-cards" className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Colleges
        </h2>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {college.slice(0, 3).map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeCards;
