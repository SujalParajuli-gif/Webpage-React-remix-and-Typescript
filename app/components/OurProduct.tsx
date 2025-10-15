import React from "react";
import items from "../data/portfolio.json";  // videos JSON: [{ title?, videoSrc, order? }, ...]

import VideoCard from "../components/VideoCard";
import PhotoCard from "../components/PhotoCard";

// TS type annotation for strict ts errors
type PortfolioItem = {
  type: "video" | "image"; // tells which component to render
  src: string;             // media path
           // only for videos
};

export default function OurProduct() {
  // main area
  return (
    <section className="bg-white py-16">
      {/* section heading */}
      <h2 className="text-center text-3xl font-bold mb-12">Our Projects</h2>

      {/* mixed grid layout of (videos + photos together in the way we have it in the JSON file) */}
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {(items as PortfolioItem[]).map((item, idx) =>
          item.type === "video" ? (
            // render a video card when type is "video"
            <VideoCard key={`v-${idx}`} src={item.src} />
          ) : (
            // render a photo card when type is "image"
            <PhotoCard key={`p-${idx}`} src={item.src} />
          )
        )}
      </div>
    </section>
  );
}
