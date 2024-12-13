import React from "react";
import "./SectionFour.css";

const SectionFour = () => {
  const address = "1085 Hickory Point Mall, Forsyth, IL 62535";
  const googleMapsLink =
    "https://www.google.com/maps/place/Curry+Xpress/@39.9171401,-88.9631137,17z";

  return (
    <div id="location" className="relative py-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Our Location</h2>
        <div className="flex flex-col md:flex-row">
          {/* Map Section */}
          <div className="md:w-1/2 relative">
            <div
              className="absolute inset-0 cursor-pointer hover:opacity-75 transition-opacity"
              onClick={() => window.open(googleMapsLink, "_blank")}
              style={{ zIndex: 1 }}
              aria-label="Open in Google Maps"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087873!2d-88.9631137!3d39.9171401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874b3407d49757b%3A0x66a07404e7dd7452!2sCurry%20Xpress!5e0!3m2!1sen!2sus!4v1630391711954!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: "none", aspectRatio: "1 / 1" }} // Maintain aspect ratio
              allowFullScreen
              loading="lazy"
              title="Map"
              aria-label="Google Map of Curry Xpress"
            ></iframe>
          </div>

          {/* Address Section */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-center">Located in:</p>
            <p className="text-xl text-center font-semibold">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
