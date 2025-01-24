import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/XzLw9DS/library-01.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream College</h1>
        <p className="text-lg mb-6">
          Search for colleges and explore their facilities
        </p>
        <input
          type="text"
          placeholder="Search for a college"
          className="px-4 py-2 w-1/2 rounded-lg text-black"
        />
      </div>
    </div>
  );
};

export default Banner;
