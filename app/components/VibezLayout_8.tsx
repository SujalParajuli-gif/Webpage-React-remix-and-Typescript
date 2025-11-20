import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VibezLayout_8: React.FC = () => {
  useEffect(() => {
    // init AOS when this component mounts
    // this makes fade-right / fade-left animations work for this section
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  // this is the vimeo link used inside the phone
  // kept here as a const so it is easy to change later if needed
  const phoneVideoSrc =
    "https://player.vimeo.com/video/849103523?title=0&byline=0&portrait=0&autoplay=1&background=1&controls=0&muted=1&loop=1";

  return (
    // main wrapper for this section (uses Rubik font from app.css via vibez-rubik)
    <section className="relative w-full bg-white vibez-rubik">
      {/* centered content container */}
      {/* this flex box keeps phone + text stacked on mobile and side-by-side on large screens */}
      <div
        className="
          mx-auto max-w-8xl
          px-6 md:px-8 lg:px-60
          py-16 md:py-20 lg:py-5
          flex flex-col items-center gap-12
          lg:flex-row lg:items-center lg:gap-0
        "
      >
        {/* left side: mobile video mockup */}
        <div
          className="flex justify-center lg:flex-1"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {/* this wrapper controls phone size and height/width ratio */}
          {/* if we want the phone bigger, we can change the max-w values below */}
          <div
            className="
              w-full
              max-w-[340px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[350px]
              aspect-[9/16]
              overflow-hidden
              
            "
          >
            {/* vimeo iframe video, auto-plays  */}
            <iframe
              src={phoneVideoSrc}
              title="Vimeo video"
              width={540}
              height={960}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        {/* right side: title, description and store buttons */}
        <div
          className="
            lg:flex-1
            text-center
    
          "
          data-aos="fade-left"
          data-aos-delay="150"
        >
          {/* heading text */}
          <h2
            className="
              text-[26px] md:text-4xl lg:text-5xl
              font-extrabold
              leading-tight
              text-[#270c54]
              max-w-[840px]          /* limit width so heading does not stretch too wide */
              mx-auto
            
            "
          >
            Upgrade your online store
            <br className="hidden md:block" /> to a perfect app!
          </h2>

          {/* description paragraph */}
          <p
            className="
              mt-6
              text-sm md:text-base
              font-semibold
              leading-relaxed
              text-[#270c54]
              max-w-[660px]
              mx-auto
            "
          >
            Make your customers&apos; lives easier. Instead of searching for you
            on Google every time, entering an address or logging in to your
            Instagram account and looking for a link - you can simply show your
            store on the home screen of their mobile phone and let them keep up
            to date with new products, and quickly and easily purchase directly
            through the app.
            <br />
            Upgrade your online store to a perfect app, available for quick
            download in the app stores, and give your customers a perfect
            shopping experience just like the biggest brands in the world.
          </p>

          {/* store icon buttons row */}
          {/* simple flex row for app store + play store icons */}
          <div
            className="
              mt-8
              flex items-center justify-center
              gap-10
            "
          >
            {/* app store icon */}
            <img
              src="/images/Vibez/image/app_store.svg"
              alt="Download on the App Store"
              className="h-12 w-auto"
              loading="lazy"
            />

            {/* google play icon */}
            <img
              src="/images/Vibez/image/google_play.svg"
              alt="Get it on Google Play"
              className="h-12 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_8;
