import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { register, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(formData.email, formData.password);
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      alert("Registration with Google successful!");
    } catch (error) {
      alert(error.message);
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
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="input input-bordered w-full mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
        >
          Register
        </button>
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full bg-red-500 text-white py-2 rounded-lg"
        >
          Register with Google
        </button>
        <p className="my-5 text-center">
          Have an Account ? Please{" "}
          <Link to={"/login"} className="underline">
            SignIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
