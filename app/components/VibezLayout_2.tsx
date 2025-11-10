import React, { useEffect } from "react";
// Added: AOS= animation on scroll for fade/slide animations
import AOS from "aos";
import "aos/dist/aos.css";

const VibezLayout_2: React.FC = () => {
  useEffect(() => {
    // init once per reload or render slow + smooth easing effect
    AOS.init({
      duration: 1000, // slower fade/slide
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 60, // start a bit later while scrolling
    });
  }, []);

  return (
    <section
      // main section for layout 2
      className="relative z-20 pt-14"
    >
      {/* COlumn- ROW grid layout*/}
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-10 md:gap-y-5 h-170 mt-10">
        {/* row 1 — right side title block */}
        <div
          dir="ltr"
          className="md:col-start-9 md:col-end-13 md:row-start-1 w-115 pt-10 pr-10"
          data-aos="fade-right"
        >
          <h2 className="text-[40px] md:text-[42px] lg:text-[47px] font-extrabold leading-[1.05] text-[#270c54]">
            Dynamic Home Page
          </h2>
          <p className="mt-6 text-[#270c54] text-base md:text-lg font-bold leading-relaxed max-w-[500px]">
            Vibez is built entirely on versatility. We follow design trends, and
            understand that the website needs to adapt to your business, which
            is also dynamic and constantly changing. Using the builder we
            developed, you can create different structures for your website's
            homepage with the click of a button.
          </p>
        </div>

        {/* row 1 — top left big browser wireframe */}
        <div
          className="relative md:col-start-1 md:col-end-6 md:row-start-1 mt-30"
          data-aos="fade-right"
        >
          {/* soft blue glow under the wireframe */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center ">
            <div className="w-[520px] h-[520px] rounded-full bg-[#5a86ff1f] blur-2xl mr-20" />
          </div>

          {/* image */}
          <img
            src="/images/Vibez/image/floor-2-3-big.png"
            alt="browser wireframe left"
            className="w-full max-w-[460px] h-auto object-contain"
            loading="lazy"
          />
          {/* row 2 — center-left paragraph under the mobile */}
        </div>
        <div className="relative left-113 bottom-47 w-73" data-aos="fade-right">
          <p className="text-[#270c54] text-bold md:text-[17px] ">
            With a simple and intuitive interface, we can add, download, and
            change the order of the banners on the homepage and adjust it to the
            vision, all with the click of a button.
          </p>
        </div>
        {/* row 1 — mid top center mobile card */}
        <div
          className="md:col-start-5 md:col-end-9 md:row-start-1 ml-5"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {/* soft blue glow under the wireframe */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center ">
            <div className="w-[180px] h-[280px] rounded-full bg-[#5a86ff1f] blur-3xl mb-40 pr-100" />
          </div>
          {/* image */}
          <img
            src="/images/Vibez/image/floor-2-2-big.png"
            alt="mobile card center"
            className="w-full max-w-[200px] h-auto object-contain"
            loading="lazy"
          />

          <div
            className="relative left-43 bottom-48"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <p className="text-[#270c54] text-bold md:text-[17px] max-w-[170px]">
              Hadar - the main menu of the site. We can choose from many options
              the most suitable menu for the business.
            </p>
          </div>
        </div>

        {/* row 2 — text to the right of the mobile (below the title now) */}

        <div
          className="md:col-start-6 md:col-end-9 md:row-start-3 self-center -mt-4 md:-mt-75 w-73 "
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {/* row 3 — paragraph beside the bottom browser wireframe */}

          <p className="text-[#270c54] text-base md:text-[17px] max-w-[420px]">
            The main banner on the website is the first thing customers will see
            when they land. Marketing content can be shown using an image,
            graphic, or video.
          </p>
        </div>

        {/* row 3 — bottom right big browser wireframe */}
        <div
          className="relative bottom-45 md:col-start-9  md:col-end-13 md:row-start-3 pb-0 "
          data-aos="fade-right"
        >
          {/* image  top right */}
          <img
            src="/images/Vibez/image/floor-2-1-big.png"
            alt="browser wireframe right"
            className="  w-105 max-w-[560px] h-auto object-contain "
            loading="lazy"
          />
          {/* blue glow under the image */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center min-w-100">
            <div className="w-[400px] h-[340px] rounded-full bg-[#5a86ff1f] blur-2xl mb-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_2;
