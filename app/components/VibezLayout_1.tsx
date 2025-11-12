import React, { useEffect } from "react";
// AOS = animation on scroll (same config as Layout_2)
import AOS from "aos";
import "aos/dist/aos.css";

const VibezLayout_1: React.FC = () => {
  useEffect(() => {
    // start AOS once on mount
    // duration = speed, easing = feel, once = run only first time, offset = start a bit later
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    // refresh after mount in case images shift layout
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  // steps data used to render the three cards in order (3 -> 2 -> 1)
  // n = big background number, title = card heading, body = bullet-like lines
  // logos is optional and only appears on step 1
  const steps = [
    {
      n: 3,
      title: "The site is up in the air!",
      body: [
        "That's it, we're almost done!",
        "After a short and focused process, your business will soon start selling online.",
        "Don't worry, you're not alone. Our support team is here for any questions along the way.",
        "From here, sales will start coming in at a rate you never knew.",
      ],
    },
    {
      n: 2,
      title: "Design & Development",
      body: [
        "In the second stage, the design and development team will create a website for you that will meet all the needs of your business. From custom design, to a user experience that fits precisely for your clientele.",
        "During the work on the project, you will be closely accompanied by a personal project manager who will provide answers and will be the contact person for any questions.",
      ],
    },
    {
      n: 1,
      title: "Choose a platform",
      body: [
        "In the first stage of the process, our team will help you choose the most suitable platform for your business. We will help you understand the pros and cons of each of the options in order to choose the right platform for your online business goal.",
      ],
      logos: [
        {
          src: "/images/Vibez/logos/shopify.png",
          alt: "Shopify Partners logo",
        },
        { src: "/images/Vibez/logos/woo.png", alt: "WooCommerce logo" },
      ],
    },
  ];

  return (
    <section
      // negative top margin pulls the cards up over the hero section
      // z-20 keeps the cards above the hero image (stack order)
      className="-mt-16 md:-mt-24 lg:-mt-25 relative z-20"
    >
      {/* page width container with side paddings */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* 3-card grid
           - 1 column on mobile
           - 3 columns on md and up
           - gap controls space between cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
          {steps.map((s, i) => (
            <article
              key={s.n}
              // fade from right, stagger each card by 200ms (0 / 200 / 400)
              data-aos="fade-right"
              data-aos-delay={i * 200}
              className="
                relative rounded-xl bg-white
                shadow-[0_0px_30px_rgba(22,28,45,0.12)]
                p-8 px-15
              "
            >
              {/* giant faint number in the background (decorative) */}
              <div
                className="
                  pointer-events-none select-none
                  absolute bottom-10 right-4
                  text-[120px] md:text-[230px] font-extrabold
                  text-[#6b00b9]/10 leading-none
                "
                aria-hidden="true"
              >
                {s.n}
              </div>

              {/* card title */}
              <h3 className="text-center text-[#2a1b5a] text-2xl md:text-[26px] font-extrabold">
                {s.title}
              </h3>

              {/* card body (multiple short paragraphs) */}
              <div className="mt-2 text-center text-[15px] md:text-[16px] text-[#270c54] font-light">
                {s.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>

              {/* partner logos (only shows if this step has logos) */}
              {s.logos && (
                <div className="mt-5 flex items-center justify-center gap-4">
                  {s.logos.map((l) => (
                    <img
                      key={l.src}
                      src={l.src}
                      alt={l.alt}
                      className=" w-auto"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_1;
