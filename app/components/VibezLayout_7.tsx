import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// json data for Vibez layouts
import vibezData from "../data/Vibez.json";

const VibezLayout_7 = () => {
  // gets instagram slides list from json
  const slides = vibezData.layout8InstagramSlides || [];

  // gets background banner images for this section
  const bg = vibezData.layout8InstagramBackground || {};

  // stop rendering if there are no slides in json
  if (!slides.length) return null;

  // keeps which slide is active (0 = first slide)
  const [activeIndex, setActiveIndex] = useState(0);

  // gets the active slide object by index
  const activeSlide = slides[activeIndex] || slides[0];

  useEffect(() => {
    // start AOS scroll animations
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    // main wrapper for the instagram section
    <section className="relative w-full overflow-hidden bg-white vibez-rubik">
      {/* top banner background like original instagram-head-bg */}
      <div className="w-full absolute">
        <picture>
          {bg.mobile && (
            <source srcSet={bg.mobile} media="(max-width: 767px)" />
          )}
          {bg.desktop && <source srcSet={bg.desktop} />}
          <img
            src={bg.desktop || bg.mobile || ""}
            alt="Instagram banner"
            className="h-32 w-full object-cover md:h-40 "
          />
        </picture>
      </div>

      {/* main content area with text + images */}
      <div className="mx-auto max-w-8xl px-6 lg:px-0 pt-10 pb-10 md:pt-12">
        {/* top row = text on the left and images on the right */}
        <div className="grid gap-8 lg:grid-cols-11 lg:items-start">
          {/* left text column */}
          <div className="lg:col-span-4 p-28 " data-aos="fade-right">
            {/* section title */}
            <h2 className="text-left text-2xl font-extrabold text-[#270c54] md:text-5xl ">
              Connect your Instagram account
            </h2>

            {/* section description text */}
            <p className="mt-4 text-left text-sm text-[#270c54] md:text-base font-bold ">
              Vibez understands the power of community. You spend a lot of time
              nurturing your business&apos;s Instagram, and we allow you to
              showcase it on your website as well. With the{" "}
              <span className="font-semibold">"Shop the Look"</span> feature,
              you will allow your customers to purchase the products you have
              advertised on Instagram.
            </p>
          </div>

          {/* right column with instagram cards and bottom popup image */}
          <div
            className="flex flex-col gap-4 items-center lg:items-start lg:col-span-7 lg:mt-10"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            {/* desktop layout: 3 image cards + 1 popup image inside one grid */}
            <div className="hidden md:block w-full">
              <div className="grid md:grid-cols-3 gap-x-5 gap-y-6">
                {slides.map((item, index) => {
                  const isActive = index === activeIndex; // tells which slide is active (used for click + bottom card)

                  // wrapper for each desktop card (used to place arrow under first card)
                  return (
                    <div key={item.id} className="relative">
                      <button
                        type="button"
                        // set this slide as active when user clicks
                        onClick={() => setActiveIndex(index)}
                        className="group relative overflow-hidden transition-transform duration-200 w-full"
                        aria-label="instagram image"
                      >
                        {/* main square / portrait image */}
                        <div className="w-full h-[260px] md:h-[380px]">
                          <img
                            src={item.thumb}
                            alt="Instagram preview"
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* white dot marker at bottom center
                            animation is written in global styling in app.css file */}
                        {/* always uses vibez-pulse-dot so all dots have the glow animation */}
                        <span
                          aria-hidden="true"
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 vibez-pulse-dot"
                        />
                      </button>

                      {/* arrow image only under the first card (points to popup image below) */}
                      {index === 0 && (
                        <img
                          src="/images/Vibez/image/arrow-down.svg"
                          alt=""
                          aria-hidden="true"
                          className="pointer-events-none absolute -bottom-10 left-50 -translate-x-1/2 w-10 md:w-18 rotate-[290deg]"
                        />
                      )}
                    </div>
                  );
                })}

                {/* bottom main "Shop the Look" image as 4th grid item (second row) */}
                <div className="md:col-span-3 flex justify-start pt-10">
                  <div className="w-full max-w-[600px]">
                    <picture>
                      {activeSlide.desktopImg && (
                        <source srcSet={activeSlide.desktopImg} />
                      )}
                      {activeSlide.mobileImg && (
                        <source
                          srcSet={activeSlide.mobileImg}
                          media="(max-width: 750px)"
                        />
                      )}
                      <img
                        src={activeSlide.desktopImg || activeSlide.mobileImg}
                        alt="Shop the look popup preview"
                        className="w-full object-contain"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile layout: one big active image and small thumbs below */}
            <div className="flex flex-col gap-4 md:hidden">
              {/* big active portrait image for mobile */}
              <div className="mx-auto w-full max-w-sm">
                <picture>
                  {activeSlide.mobileImg && (
                    <source
                      srcSet={activeSlide.mobileImg}
                      media="(max-width: 767px)"
                    />
                  )}
                  {activeSlide.desktopImg && (
                    <source srcSet={activeSlide.desktopImg} />
                  )}
                  <img
                    src={activeSlide.mobileImg || activeSlide.desktopImg}
                    alt="Instagram product preview"
                    className="aspect-[4/5] w-full rounded-2xl object-cover shadow-md"
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* horizontal row with scrollable thumbnails under the big image */}
              <div className="flex gap-3 overflow-x-auto pb-1">
                {slides.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border ${
                        isActive ? "border-[#270c54]" : "border-neutral-200"
                      }`}
                      aria-label="instagram thumbnail"
                    >
                      <img
                        src={item.thumb}
                        alt="Instagram thumbnail"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {/* small status dot on thumbnail */}
                      {/* dot always has vibez-pulse-dot so animation runs on all thumbnails */}
                      <span
                        aria-hidden="true"
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 vibez-pulse-dot"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_7;
