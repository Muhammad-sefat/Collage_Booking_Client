import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      feedback:
        "Harvard University provides excellent education and a vibrant campus life.",
      image: "https://i.ibb.co.com/pKz54KS/pexels-liza-summer-6347887.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      feedback:
        "MIT has great facilities, but the workload can be overwhelming at times.",
      image: "https://i.ibb.co.com/gSNh5dD/house-04.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rating: 5,
      feedback:
        "Stanford offers an amazing balance between academics and extracurriculars.",
      image:
        "https://i.ibb.co.com/J2f2qKp/christian-buehner-84-E44-Ed-D18o-unsplash.jpg",
    },
  ];

  return (
    <div>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Reviews and Feedback
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <p className="text-yellow-500">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{review.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;
