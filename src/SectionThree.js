import React from "react";

const SectionThree = () => {
  return (
    <div
      className="relative my-10 px-4 py-8 bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1555685812-10a3c3f29c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
      }}
    >
      <div className="bg-black bg-opacity-60 rounded-lg p-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to Curry Express, where we bring the authentic flavors of
          India to your table. Our mission is to provide a culinary experience
          that celebrates the rich heritage of Indian cuisine.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Our chefs are passionate about using traditional recipes and the
          freshest ingredients, ensuring that every dish is not just a meal but
          a journey through the vibrant tastes and aromas of India.
        </p>
        <p className="text-lg text-gray-300 mb-6">
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
