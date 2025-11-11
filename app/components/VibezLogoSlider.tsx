import React, { useEffect } from "react";
// Added: AOS for scroll-based animations
import AOS from "aos";
import "aos/dist/aos.css";

// we list all client logos used in the slider
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
].filter(Boolean);

// duplicated row so animation loops seamlessly
const track = [...logos, ...logos];

const VibezLogoSlider: React.FC = () => {
  // added AOS once for smooth fade-up animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth fade speed
      easing: "ease-out-cubic",
      once: true, // only animate once per scroll
      offset: 60, // starts slightly after entering viewport
    });
  }, []);

  // heading text
  const title = "Hundreds of customers have already chosen VIBEZ";

  return (
    // added aos fade-up like your reference layout
    <section
      className="w-full py-10 md:py-14 overflow-hidden"
      data-aos="fade-up"
    >
      {/* section heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-[42px] font-extrabold leading-tight text-[#270c54] px-4">
        {title}
      </h2>

      {/* wrapper that hides overflow and centers slider */}
      <div className="relative mt-8 max-w-[1400px] mx-auto overflow-hidden py-4 sm:py-6">
        {/* moving row */}
        <div className="flex items-center gap-8 sm:gap-12 md:gap-13 min-w-max animate-vibez-slider will-change-transform">
          {track.map((src, i) => (
            <div key={`${src}-${i}`} className="shrink-0 flex justify-center">
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

      {/* keyframes for smooth infinite scroll */}
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
