import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// responsive 3-column layout
const VibezLayout_3: React.FC = () => {
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
    // added fade-right to the whole component
    <section
      className="w-full bg-white py-10 md:py-15"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
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
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] px-4">
                <h2 className="text-white font-extrabold text-xl sm:text-3xl md:text-[25px] leading-tight">
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
