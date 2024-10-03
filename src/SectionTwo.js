import React from "react";
import "./PhotoGrid.css"; // Ensure this file exists

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    alt: "Description 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    alt: "Description 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517841905240-47298e151d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    alt: "Description 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1494042062061-7e5a3b5c74e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    alt: "Description 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555685812-10a3c3f29c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    alt: "Description 5",
  },
  // Add more photos as needed
];

const SectionTwo = () => {
  return (
    <div className="relative overflow-hidden my-10 px-4">
      {" "}
      {/* Added vertical margin and horizontal padding */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Our Culinary Delights
      </h2>{" "}
      {/* Increased bottom margin */}
      <div className="flex animate-slide min-h-[250px] justify-center py-4">
        {" "}
        {/* Added vertical padding */}
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="photo-card transform transition-transform duration-500 hover:scale-105 mx-4" // Increased horizontal margin for spacing
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-48 h-48 object-cover rounded-lg mb-3" // Added bottom margin to images
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
            className="photo-card transform transition-transform duration-500 hover:scale-105 mx-4" // Increased horizontal margin for spacing
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-48 h-48 object-cover rounded-lg mb-3" // Added bottom margin to images
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
