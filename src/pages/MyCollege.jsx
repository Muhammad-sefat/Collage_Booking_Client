import React, { useState, useEffect } from "react";
import { useAuth } from "../component/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyCollege = () => {
  const [admissions, setAdmissions] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Fetch admissions data on component load
  useEffect(() => {
    const fetchAdmissions = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          `http://localhost:5000/admission-data?email=${user.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setAdmissions(data);
        } else {
          console.error("Failed to fetch admissions.");
        }
      } catch (error) {
        console.error("Error fetching admissions:", error);
      }
    };

    fetchAdmissions();
  }, [user]);

  // Handle review submission
  const handleReviewSubmit = async (id) => {
    const { review, rating } = admissions[id];
    if (!review || !rating) {
      toast.error("Please fill in both review and rating.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/add-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: admissions[id].candidateName,
          review,
          rating,
        }),
      });

      if (response.ok) {
        navigate("/");
        toast.success("Review submitted successfully!");
      } else {
        toast.error("Failed to submit the review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("An error occurred while submitting the review.");
    }
  };

  // Handle input changes for review and rating
  const handleInputChange = (index, field, value) => {
    setAdmissions((prev) =>
      prev.map((admission, i) =>
        i === index ? { ...admission, [field]: value } : admission
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My College</h1>

      {/* Show a message if no admissions are available */}
      {admissions.length === 0 ? (
        <p className="text-lg text-gray-600">No College Selected Yet</p>
      ) : (
        admissions.map((admission, index) => (
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

            {/* Review section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
              <textarea
                rows="3"
                className="textarea textarea-bordered w-full mb-2"
                placeholder="Write your review here"
                value={admission.review || ""}
                onChange={(e) =>
                  handleInputChange(index, "review", e.target.value)
                }
              ></textarea>
              <input
                type="number"
                max="5"
                min="1"
                className="input input-bordered w-full mb-2"
                placeholder="Rating (1-5)"
                value={admission.rating || ""}
                onChange={(e) =>
                  handleInputChange(index, "rating", e.target.value)
                }
              />
              <button
                className="btn btn-primary"
                onClick={() => handleReviewSubmit(index)}
              >
                Submit Review
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCollege;
