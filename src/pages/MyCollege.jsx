import React, { useState, useEffect } from "react";

const MyCollege = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const storedAdmissions =
      JSON.parse(localStorage.getItem("admissions")) || [];
    setAdmissions(storedAdmissions);
  }, []);

  const handleReviewSubmit = (id, review, rating) => {
    const updatedAdmissions = admissions.map((admission, index) =>
      index === id ? { ...admission, review, rating } : admission
    );
    setAdmissions(updatedAdmissions);
    localStorage.setItem("admissions", JSON.stringify(updatedAdmissions));
    alert("Review added successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My College</h1>
      {admissions.map((admission, index) => (
        <div key={index} className="border p-4 rounded-lg shadow mb-4">
          <h2 className="text-2xl font-semibold">{admission.college.name}</h2>
          <p>
            <strong>Candidate Name:</strong> {admission.candidateName}
          </p>
          <p>
            <strong>Subject:</strong> {admission.subject}
          </p>
          <p>
            <strong>Email:</strong> {admission.email}
          </p>
          <p>
            <strong>Phone:</strong> {admission.phone}
          </p>
          <p>
            <strong>Address:</strong> {admission.address}
          </p>
          <p>
            <strong>Date of Birth:</strong> {admission.dob}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
            <textarea
              rows="3"
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Write your review here"
              onBlur={(e) => (admission.review = e.target.value)}
            ></textarea>
            <input
              type="number"
              max="5"
              min="1"
              className="input input-bordered w-full mb-2"
              placeholder="Rating (1-5)"
              onBlur={(e) => (admission.rating = e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() =>
                handleReviewSubmit(index, admission.review, admission.rating)
              }
            >
              Submit Review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCollege;
