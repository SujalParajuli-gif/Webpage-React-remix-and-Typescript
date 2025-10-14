import React from "react";
import videoData from "../data/videos.json"; // importing JSON file

const OurProduct = () => {
  return (
    // Main section wrapper
    <section className="bg-white py-16">
      {/* Section title */}
      <h2 className="text-center text-3xl font-bold mb-12">Our Projects</h2>

      {/* Container for all videos */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoData.map((video, index) => (
          // Single video card
          <div key={index} className="relative bg-gray-100 rounded-md overflow-hidden shadow-md">
            {/* Project background video */}
            <video
              src={video.videoSrc}
              className="w-full h-[400px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>

            {/* Overlay for project name */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <p className="text-white text-3xl font-semibold tracking-widest bg-black/40 px-4 py-2 rounded">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
