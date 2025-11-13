// app/components/VibezLayout_5.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VibezLayout_5: React.FC = () => {
  useEffect(() => {
    // init AOS for scroll animations
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    // section wrapper for quick add to cart layout
    <section className="w-full bg-white py-10 md:py-15">
      {/* main container same idea as container-full */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-5">
        {/* top text area (title + description) */}
        <div className="max-w-lg px-10 mb-10 md:mb-14 lg:ml-185 leading-relaxed">
          <h2
            className="
              text-[#270c54]
              text-2xl md:text-3xl lg:text-5xl w-110
              font-extrabold
              leading-tight
            "
            // data-aos="fade-right"
            data-aos-delay="100"
          >
            Allow products to be quickly added to your cart
          </h2>

          <div
            className="mt-4 text-[10px] md:text-base text-[#270c54]"
            // data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* description text same as original block */}
            <p className="font-extrabold w-115 ">
              The baby is crying, the boss is waiting, the laundry has been
              sitting in the machine since the morning, and the dog has to be
              taken out for a walk.
              <br />
              Your customers are living at a fast pace, and you need to tailor
              the user experience for them. If we don't allow customers to make
              a quick purchase, while life goes on, we will miss out on many
              sales.
              <br />
              That's why we developed the "Quick Add to Cart" feature, which
              will allow your customers to choose a size, color, and a variety
              of other variations, and add the product to the cart without
              unnecessary clicks, or go to a product page.
              <br />
              Simply put, speed is the name of the game.
            </p>
          </div>
        </div>

        {/* bottom part images group  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 ">
          {/* first image column */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {/* inner wrapper to control width */}
            <div className="relative w-full max-w-[260px] md:max-w-[280px] lg:max-w-[500px]">
              <img
                src="/images/Vibez/image/process-1.png"
                alt="Quick add to cart process step 1"
                className="
                  min-w-120 h-auto lg:relative lg:bottom-55
                "
                loading="lazy"
              />
            </div>
          </div>

          {/* second image column */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="w-full max-w-[260px] md:max-w-[280px] lg:max-w-[350px]">
              <img
                src="/images/Vibez/image/process-2.png"
                alt="Quick add to cart process step 2"
                className="
                  min-w-95 h-auto lg:relative lg:left-15 lg:bottom-18
                "
                loading="lazy"
              />
            </div>
          </div>

          {/* third image column */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="w-full max-w-[260px] md:max-w-[280px] lg:max-w-[300px]">
              <img
                src="/images/Vibez/image/process-3.png"
                alt="Quick add to cart process step 3"
                className="
                  min-w-85 h-auto lg:relative lg:top-15
                "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_5;
