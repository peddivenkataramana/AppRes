import React from "react";
import "./SectionFour.css";

const SectionFour = () => {
  const address = "1085 Hickory Point Mall, Forsyth, IL 62535";
  const googleMapsLink =
    "https://www.google.com/maps/place/Curry+Xpress/@39.9171401,-88.9631137,17z/data=!4m15!1m8!3m7!1s0x8874b3407d49757b:0x66a07404e7dd7452!2sCurry+Xpress!8m2!3d39.9171401!4d-88.9605388!10e1!16s%2Fg%2F11v003gbkn!3m5!1s0x8874b3407d49757b:0x66a07404e7dd7452!8m2!3d39.9171401!4d-88.9605388!16s%2Fg%2F11v003gbkn?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="relative my-4 px-4">
      <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg p-6">
        <h2 className="text-4xl font-bold text-center mb-6">Our Location</h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Map Section */}
          <div
            className="md:w-1/2 mb-4 md:mb-0 cursor-pointer"
            onClick={() => window.open(googleMapsLink, "_blank")}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087873!2d-88.9631137!3d39.9171401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874b3407d49757b%3A0x66a07404e7dd7452!2sCurry%20Xpress!5e0!3m2!1sen!2sus!4v1630391711954!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>

          {/* Address Section */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg text-center mb-4">Located in:</p>
            <p className="text-xl text-center font-semibold mb-6">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
