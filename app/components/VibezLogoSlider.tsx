import React from "react";

// note: files are inside  /images/Vibez/logos/ folder
const logos = [
  "/images/Vibez/logos/clients-logo-1.png.webp",
  "/images/Vibez/logos/clients-logo-2.png",
  "/images/Vibez/logos/clients-logo-3.png.webp",
  "/images/Vibez/logos/clients-logo-4.png.webp",
  "/images/Vibez/logos/clients-logo-5.png.webp",
  "/images/Vibez/logos/LOGO.svg",
  "/images/Vibez/logos/black-logo.svg",
  "/images/Vibez/logos/agrooz-logo.svg",
  "/images/Vibez/logos/argo-logo.svg",
  "/images/Vibez/logos/beautics-logo.svg",
  "/images/Vibez/logos/blueberry-logo.svg",
  "/images/Vibez/logos/header-logo.svg",
  "/images/Vibez/logos/Image-35.png",
  "/images/Vibez/logos/logo-1.png.webp",
  "/images/Vibez/logos/logo-532178.png.webp",
  "/images/Vibez/logos/logo-no-slogAn.svg",
  "/images/Vibez/logos/logo-white-slogen.svg",
  "/images/Vibez/logos/logo.png.webp",
  "/images/Vibez/logos/tenniszone-svg-logo.svg",
  "/images/Vibez/logos/mini-stylish-logo.svg",
  "/images/Vibez/logos/offroad-logo.svg",
  "/images/Vibez/logos/republic-logo.svg",
  "/images/Vibez/logos/salinksa-logo.svg",
  "/images/Vibez/logos/the-market-logo.svg",
].filter(Boolean);

// duplicating row so it loops nicely
const track = [...logos, ...logos];

const VibezLogoSlider: React.FC = () => {
  // heading text
  const title = "Hundreds of customers have already chosen VIBEZ";

  return (
    <section className="w-full py-10 md:py-14">
      {/* title */}
      <h2 className="text-center text-[47px] font-extrabold leading-tight text-[#270c54]">
        {title}
      </h2>

      {/* wrap that hides overflow and adds soft edge fade */}
      <div className="relative mt-5  ml-95 overflow-hidden max-w-280">
        {/* moving row */}
        <div
          className="flex items-center gap-15 will-change-transform"
          style={{ animation: "vibez-marquee 3400ms linear infinite" }}
        >
          {track.map((src, i) => (
            <div key={`${src}-${i}`} className="shrink-0">
              {/* fixed height keeps row stable */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-[42px] md:h-[55px] object-contain opacity-90 transition-opacity hover:opacity-100 w-25"
              />
            </div>
          ))}
        </div>

        {/* pause on hover + keyframes */}
        <style>{`
          .mt-8:hover > div { animation-play-state: paused; }
          @keyframes vibez-marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            /* -50% because the row is duplicated */
          }
        `}</style>
      </div>
    </section>
  );
};

export default VibezLogoSlider;
