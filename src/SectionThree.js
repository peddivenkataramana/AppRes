import React from "react";
import "./SectionThree.css"; // Ensure this CSS file exists
import aboutImage from "./assessts/aboutus.jpg"; // Replace with your actual image path

const SectionThree = () => {
  return (
    <div className="about-section relative my-10 px-4">
      <div className="bg-image rounded-lg">
        <div className="mask"></div>
        <div className="content p-8">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            About Us
          </h2>
          <p className="text-lg text-white mb-4">
            Welcome to Curry Xpress, where we bring the authentic flavors of
            India to your table. Our mission is to provide a culinary experience
            that celebrates the rich heritage of Indian cuisine.
          </p>
          <p className="text-lg text-white mb-4">
            Our chefs are passionate about using traditional recipes and the
            freshest ingredients, ensuring that every dish is not just a meal
            but a journey through the vibrant tastes and aromas of India.
          </p>
          <p className="text-lg text-white">
            Whether you're here for a casual meal with friends or a special
            celebration, we strive to make your experience memorable. Join us in
            exploring the diverse and delicious offerings of our menu!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
