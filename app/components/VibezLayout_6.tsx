import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// json data for Vibez layouts
import vibezData from "../data/Vibez.json";

// feature tab data: text + images for each tab
type FeatureItem = {
  id: string;
  label: string;
  desktopImg: string;
  mobileImg?: string; // mobile image, desktop used as fallback
};

// small helper type for what we expect from Vibez.json for this layout
type VibezLayout6Data = {
  layout6FeatureBackground: string;
  layout6Features: FeatureItem[];
};

// casted the imported json so TypeScript knows the shape
const vibezJson = vibezData as VibezLayout6Data;

// features: tabs list comes from Vibez.json dynamically
const features: FeatureItem[] = vibezJson.layout6Features;

// shared background image that sits behind all main feature images
const featureBackground = vibezJson.layout6FeatureBackground;

// this mapping controls desktop foreground image styling per feature id
const desktopImgClassById: Record<string, string> = {
  login: "relative z-10 mx-auto w-[55%] lg:top-8 object-contain",
  "deal-timer": "relative z-10 mx-auto w-[100%] object-contain",
  "mega-menu": "relative z-10 mx-auto w-[100%] object-contain",
  club: "relative z-10 mx-auto w-[55%] lg:top-28 object-contain",
  filtering:
    "relative z-10 mx-auto lg:h-130 lg:left-73 lg:bottom-7 object-contain",
  "floating-cart":
    "relative z-10 mx-auto lg:h-130 lg:left-73 lg:bottom-7 object-contain",
};

// fallback for desktop if id is not in the mapping
const defaultDesktopImgClass = "relative z-10 mx-auto w-[60%] object-contain";

// this mapping controls mobile foreground image styling per feature id
const mobileImgClassById: Record<string, string> = {
  login: "relative z-10 mx-auto h-[88%] object-contain",
  "deal-timer": "relative z-10 mx-auto h-[78%] object-contain",
  "mega-menu": "relative z-10 mx-auto h-[92%] object-contain",
  club: "relative z-10 mx-auto h-[90%] object-contain",
  filtering: "relative z-10 mx-auto h-[80%] object-contain",
  "floating-cart": "relative z-10 mx-auto h-[80%] object-contain",
};

// fallback for mobile if id is not in the mapping
const defaultMobileImgClass = "relative z-10 mx-auto h-[82%] object-contain";

const VibezLayout_6: React.FC = () => {
  // activeId: remembers which feature tab is currently selected
  const [activeId, setActiveId] = useState<string>(features[0]?.id ?? "");

  // finds the current feature object for the active tab
  const current = useMemo(() => {
    return features.find((f) => f.id === activeId) ?? features[0];
  }, [activeId]);

  // thid use effect runs AOS one time for fade / slide animations
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  // small helper to render a tab button (used in mobile + desktop layouts both)
  const renderTabButton = (f: FeatureItem, index: number) => {
    const isActive = f.id === activeId;

    return (
      <button
        key={f.id}
        type="button"
        onClick={() => setActiveId(f.id)}
        data-aos-delay={(index + 1) * 80}
        className={[
          // base pill layout
          "inline-flex items-center justify-center px-5 py-2.5 text-lg md:text-[17px] rounded-3xl",
          "transition-colors whitespace-nowrap",
          // when active: show colored background and bolder text
          isActive
            ? "bg-gradient-to-r from-[#ebccf7] to-[#ebccf7] text-[#270c54] font-extrabold"
            : "bg-transparent text-[#270c54] font-extrabold",
        ].join(" ")}
      >
        {f.label}
      </button>
    );
  };

  return (
    <section className="w-full bg-white lg:px-10 ">
      {/* centered container with padding */}
      <div className="mx-auto max-w-[1140px] pt-0 pb-20 ">
        {/* top side title and description */}
        <div
          className="text-center max-w-[420px] md:max-w-[720px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-[#270c54] font-extrabold text-[30px] md:text-[38px] lg:text-[50px]">
            All features in one place
          </h2>
        </div>

        <div
          className="mb-8 text-center max-w-[420px] md:max-w-[720px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-[#270c54] text-[14px] md:text-[17px] font-bold">
            VIBEZ offers many features, some of the most advanced on the market,
            in accordance with the clientele and the latest technologies in the
            field. Click on the feature names and discover options you didn't
            know about.
          </p>
        </div>

        {/* MOBILE and TABLET LAYOUT */}
        {/* FOr small screens: tabs are on top by (flex wrap) and the images are below */}
        <div className="mt-8 lg:hidden w-200">
          {/* tabs row (can wrap to 2 lines) */}
          <div
            className="flex flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            {features.map((f, i) => renderTabButton(f, i))}
          </div>

          {/* image below tabs/mobile size styling  */}
          <div className="mt-6" data-aos="fade-up" data-aos-delay="350">
            {/* wrapper so mobile card looks like centered mockup */}
            <div className="mx-auto w-full max-w-[420px] rounded-[22px] shadow-[0_18px_45px_rgba(0,0,0,0.16)] bg-white overflow-hidden">
              {/* This is a wrapper that keeps fixed aspect so height doesn't jump when images change */}
              <div className="relative w-full aspect-[4/5] bg-white">
                {/* background image that sits behind everything */}
                <img
                  src={featureBackground}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* front image: the actual feature mockup */}
                <img
                  src={current.mobileImg || current.desktopImg}
                  alt={current.label}
                  loading="lazy"
                  className={
                    mobileImgClassById[current.id] || defaultMobileImgClass
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT  */}
        {/* on large screens: big image on the left, vertical tab list on the right */}

        <div className="mt-5 hidden lg:grid lg:grid-cols-[75%_34%] gap-20 items-center">
          {/* left side: feature image */}
          <div className="w-full" data-aos="fade-right" data-aos-delay="300">
            <div className="mx-auto w-full ">
              {/* fixed aspect box so main div size stays stable and image doesnt overlap the div/} */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
                {/* background image behind (in desktop style */}
                <img
                  src={featureBackground}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* foreground image that sits in front of the background */}
                <img
                  src={current.desktopImg}
                  alt={current.label}
                  loading="lazy"
                  className={
                    desktopImgClassById[current.id] || defaultDesktopImgClass
                  }
                />
              </div>
            </div>
          </div>

          {/* right side: vertical list of tabs */}
          <div className="flex flex-col items-start gap-5 ]">
            {features.map((f, i) => renderTabButton(f, i))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_6;
