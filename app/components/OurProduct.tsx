import React from "react";
import videoData from "../data/videos.json"; // importing JSON file for videos and photos
import photoData from "../data/photos.json"; 

const OurProduct = () => {
  return (
    // Main section 
    <section className="bg-white py-16">
      {/* Section title */}
      <h2 className="text-center text-3xl font-bold mb-12">Our Projects</h2>

      {/* Container for all videos */}
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {videoData.map((video, index) => (
          // Single video card
          <div key={index} className="relative bg-gray-100 overflow-hidden shadow-md">
            {/* Project background video that plays*/}
            <video
              src={video.videoSrc}
              className="w-full h-[500px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            {/* Overlay for project name */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <p className="text-white text-5xl font-bold tracking-widest px-4 py-2 rounded">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Container for all photos (added) */}
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mt-16">
        {photoData.map((photo, index) => (
          // Single photo card (mirrors video card)
          <div key={`img-${index}`} className="relative bg-gray-100 overflow-hidden shadow-md">
            {/* Project background image */}
            <img
              src={photo.imageSrc}
              alt={photo.title || "Project image"}
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />

            {/* Overlay for project name */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <p className="text-white text-5xl font-bold tracking-widest px-4 py-2 rounded">
                {photo.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
