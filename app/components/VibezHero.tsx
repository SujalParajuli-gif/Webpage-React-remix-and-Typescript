import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

// Added: AOS = animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";

const VibezHero: React.FC = () => {
  useEffect(() => {
    // init once, slow + smooth easing
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    // refresh after mount so image sizing doesn't break offsets
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    // parent that holds the stack meaning the texts as a child
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* image bg */}
      <img
        src="/images/Vibez/image/banner.jpg"
        alt="VIBEZ banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* full-screen overlay that uses flex elements so content stays responsive */}
      <div
        className="
          absolute inset-0 z-10
          flex items-center justify-end      
            /* puts content on the right */
          px-4 md:px-10 lg:px-16               /* We added a responsive side paddings */
        "
      >
        {/* content wrapper on the right */}
        <div
          className="
            max-w-[720px] w-full
            mr-2 md:mr-6 lg:mr-10              
          "
        >
          {/* AOS: fade to the right */}
          <h1
            className="text-white font-extrabold leading-tight text-[40px] md:text-[72px] lg:text-[88px]"
            data-aos="fade-right"
          >
            VIBEZ
          </h1>

          {/* AOS: fade to the right with slight delay */}
          <h2
            className="text-white font-extrabold text-[24px] md:text-[36px] lg:text-[44px] mt-2"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Platform for E-commerce Websites
          </h2>

          {/* AOS: fade to the right,added delay for paragraph */}
          <p
            className="text-white/90 mt-4 text-[14px] md:text-[16px] font-semibold max-w-[48ch]"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Do we also want to start selling online in less than a month? Join
            hundreds of customers who have already chosen VIBEZ and discover a
            sales rate never known!
          </p>

          {/* animation fades to the right when reloads/renders */}
          <div
            className="mt-6 md:mt-8"
            data-aos="fade-right"
            data-aos-delay="450"
          >
            <button
              type="button"
              // button arrow hover behavior works opposite of the header hover
              className="
                group relative rounded-3xl
                px-6 py-3 pl-6
                text-white font-extrabold
                bg-[linear-gradient(108deg,#6b00b9_0%,#a200ff_100%)]
                transition-[padding,background,opacity,transform] duration-300
                hover:pl-[70px]
                shadow-[0_10px_18px_rgba(0,0,0,0.15)]
              "
            >
              <FiArrowLeft
                className="
                  absolute left-5 top-1/2 -translate-y-1/2
                  opacity-0 -translate-x-2
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-x-0
                "
                aria-hidden="true"
                size={18}
              />
              <span className="inline-block">Let's get started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezHero;
