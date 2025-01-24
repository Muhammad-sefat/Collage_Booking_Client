import React from "react";

const ResearchPapers = () => {
  const papers = [
    {
      title: "AI in Modern Education",
      link: "https://example.com/paper1",
      image: "https://i.ibb.co.com/8jQ7NN3/ai.jpg",
      description:
        "Exploring the role of AI in transforming modern education systems.",
    },
    {
      title: "Quantum Computing Fundamentals",
      link: "https://example.com/paper2",
      image: "https://i.ibb.co.com/XjX9wqy/web.jpg",
      description: "An introduction to the fundamentals of quantum computing.",
    },
    {
      title: "VR in Healthcare",
      link: "https://example.com/paper3",
      image: "https://i.ibb.co.com/GtmC7Z4/cloud.jpg",
      description:
        "How VR technology is revolutionizing healthcare treatments.",
    },
  ];

  return (
    <div>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Research Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={paper.image}
                alt={paper.title}
                className="w-full h-48 object-cover transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-blue-600 hover:underline"
                >
                  {paper.title}
                </a>
                <p className="text-gray-700 mt-2">{paper.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchPapers;
