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
    <section className="m-0 p-0 ">
      <div className="relative overflow-hidden px-4">
        <div className="background-image"></div>
        <h2 className="text-3xl font-bold text-center mb-6 mt-4">
          {" "}
          {/* Added mt-4 for margin above */}
          Explore Our Culinary Delights
        </h2>
        <div className="flex animate-slide justify-center items-center py-4 space-x-4">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img
                src={photo.src}
                alt={photo.alt}
                className="object-cover rounded-lg w-full h-[150px]" // Set height and width here
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{photo.alt}</h3>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite scroll effect */}
          {photos.map((photo) => (
            <div key={photo.id + 100} className="photo-card">
              <img
                src={photo.src}
                alt={photo.alt}
                className="object-cover rounded-lg w-full h-[150px]" // Same here
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{photo.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
