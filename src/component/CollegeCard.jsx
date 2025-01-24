import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({
  image,
  name,
  admissionDate,
  events,
  research,
  sports,
  id,
}) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p>
            <strong>Admission Date:</strong> {admissionDate}
          </p>
          <p>
            <strong>Events:</strong> {events}
          </p>
          <p>
            <strong>Research:</strong> {research}
          </p>
          <p>
            <strong>Sports:</strong> {sports}
          </p>
          <Link to={`/colleges/${id}`}>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
