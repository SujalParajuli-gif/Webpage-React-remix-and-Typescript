import React, { useEffect } from "react";
// AOS = animation on scroll library (for fade-up on the whole section)
import AOS from "aos";
import "aos/dist/aos.css";

// logos used in the slider row (paths stay the same)
// note: object-fit is "contain" so mixed sizes look clean in one line
const logos = [
  "/images/Vibez/logos/clients-logo-1.png",
  "/images/Vibez/logos/clients-logo-2.png",
  "/images/Vibez/logos/clients-logo-3.png",
  "/images/Vibez/logos/clients-logo-4.png",
  "/images/Vibez/logos/clients-logo-5.png",
  "/images/Vibez/logos/LOGO.svg",
  "/images/Vibez/logos/black-logo.svg",
  "/images/Vibez/logos/agrooz-logo.svg",
  "/images/Vibez/logos/argo-logo.svg",
  "/images/Vibez/logos/beautics-logo.svg",
  "/images/Vibez/logos/blueberry-logo.svg",
  "/images/Vibez/logos/header-logo.svg",
  "/images/Vibez/logos/Image-35.png",
  "/images/Vibez/logos/logo-1.png",
  "/images/Vibez/logos/logo-532178.png",
  "/images/Vibez/logos/logo-no-slogan.svg",
  "/images/Vibez/logos/logo-white-slogen.svg",
  "/images/Vibez/logos/logoslider.png",
  "/images/Vibez/logos/tenniszone-svg-logo.svg",
  "/images/Vibez/logos/mini-stylish-logo.svg",
  "/images/Vibez/logos/offroad-logo.svg",
  "/images/Vibez/logos/republic-logo.svg",
  "/images/Vibez/logos/salinksa-logo.svg",
  "/images/Vibez/logos/the-market-logo.svg",
].filter(Boolean); // filter(Boolean) keeps only truthy values (just in case)

// duplicate the row once so the animation can loop without a visible gap
// track = original logos + same logos again => translates by 50% for a seamless loop
const track = [...logos, ...logos];

const VibezLogoSlider: React.FC = () => {
  // init AOS one time for smooth fade-up on entering viewport
  useEffect(() => {
    AOS.init({
      duration: 1000, // how long the fade-up takes
      easing: "ease-out-cubic", // soft easing
      once: true, // run only on first scroll-in
      offset: 60, // start little after entering
    });
  }, []);

  // heading text shown above the slider
  const title = "Hundreds of customers have already chosen VIBEZ";

  return (
    // section has overflow hidden so the sliding row doesn't show outside
    // data-aos makes the whole section fade-up on scroll
    <section
      className="w-full pt-10 md:pt-14 overflow-hidden"
      data-aos="fade-up"
    >
      {/* section heading (centered, responsive font sizes) */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-[50px] font-extrabold leading-tight text-[#270c54] px-4 pt-10">
        {title}
      </h2>

      {/* wrapper limits the visible area and centers the moving row */}
      <div className="relative mt-8 max-w-[1150px] mx-auto overflow-hidden py-4 sm:py-6">
        {/* moving row: flex keeps logos in one line; min-w-max prevents line wrap
           animate-vibez-slider moves the row left on a loop */}
        <div className="flex items-center gap-8 sm:gap-12 md:gap-13 min-w-max animate-vibez-slider will-change-transform">
          {track.map((src, i) => (
            // each logo is a fixed-size box so the row height stays stable
            <div key={`${src}-${i}`} className="shrink-0 flex justify-center">
              {/* img uses object-contain so different logo shapes fit nicely */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="
                  h-[28px] sm:h-[36px] md:h-[35px] lg:h-[35px]
                  w-35 object-contain 
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* keyframes: translate from 0 to -50% (half the full duplicated width)
         because track is doubled, -50% lands on the start of the second copy,
         so the loop looks continuous */}
      <style>{`
        @keyframes vibez-slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-vibez-slider {
          animation: vibez-slider 70s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VibezLogoSlider;
