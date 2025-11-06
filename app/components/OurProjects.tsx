import React, { useEffect, useState } from "react";
import items from "../data/portfolio.json"; // mixed media list

import VideoCard from "./VideoCard";
import PhotoCard from "./PhotoCard";

// simple type for our items
type PortfolioItem = {
  type: "video" | "image"; // which component to show
  src: string; // file path
};

export default function OurProduct() {
  // main list
  const list = items as PortfolioItem[];

  // show 3 rows first (9 items), then add 2 rows (6 items) per click
  const INITIAL = 9; // 3x3
  const STEP = 6; // +2 rows each time
  const [count, setCount] = useState<number>(INITIAL); // how many items to show

  // fade-in flag (re-arms after each load-more)
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    setArmed(false); // reset first
    const id = requestAnimationFrame(() => setArmed(true)); // arm on next frame
    return () => cancelAnimationFrame(id); // cleanup
  }, [count]);

  // slice for current view
  const visible = list.slice(0, Math.min(count, list.length));
  const showButton = count < list.length;

  // loading delay for button (shows spinner)
  const [loading, setLoading] = useState(false);

  // click -> reveal more with small delay
  function onLoadMore() {
    if (loading) return; // prevent double click
    setLoading(true);
    setTimeout(() => {
      setCount((c) => Math.min(c + STEP, list.length)); // add 2 rows
      setLoading(false);
    }, 500); // delay in ms
  }

  return (
    <section className="bg-white py-16">
      {/* section heading */}
      <h2 className="mb-12 text-center text-[35px] font-light">Our Projects</h2>

      {/* grid of videos + photos in the order from JSON */}
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-15 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, idx) => {
          // stagger delay per item
          const delay = `calc(${idx} * 100ms)`;

          // base transition classes
          const base =
            "will-change-transform transition-all [transition-delay:var(--d)]";
          // start/end of fade
          const start = "opacity-0 translate-y-1";
          const end = "opacity-100 translate-y-0";
          // pick duration (videos slower)
          const dur = item.type === "video" ? "duration-400" : "duration-500";

          // final class: start or end based on `armed`
          const wrapClass = `${base} ${dur} ${armed ? end : start}`;

          if (item.type === "video") {
            return (
              <div
                key={`v-${idx}`}
                style={{ ["--d" as any]: delay }}
                className={wrapClass}
              >
                <VideoCard src={item.src} />
              </div>
            );
          }

          // image case
          return (
            <div
              key={`p-${idx}`}
              style={{ ["--d" as any]: delay }}
              className={wrapClass}
            >
              <PhotoCard src={item.src} />
            </div>
          );
        })}
      </div>

      {/* load more button (hidden when all items shown) */}
      {showButton && (
        <div className="mt-10 flex justify-center">
          {/* stack spinner above button */}
          <div className="flex flex-col items-center">
            {/* spinner shown while loading */}
            {loading && (
              <svg
                viewBox="0 0 32 32"
                className="mb-4 h-[100px] w-[100px] animate-spin text-[#2d5fcc] [animation-duration:1.7s] [animation-timing-function:ease]"
                aria-hidden="true"
                fill="currentColor"
              >
                <g transform="translate(16,16)">
                  <g transform="rotate(-145) translate(12,0)">
                    <circle r="1.2" opacity="0.65" />
                  </g>
                  <g transform="rotate(-110) translate(12,0)">
                    <circle r="1.6" opacity="0.8" />
                  </g>
                  <g transform="rotate(-75) translate(12,0)">
                    <circle r="2.2" opacity="0.9" />
                  </g>
                  <g transform="rotate(-40) translate(12,0)">
                    <circle r="3" opacity="1" />
                  </g>
                </g>
              </svg>
            )}

            <button
              onClick={onLoadMore} // reveal more items
              disabled={loading} // lock during delay
              aria-busy={loading} // a11y hint
              className={`inline-flex items-center gap-3 rounded-full px-14 py-3.5 font-semibold text-white shadow transition
                bg-blue-600 hover:opacity-90
                ${
                  loading ? "cursor-not-allowed opacity-70 animate-pulse" : ""
                }`}
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
