import React from "react";
import "./PhotoGrid.css"; // Ensure this file exists

const photos = [
  {
    id: 3,
    src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Aloo Gobi",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1662610/pexels-photo-1662610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Paneer Tikka",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2020252/pexels-photo-2020252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Biryani",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1033185/pexels-photo-1033185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dhokla",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3639636/pexels-photo-3639636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Samosa",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/4200704/pexels-photo-4200704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dal Makhani",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/3553885/pexels-photo-3553885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Gulab Jamun",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/4338465/pexels-photo-4338465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Kheer",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/3661796/pexels-photo-3661796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Lassi",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/2176980/pexels-photo-2176980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Chaat",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/4245568/pexels-photo-4245568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Pav Bhaji",
  },
];

const SectionTwo = () => {
  return (
    <div className="relative overflow-hidden my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Our Culinary Delights
      </h2>
      <div className="flex animate-slide min-h-[250px] justify-center py-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card transform transition-transform duration-500 hover:scale-105 mx-4"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-48 h-48 object-cover rounded-lg mb-3"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{photo.alt}</h3>
            </div>
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {photos.map((photo) => (
          <div
            key={photo.id + 100} // Unique key
            className="photo-card transform transition-transform duration-500 hover:scale-105 mx-4"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-48 h-48 object-cover rounded-lg mb-3"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{photo.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
