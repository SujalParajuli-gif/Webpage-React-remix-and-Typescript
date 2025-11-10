import React, { useEffect } from "react";
// Added: AOS (same config as Layout_2)
import AOS from "aos";
import "aos/dist/aos.css";

const VibezLayout_1: React.FC = () => {
  // init AOS once (slow + smooth)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    // refresh after mount in case images affect positions
    setTimeout(() => AOS.refresh(), 100);
  }, []);

  // simple data so order/content is easy to change later
  const steps = [
    {
      n: 3,
      title: "The site is up in the air!",
      body: [
        "That's almost done!",
        "After a short and focused process, your business is about to start selling online.",
        "Don't worry, you're not alone. Our support team is here for any questions along the way.",
        "From here, sales will start coming in at a rate you never knew.",
      ],
    },
    {
      n: 2,
      title: "Design & Development",
      body: [
        "In the second stage, the design and development team will create a website that fits the needs of your business.",
        "From a custom design to a user experience that suits your clientele.",
        "During the project, a personal project manager will be your contact for any questions.",
      ],
    },
    {
      n: 1,
      title: "Choose a platform",
      body: [
        "In the first step, the team helps choose the most suitable platform for your business.",
        "Understand the pros and cons of each option to match your online goals.",
      ],
      logos: [
        {
          src: "/images/Vibez/logos/shopify.png.webp",
          alt: "Shopify Partners logo",
        },
        { src: "/images/Vibez/logos/woo.png.webp", alt: "WooCommerce logo" },
      ],
    },
  ];

  return (
    <section
      // negative top margin pulls the cards upward over the hero and the z-index keeps above hero image
      className="-mt-16 md:-mt-24 lg:-mt-25 relative z-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* grid for cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
          {steps.map((s, i) => (
            <article
              key={s.n}
              // AOS: fade/slide from left; stagger per column (0/200/400)
              data-aos="fade-right"
              data-aos-delay={i * 200}
              className="
                relative rounded-2xl bg-white
                shadow-[0_12px_28px_rgba(22,28,45,0.12)]
                px-16 py-8 pb-15
              "
            >
              {/* large faint number in the background */}
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

              {/* title */}
              <h3 className="text-center text-[#2a1b5a] text-2xl md:text-[26px] font-extrabold">
                {s.title}
              </h3>

              {/* body */}
              <div className="mt-3 space-y-2 text-center text-[15px] md:text-[16px] text-[#2a1b5a]/80 font-medium">
                {s.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>

              {/* logos only for step 1 */}
              {s.logos && (
                <div className="mt-5 flex items-center justify-center gap-4">
                  {s.logos.map((l) => (
                    <img
                      key={l.src}
                      src={l.src}
                      alt={l.alt}
                      className="h-7 md:h-8 w-auto"
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
