// app/components/VibezLayout_7.jsx
// note: video url kept here in case it is needed later
// https://player.vimeo.com/video/849103523?title=0&byline=0&portrait=0&autoplay=1&background=1&controls=0&muted=1&loop=1

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// json data for Vibez layouts
import vibezData from "../data/Vibez.json";

const VibezLayout_7 = () => {
  // this gets instagram slides from the json file
  const slides = vibezData.layout8InstagramSlides || [];

  // this gets background banner images from the json
  const bg = vibezData.layout8InstagramBackground || {};

  // if there is no data in json, nothing is rendered
  if (!slides.length) return null;

  // this state stores the active slide index (0 = first slide)
  const [activeIndex, setActiveIndex] = useState(0);

  // this finds the active slide from the array using the index
  const activeSlide = slides[activeIndex] || slides[0];

  useEffect(() => {
    // init AOS for scroll animations
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    // main wrapper for the whole instagram section
    <section className="relative w-full overflow-hidden bg-white">
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
            className="h-32 w-full object-cover md:h-40"
          />
        </picture>
      </div>

      {/* main content container (sizes kept same) */}
      <div className="mx-auto max-w-8xl px-50 pt-14 pb-20 md:pt-16">
        {/* top row = text on left + ig images on right */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] lg:items-start">
          {/* left text column */}
          <div data-aos="fade-right">
            {/* section title */}
            <h2 className="text-left text-2xl font-extrabold text-[#270c54] md:text-5xl lg:pt-20 lg:px-10">
              Connect your Instagram account
            </h2>

            {/* section paragraph */}
            <p className="mt-4 text-left text-sm text-[#270c54] md:text-lg font-extrabold lg:px-15 lg:pl-10 lg:w-150">
              Vibez understands the power of community. You spend a lot of time
              nurturing your business&apos;s Instagram, and we allow you to
              showcase it on your website as well. With the{" "}
              <span className="font-semibold">"Shop the Look"</span> feature,
              you will allow your customers to purchase the products you have
              advertised on Instagram.
            </p>
          </div>

          {/* right images column */}
          <div
            className="flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            {/* on desktop: big row of images */}
            <div className="hidden gap-5 md:grid md:grid-cols-3">
              {slides.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.id}
                    type="button"
                    // this click changes which slide is active
                    onClick={() => setActiveIndex(index)}
                    className="group relative overflow-hidden transition-transform duration-200"
                    aria-label="instagram image"
                  >
                    {/* main square / portrait image */}
                    <div className="aspect-[4/5] w-full">
                      <img
                        src={item.thumb}
                        alt="Instagram preview"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* white dot marker at bottom center */}
                    <span
                      className={`absolute bottom-4 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-white ${
                        isActive ? "bg-white" : "bg-white/80"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* on mobile: active big image first (portrait), thumbs in a row under it */}
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

              {/* small scrollable thumbnails under the big image */}
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
                      <span
                        className={`absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border border-white ${
                          isActive ? "bg-white" : "bg-white/80"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* bottom main "Shop the Look" card (big image bar) */}
        <div
          className="mt-10 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="w-full h-130 max-w-2xl overflow-hidden p-3 md:p-4">
            {/* this image simulates the popup/modal product card */}
            <picture>
              {activeSlide.desktopImg && (
                <source srcSet={activeSlide.desktopImg} />
              )}
              {activeSlide.mobileImg && (
                <source
                  srcSet={activeSlide.mobileImg}
                  media="(max-width: 767px)"
                />
              )}
              <img
                src={activeSlide.desktopImg || activeSlide.mobileImg}
                alt="Shop the look popup preview"
                className="h-auto w-full rounded-xl object-contain"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_7;
