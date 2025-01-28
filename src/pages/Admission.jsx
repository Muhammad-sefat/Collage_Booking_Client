import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../component/AuthProvider";

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });
  const colleges = [
    { id: 1, name: "Dhaka University" },
    { id: 2, name: "BUET" },
    { id: 3, name: "North South University" },
    { id: 4, name: "BRAC University" },
    { id: 5, name: "Independent University" },
    { id: 6, name: "AIUB" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to submit admission!");
      return;
    }

    const dataToSend = {
      ...formData,
      college: selectedCollege,
      email: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success("Admission submitted successfully!");
        navigate("/my-college");
      } else {
        toast.error(responseData.message || "Failed to submit admission.");
      }
    } catch (error) {
      console.error("Error submitting admission:", error);
      toast.error("An error occurred while submitting your admission.");
    } finally {
      setFormData({
        candidateName: "",
        subject: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        image: null,
      });
      setSelectedCollege(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold my-6">
        Choose You Best College For Admission
      </h1>
      {selectedCollege ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedCollege.name}
          </h2>
          <input
            type="text"
            name="candidateName"
            placeholder="Candidate Name"
            value={formData.candidateName}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Candidate Email"
            value={formData.email}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Candidate Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />
          <label
            htmlFor="image"
            className="block text-base font-medium text-gray-700"
          >
            Upload Your Picture
          </label>
          <input
            type="file"
            name="image"
            placeholder="Your Picture"
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary text-base w-full">
            Submit
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="p-4 border rounded-lg shadow hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedCollege(college)}
            >
              <h2 className="text-xl font-semibold">{college.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admission;
