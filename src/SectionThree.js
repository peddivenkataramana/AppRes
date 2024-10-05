import React from "react";
import "./SectionThree.css"; // Ensure this CSS file exists

const SectionThree = () => {
  return (
    <div className="about-section relative my-10 px-4 py-8">
      <div className="bg-image p-6 rounded-lg">
        <div className="mask"></div>{" "}
        {/* Overlay mask for better text visibility */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-white mb-6 ">
          Welcome to Curry Xpress, where we bring the authentic flavors of India
          to your table. Our mission is to provide a culinary experience that
          celebrates the rich heritage of Indian cuisine. Our chefs are
          passionate about using traditional recipes and the freshest
          ingredients, ensuring that every dish is not just a meal but a journey
          through the vibrant tastes and aromas of India.
        </p>
        <p className="text-lg text-white mb-6">
          Whether you're here for a casual meal with friends or a special
          celebration, we strive to make your experience memorable. Join us in
          exploring the diverse and delicious offerings of our menu!
        </p>
        <div className="text-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1555685812-10a3c3f29c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="About Us"
            className="w-full max-w-xs mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
