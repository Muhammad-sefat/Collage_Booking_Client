import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error("Failed to fetch reviews.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);
  // const reviews = [
  //   {
  //     id: 1,
  //     name: "Abdullah al Riaz",
  //     rating: 5,
  //     feedback:
  //       "Dhaka University provides excellent education and a vibrant campus life.",
  //     image: "https://i.ibb.co.com/pKz54KS/pexels-liza-summer-6347887.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Mihad Hasan",
  //     rating: 4,
  //     feedback:
  //       "AIUB has great facilities, but the workload can be overwhelming at times.",
  //     image: "https://i.ibb.co.com/gSNh5dD/house-04.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Al Rifat",
  //     rating: 5,
  //     feedback:
  //       "BUET offers an amazing balance between academics and extracurriculars.",
  //     image:
  //       "https://i.ibb.co.com/J2f2qKp/christian-buehner-84-E44-Ed-D18o-unsplash.jpg",
  //   },
  // ];

  return (
    <div>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">
          Reviews and Feedback
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
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
