import React, { useRef, useEffect, useState } from "react";

// List of logo image paths that will be shown in the slide bar
const logos = [
  "/images/sidebar/logo01.png",
  "/images/sidebar/logo02.png",
  "/images/sidebar/logo03.png",
  "/images/sidebar/logo04.png",
  "/images/sidebar/logo05.png",
  "/images/sidebar/logo06.png",
  "/images/sidebar/logo07.png",
  "/images/sidebar/logo08.png",
  "/images/sidebar/logo09.png"
];

const Slidebar: React.FC = () => {
  // This reference will be used to control the scrolling div
  const scrollRef = useRef<HTMLDivElement>(null);

  // These references store values for the dragging action
  const isDown = useRef(false); // To check if the mouse is being held down
  const startX = useRef(0); // Stores the X position where the drag started
  const scrollStart = useRef(0); // Stores the scroll position before dragging

  // This state controls if the slide should move automatically
  const [autoSlide, setAutoSlide] = useState(true);

  // This useEffect runs the automatic sliding animation
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let frameId: number;

    // Function to move the logos automatically from left to right
    const slide = () => {
      if (!autoSlide || !slider) return;

      // Scroll the logos slowly to the right
      slider.scrollLeft -= 1;

      // When the scroll reaches the beginning, reset it to the middle
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }

      // Keep the animation running smoothly
      frameId = requestAnimationFrame(slide);
    };

    slide();

    // Stop the automatic sliding after 10 seconds
    const stopTimer = setTimeout(() => setAutoSlide(false), 10000);

    // Cleanup function to stop animation and timer when the component unmounts
    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(stopTimer);
    };
  }, [autoSlide]);

  // This function runs when the user starts dragging with the mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setAutoSlide(false); // Pause auto sliding while dragging
    if (!scrollRef.current) return;

    isDown.current = true;
    startX.current = e.pageX; // Record where the drag started
    scrollStart.current = scrollRef.current.scrollLeft; // Save the initial scroll position
  };

  // This function runs when the user stops dragging or moves the cursor out
  const handleMouseUpOrLeave = () => {
    isDown.current = false; // End the dragging action
  };

  // This function runs while the user moves the mouse during dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;

    e.preventDefault(); // Prevent unwanted text selection
    const walk = (e.pageX - startX.current) * 1.2; // Calculate how far the mouse moved
    scrollRef.current.scrollLeft = scrollStart.current - walk; // Move the scroll based on mouse movement
  };

  return (
    // Main container for the slide bar
    <div className="w-full py-6 overflow-hidden bg-transparent">
      {/* This div holds all logos and handles dragging and auto scrolling */}
      <div
        ref={scrollRef}
        className="flex gap-20 overflow-hidden select-none no-scrollbar px-10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Duplicate logos array to make the loop appear endless */}
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center">
            <img
              src={logo}
              alt={`logo-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidebar;
