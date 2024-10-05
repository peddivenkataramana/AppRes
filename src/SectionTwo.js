import React from "react";
import "./PhotoGrid.css";
import butterChickenImage from "./assessts/butterchicken.jpeg";
import chatImage from "./assessts/chat.jpeg";
import choleImage from "./assessts/chole.jpeg";
import dalImage from "./assessts/dal.jpeg";
import gulabImage from "./assessts/gulab.jpeg";
import lassiImage from "./assessts/lasi.jpeg"; // Fixed typo in the import name
import samosaImage from "./assessts/samosa.jpeg";
import tandoriImage from "./assessts/tandori.jpeg";
import biryaniImage from "./assessts/biryani.jpeg";
import naanImage from "./assessts/naan.png";
import paneerImage from "./assessts/pannerbutter.jpeg"; // Check for correct spelling here as well

const photos = [
  { id: 1, src: butterChickenImage, alt: "Butter Chicken" },
  { id: 2, src: paneerImage, alt: "Paneer Tikka" },
  { id: 3, src: biryaniImage, alt: "Biryani" },
  { id: 4, src: dalImage, alt: "Dal Makhani" },
  { id: 5, src: samosaImage, alt: "Samosa" },
  { id: 6, src: choleImage, alt: "Chole" },
  { id: 7, src: chatImage, alt: "Chaat" },
  { id: 8, src: gulabImage, alt: "Gulab Jamun" },
  { id: 9, src: lassiImage, alt: "Lassi" },
  { id: 10, src: tandoriImage, alt: "Tandoori Chicken" },
  { id: 11, src: naanImage, alt: "Naan" },
];

const SectionTwo = () => {
  return (
    <div className="relative overflow-hidden my-10 px-4">
      <div className="background-image"></div> {/* Background Image Layer */}
      <h2 className="text-3xl font-bold text-center mb-6">
        {" "}
        {/* Reduced bottom margin */}
        Explore Our Culinary Delights
      </h2>
      <div className="flex animate-slide min-h-[250px] justify-center py-4">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card mx-4">
            <img
              src={photo.src}
              alt={photo.alt}
              className="object-cover rounded-lg mb-3"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold">{photo.alt}</h3>
            </div>
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {photos.map((photo) => (
          <div key={photo.id + 100} className="photo-card mx-4">
            <img
              src={photo.src}
              alt={photo.alt}
              className="object-cover rounded-lg mb-3"
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
