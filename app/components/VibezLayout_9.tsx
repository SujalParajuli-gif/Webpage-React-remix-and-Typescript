import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// responsive 3-column layout
const VibezLayout_9: React.FC = () => {
  useEffect(() => {
    // initialize AOS animation on scroll
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  // feature data (each card image + title)
  const features = [
    {
      img: "/images/Vibez/image/app-3.jpg",
      title:
        "Dynamic bar to calculate the amount left until you get free shipping",
    },
    {
      img: "/images/Vibez/image/app-2.jpg",
      title:
        "Keep your customers informed when the product they wanted is back in stock",
    },
    {
      img: "/images/Vibez/image/app-new.jpg",
      title: "Connect to your WhatsApp business account",
    },
  ];

  return (
    // added fade-right to the whole component
    <section
      className="w-full bg-white py-10 md:py-15"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0 sm:px-30 sm:w43xl">
        {/* grid with 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
          {features.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-end text-center overflow-hidden"
            >
              {/* image section */}
              <div className="relative w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-auto h-auto object-cover"
                />
              </div>

              {/* title text above the image */}
              <div className="absolute -top-2 left-1/2  -translate-x-1/2 w-[90%] lg:pr-10  md:px-0 sm:py-10  sm:px-10 sm:left-60 ">
                <h2 className="text-white font-extrabold lg:text-[25px] sm:text-[28px]   md:text-[18px] leading-tight">
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

export default VibezLayout_9;
