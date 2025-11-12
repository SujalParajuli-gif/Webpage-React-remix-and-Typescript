import React, { useRef, useEffect, useState } from "react";

// logos that we show inside the sliding row
// note: we will duplicate this list when rendering to fake an infinite loop
const logos = [
  "/images/sidebar/logo01.png",
  "/images/sidebar/logo02.png",
  "/images/sidebar/logo03.png",
  "/images/sidebar/logo04.png",
  "/images/sidebar/logo05.png",
  "/images/sidebar/logo06.png",
  "/images/sidebar/logo07.png",
  "/images/sidebar/logo08.png",
  "/images/sidebar/logo09.png",
];

const Slidebar: React.FC = () => {
  // ref to the scrollable row (we manually change scrollLeft on this div)
  const scrollRef = useRef<HTMLDivElement>(null);

  // refs for drag logic (we keep them in refs so values persist without re-renders)
  const isDown = useRef(false); // true while mouse is held down
  const startX = useRef(0); // mouse X position when drag started
  const scrollStart = useRef(0); // scrollLeft value at drag start

  // when true, the row auto-slides by itself; we turn it off on drag or after a timer
  const [autoSlide, setAutoSlide] = useState(true);

  // runs the automatic sliding loop using requestAnimationFrame
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let frameId: number;

    // moves the row a tiny bit each frame to the right (by decreasing scrollLeft)
    const slide = () => {
      if (!autoSlide || !slider) return;

      // slow and steady slide
      slider.scrollLeft -= 1;

      // when reaching the far left, jump to the middle so the loop looks endless
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }

      // keep the animation going
      frameId = requestAnimationFrame(slide);
    };

    slide(); // start the loop

    // stop auto sliding after 10s so it doesn't run forever
    const stopTimer = setTimeout(() => setAutoSlide(false), 10000);

    // clean up animation frame + timer if component unmounts or autoSlide changes
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(stopTimer);
    };
  }, [autoSlide]);

  // start dragging: remember mouse position and current scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setAutoSlide(false); // pause auto slide while the user interacts
    if (!scrollRef.current) return;

    isDown.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  // stop dragging: reset the flag
  const handleMouseUpOrLeave = () => {
    isDown.current = false;
  };

  // while dragging: compute how far we moved and update scrollLeft
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;

    e.preventDefault(); // avoid text selections during drag
    const walk = (e.pageX - startX.current) * 1.2; // drag sensitivity
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  return (
    // outer wrapper controls vertical padding and hides any overflow
    <div className="w-full py-6 overflow-hidden bg-transparent">
      {/* scrollable row (we attach ref + mouse handlers here) */}
      <div
        ref={scrollRef}
        className="flex gap-20 overflow-hidden select-none no-scrollbar px-10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {/* render the logos twice back-to-back so the loop looks continuous */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img src={logo} alt={`logo-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
