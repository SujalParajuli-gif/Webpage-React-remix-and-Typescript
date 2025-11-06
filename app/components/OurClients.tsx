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
  // This keeps track of which review is currently visible
  const [index, setIndex] = useState(0);

  // This controls whether the reviews should slide automatically
  const [autoSlide, setAutoSlide] = useState(true);

  // These are used for drag/swipe functionality
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // This useEffect handles the automatic sliding logic
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
    startX.current = e.clientX;
    isDragging.current = true;
    setAutoSlide(false); // Stop auto slide when user starts dragging
  };

  // Function to handle drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;
    // Optional: you can show slight movement feedback if desired
  };

  // Function to handle drag end
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = e.clientX - startX.current;
    const threshold = 50; // how far to drag before changing slide

    if (diff > threshold) {
      // drag right → previous slide
      setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    } else if (diff < -threshold) {
      // drag left → next slide
      setIndex((prev) => (prev + 1) % reviews.length);
    }

    // Reset drag state
    startX.current = null;
    isDragging.current = false;
    setAutoSlide(true); // Resume auto slide after releasing
  };

  return (
    // Main container for the review section
    <div
      className="relative w-full overflow-hidden text-center text-white cursor-default"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // also ends drag when cursor leaves area
    >
      {/* Blue curved background with top and bottom waves */}
      <div className="relative bg-[#4577E4] py-30 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-20 before:bg-white before:rounded-b-[100%] after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-20 after:bg-white after:rounded-t-[100%]">
        {/* This is the visible content area on top of the background */}
        <div className="relative p-3 z-10 max-w-6xl mx-auto ">
          <h2 className="text-[33px] font-extrabold">Our Client Says</h2>

          {/* Container that holds all the review slides */}
          <div className=" relative min-h-70 md:h-55 overflow-hidden py-5">
            {/* This div moves left and right to show different reviews */}
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {/* Each review card */}
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-full flex flex-col items-center justify-center px-0"
                >
                  {/* Review text */}
                  {/* Review text */}
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

                  <div className="max-w-35">
                    {/* Client logo below the review text */}
                    <img
                      src={review.logo}
                      alt="client logo"
                      className=" filter brightness-0 invert mb-4 mt-2"
                    />
                  </div>

                  {/* Client name and title */}
                  <p className="font-semibold">
                    {review.name} - {review.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots at the bottom to switch between reviews */}
          <div className="  flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)} // Change review when dot is clicked
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white scale-80" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
