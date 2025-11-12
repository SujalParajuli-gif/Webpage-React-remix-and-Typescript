import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// responsive 3-column layout
const VibezLayout_3: React.FC = () => {
  useEffect(() => {
    // start AOS (scroll animation) one time on mount
    // duration = speed, easing = feel, once = run only the first time
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60, // animation starts a bit after the section enters the view
    });
  }, []);

  // feature cards data
  // each item has an image path and a short title text
  const features = [
    {
      img: "/images/Vibez/image/mainft-col-1.png",
      title: "Purchase a gift card to use on the website or store",
    },
    {
      img: "/images/Vibez/image/mainft-col-2.png",
      title:
        "Log in to the website using a mobile code, email, or Google account",
    },
    {
      img: "/images/Vibez/image/mainft-col-3.png",
      title: "A variety of advanced payment methods in the market",
    },
  ];

  return (
    // section wrapper for spacing + background
    // data-aos makes the whole block fade from the right
    <section
      className="w-full bg-white py-10 md:py-15"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      {/* centered content area with side paddings */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 sm:px-30 sm:w43xl">
        {/* grid for the 3 cards
           - 1 column on mobile
           - 3 columns on md and above
           - gap controls space between cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
          {features.map((item, i) => (
            <div
              key={i}
              // relative so the title can be absolutely positioned on top
              className="relative flex flex-col items-center justify-end text-center overflow-hidden"
            >
              {/* image slot
                 - uses object-cover so image fills neatly */}
              <div className="relative w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-auto h-auto object-cover"
                />
              </div>

              {/* title placed over the image
                 - absolute + left-1/2 + -translate-x-1/2 centers it horizontally
                 - width controls line breaks
                 - responsive paddings for better look on small screens */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] lg:pr-9  md:px-1 sm:py-10  sm:px-10 sm:left-60 ">
                <h2 className="text-white font-extrabold lg:text-[28px] sm:text-[24px]   md:text-[20px] leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_3;
