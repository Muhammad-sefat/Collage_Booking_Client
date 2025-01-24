import React, { useEffect, useState } from "react";
import CollegeCard from "../component/CollegeCard";

const CollegeCards = () => {
  const [college, setCollege] = useState([]);
  console.log(college);
  useEffect(() => {
    fetch("/collage.json")
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, [college]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {college.map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeCards;
