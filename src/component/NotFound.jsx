import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-xl mt-4 mb-8">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
