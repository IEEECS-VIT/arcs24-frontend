import React from "react";
import "../index.css";

function Resp() {
  const sponsors = [
    { src: "echoell.svg", alt: "Echo3D", className: "top-0 left-1/2 transform -translate-x-1/2" },
    { src: "bolt.svg", alt: "Axure", className: "top-1/4 right-0 transform translate-x-1/2" },
    { src: "interlock.svg", alt: "Interlock", className: "top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" },
    { src: "capsell.svg", alt: "Capsule", className: "bottom-1/4 right-0 transform translate-x-1/2" },
    { src: "featherdev.svg", alt: "FeatherDev", className: "bottom-0 left-1/2 transform -translate-x-1/2" },
    { src: "boltshift.svg", alt: "Boltshift", className: "bottom-1/4 left-0 transform -translate-x-1/2" },
    { src: "fashionell.svg", alt: "Galaxy Cinemas", className: "top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2" },
    { src: "fashion.svg", alt: "Fashion Factory", className: "top-1/4 left-0 transform -translate-x-1/2" },
  ];

  return (
    <div className="animated-gradient relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <p className="align-middle text-center text-2xl font-bold mb-8">
        OUR PREVIOUS SPONSORS
      </p>
      <div className="relative w-full h-full">
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`absolute ${sponsor.className} flex items-center justify-center`}>
            <img
              src={sponsor.src}
              className="rounded-full object-cover w-24 h-24"
              alt={sponsor.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resp;
