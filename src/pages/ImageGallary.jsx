import React from "react";

const ImageGallary = () => {
  const images = [
    "https://i.ibb.co.com/rycggt2/library-05.jpg",
    "https://i.ibb.co.com/kcbySyk/pexels-expressivestanley-1454360.jpg",
    "https://i.ibb.co.com/zn17pt8/pexels-rdne-7683745.jpg",
    "https://i.ibb.co.com/DQqYBZZ/pexels-hai-nguyen-825252-1699414.jpg",
    "https://i.ibb.co.com/2FDHQhz/pexels-olly-3769706.jpg",
    "https://i.ibb.co.com/cNdZ00r/pexels-kampus-5940827.jpg",
  ];
  return (
    <div>
      <section className="py-10 mx-5">
        <h2 className="text-3xl font-bold text-center mb-6">Image Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition duration-300 hover:scale-110"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGallary;
