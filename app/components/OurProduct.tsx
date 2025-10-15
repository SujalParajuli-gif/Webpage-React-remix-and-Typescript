import React, { useEffect, useState } from "react";
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

  // show 3 rows first (9 items), then add 2 rows (6 items) per click
  const list = items as PortfolioItem[]; // typed list
  const INITIAL = 9;  // 3x3
  const STEP = 6;     // +2 rows each time
  const [count, setCount] = useState<number>(INITIAL); // how many items to show

  // simple fade trigger that re-runs on each load-more click
  const [armed, setArmed] = useState(false); // becomes true one frame after render
  useEffect(() => {
    setArmed(false); // reset before arming
    const id = requestAnimationFrame(() => setArmed(true)); // arm next frame to trigger transition
    return () => cancelAnimationFrame(id); // cleanup
  }, [count]); // re-trigger animation when count changes

  // current slice to display
  const visible = list.slice(0, Math.min(count, list.length)); // items to render
  const showButton = count < list.length; // hide button when all items shown

  // added: small delay after clicking the button (slower reveal)
  const [loading, setLoading] = useState(false); // lock button during delay

  // click handler to reveal more items (with delay)
  const onLoadMore = () => {
    if (loading) return; // prevent double clicks
    setLoading(true); // start delay
    setTimeout(() => {
      setCount((c) => Math.min(c + STEP, list.length)); // grow by 2 rows
      setLoading(false); // end delay
    }, 600); // delay after click (ms)
  };

  return (
    <section className="bg-white py-16">
      {/* section heading */}
      <h2 className="text-center text-3xl font-bold mb-12">Our Projects</h2>

      {/* mixed grid layout of (videos + photos together in the way we have it in the JSON file) */}
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        {visible.map((item, idx) =>
          item.type === "video" ? (
            // render a video card when type is "video"
            <div
              key={`v-${idx}`}
              style={{ ["--i" as any]: idx }} // tiny stagger index
              className={[
                "will-change-transform transition-all duration-500",
                "opacity-0 translate-y-1",
                armed && "opacity-100 translate-y-0",
                "[transition-delay:calc(var(--i)*40ms)]",
              ].filter(Boolean).join(" ")}
            >
              <VideoCard src={item.src} />
            </div>
          ) : (
            // render a photo card when type is "image"
            <div
              key={`p-${idx}`}
              style={{ ["--i" as any]: idx }} // tiny stagger index
              className={[
                "will-change-transform transition-all duration-500",
                "opacity-0 translate-y-1",
                armed && "opacity-100 translate-y-0",
                "[transition-delay:calc(var(--i)*40ms)]",
              ].filter(Boolean).join(" ")}
            >
              <PhotoCard src={item.src} />
            </div>
          )
        )}
      </div>

      {/* load more button (disappears when everything is loaded) */}
      {showButton && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={onLoadMore} // reveal +2 rows (with delay)
            disabled={loading} // lock while waiting
            aria-busy={loading} // a11y hint
            className={[
              "px-6 py-3 rounded-full text-white font-semibold shadow transition",
              "bg-blue-600 hover:opacity-90",
              loading && "opacity-70 cursor-not-allowed animate-pulse", // visual feedback during delay
            ].join(" ")}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </section>
  );
}
