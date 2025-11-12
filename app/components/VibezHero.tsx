import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

// Added: AOS = animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";

const VibezHero: React.FC = () => {
  useEffect(() => {
    // init once, slow + smooth easing
    // duration = animation speed, easing = feel, once = run only on first reveal
    // offset = start animation a bit after the element enters the screen
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    // refresh after mount so image sizing doesn't break offsets
    // we do this because large images can shift layout after load
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  return (
    // parent that holds the stack meaning the texts as a child
    // relative = allows child elements to be positioned absolute inside
    // min-h makes the hero tall; overflow-hidden hides any overflow of bg image
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* image bg */}
      {/* full-bleed background image using absolute + object-cover */}
      <img
        src="/images/Vibez/image/banner.jpg"
        alt="VIBEZ banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* full-screen overlay that uses flex elements so content stays responsive */}
      {/* absolute overlay fills the hero; flex pushes content to the right side */}
      <div
        className="
          absolute inset-0 z-10
          flex items-center justify-end      
            /* puts content on the right */
          px-4 md:px-10 lg:px-16               /* We added a responsive side paddings */
        "
      >
        {/* content wrapper on the right */}
        {/* max-w keeps text line length readable, responsive right margin for airflow */}
        <div
          className="
            max-w-[720px] w-full
            mr-2 md:mr-6 lg:mr-10              
          "
        >
          {/* AOS: fade to the right */}
          {/* main heading of the hero. large, bold, white for contrast on image */}
          <h1
            className="text-white font-extrabold leading-tight text-[40px] md:text-[72px] lg:text-[88px]"
            data-aos="fade-right"
          >
            VIBEZ
          </h1>

          {/* AOS: fade to the right with slight delay */}
          {/* sub heading with a bit smaller size; delay creates nice stagger */}
          <h2
            className="text-white font-extrabold text-[24px] md:text-[36px] lg:text-[44px] mt-2"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Platform for E-commerce Websites
          </h2>

          {/* AOS: fade to the right,added delay for paragraph */}
          {/* short description paragraph. limited width for better readability */}
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
          {/* cta block. we animate the button too for a smooth entrance */}
          <div
            className="mt-6 md:mt-8"
            data-aos="fade-right"
            data-aos-delay="450"
          >
            <button
              type="button"
              // button arrow hover behavior works opposite of the header hover
              // group lets the child icon react to parent hover
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
              {/* left arrow icon that slides in on hover */}
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
              {/* button text. we keep it simple and bold for clear cta */}
              <span className="inline-block">Let's get started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezHero;
