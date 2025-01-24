import React from "react";
import Banner from "./Banner";
import CollegeCards from "./CollegeCards";
import ImageGallary from "./ImageGallary";
import ReserachPapers from "./ReserachPapers";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <CollegeCards />
      <ImageGallary />
      <ReserachPapers />
      <Review />
    </div>
  );
};

export default Home;
