import React, { useState, useEffect, useRef } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// This array stores all the client reviews that will be displayed in the slider
const reviews = [
  {
    text: "I built a sales website with Matat. Professionalism at the highest level, creative, with great knowledge and experience.",
    name: "Stav Davidovich",
    title: "Jewelry Designer",
    logo: "/images/Customers/logo01.png",
  },
  {
    text: "The only programmer who tolerates my craziness. Cannon, creative, almost like me and provides service. Always there when you need it.",
    name: "Gilad Shimchi",
    title: "",
    logo: "/images/Customers/logo02.png",
  },
  {
    text: "Professionals!!! Highly recommend. Great knowledge, serious service and all with a smile and a good atmosphere :)",
    name: "Gili Greenberg",
    title: "Offix",
    logo: "/images/Customers/logo03.png",
  },
  {
    text: "I have worked and work with them on a lot of complex projects. Professionals one by one, lots of knowledge and experience.",
    name: "Elad Shalev",
    title: "CEO of Sortino Digital Marketing",
    logo: "/images/Customers/logo04.png",
  },
];

const OurCustomer: React.FC = () => {
  // index = which review is visible now (0..reviews.length-1)
  const [index, setIndex] = useState(0);

  // autoSlide = when true, reviews change on their own every 2.5s
  const [autoSlide, setAutoSlide] = useState(true);

  // drag/swipe helpers
  // startX remembers mouse X when drag starts; isDragging tells if mouse is held
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // auto sliding logic (runs when autoSlide is true)
  useEffect(() => {
    // If auto sliding is turned off, do nothing
    if (!autoSlide) return;

    // Move to the next review every 2.5 seconds
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 2500);

    // Clear the timer when the component is removed or updated
    return () => clearInterval(timer);
  }, [autoSlide]);

  // Function to handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    // remember where drag began and pause auto slide
    startX.current = e.clientX;
    isDragging.current = true;
    setAutoSlide(false); // Stop auto slide when user starts dragging
  };

  // Function to handle drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;
    // Optional: could show small movement feedback here if needed
  };

  // Function to handle drag end
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;

    // how far the mouse moved horizontally
    const diff = e.clientX - startX.current;
    const threshold = 50; // minimum pixels to count as a slide

    if (diff > threshold) {
      // drag right → previous slide
      setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    } else if (diff < -threshold) {
      // drag left → next slide
      setIndex((prev) => (prev + 1) % reviews.length);
    }

    // reset drag state and resume auto slide
    startX.current = null;
    isDragging.current = false;
    setAutoSlide(true); // Resume auto slide after releasing
  };

  return (
    // Main container for the review section
    // onMouse* handlers enable drag/swipe on desktop
    <div
      className="relative w-full overflow-hidden text-center text-white cursor-default"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // also ends drag when cursor leaves area
    >
      {/* Blue curved background with top and bottom waves */}
      <div className="relative bg-[#4577E4] py-30 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-20 before:bg-white before:rounded-b-[100%] after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-20 after:bg-white after:rounded-t-[100%]">
        {/* Visible content area */}
        <div className="relative p-3 z-10 max-w-6xl mx-auto ">
          <h2 className="text-[33px] font-extrabold">Our Client Says</h2>

          {/* Slider viewport (hides overflow) */}
          <div className=" relative min-h-70 md:h-55 overflow-hidden py-5">
            {/* Track that shifts left/right based on index (100% per slide) */}
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {/* One full-width slide per review */}
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-full flex flex-col items-center justify-center px-0"
                >
                  {/* Review text with quote icons */}
                  <div className="relative max-w-150 mx-auto px-2 ">
                    <RiDoubleQuotesL
                      className="absolute left-[-26px] top-1/2 -translate-y-1/2 text-white/60 pointer-events-none select-none"
                      size={24} // tweak 22–28 to taste
                    />
                    <RiDoubleQuotesR
                      className="absolute right-[-26px] top-1/2 -translate-y-1/2 text-white/60 pointer-events-none select-none"
                      size={24}
                    />
                    <p className="text-base md:text-[18px] leading-relaxed mb-6">
                      {review.text}
                    </p>
                  </div>

                  {/* Logo below the text */}
                  <div className="max-w-35">
                    <img
                      src={review.logo}
                      alt="client logo"
                      className=" filter brightness-0 invert mb-4 mt-2"
                    />
                  </div>

                  {/* Client name + optional title */}
                  <p className="font-semibold">
                    {review.name} - {review.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots to jump to any review */}
          <div className="  flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)} // Change review when dot is clicked
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white scale-80" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${i + 1}`}
                aria-pressed={i === index}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
