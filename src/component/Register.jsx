import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const { register, loginWithGoogle, updateUserProfile } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const apiKey = "333a4432d9c3377f22400dce537701c3";

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = formData.profilePicture
        ? await uploadToImgBB(formData.profilePicture)
        : null;

      await register(formData.email, formData.password);

      await updateUserProfile({
        displayName: formData.name,
        photoURL: imageUrl,
      });

      navigate(from, { replace: true });
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      navigate(from, { replace: true });
      toast.success("Registration with Google successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 shadow-md rounded-md w-96 my-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full bg-red-500 text-white py-2 rounded-lg"
        >
          Register with Google
        </button>
        <p className="my-5 text-center">
          Have an Account? Please{" "}
          <Link to={"/login"} className="underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
