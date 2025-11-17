import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiHeart } from "react-icons/fi"; // outline heart icon
import { FaHeart } from "react-icons/fa"; // filled heart icon

// json data for Vibez layouts
import vibezData from "../data/Vibez.json";

// cards data: each item can show images or a video
// imageSrc1 / imageSrc2 are used to switch images with the dots
// if videoSrc exists, that card will also be able to show a video
type Item = {
  id: string;
  title: string;
  price: number;
  imageSrc1?: string;
  imageSrc2?: string;
  imageSrc?: string;
  videoSrc?: string;
  label?: string;
  colors: string[]; // used for dots that change the image / video
};

// small helper type for what we expect from Vibez.json for this layout
type VibezLayout4Data = {
  layout4Items: Item[];
};

// casted the imported json so TypeScript knows the shape for layout4
const vibezJson = vibezData as VibezLayout4Data;

// cards data comes from Vibez.json dynamically
const items: Item[] = vibezJson.layout4Items;

const VIbezLayout_4: React.FC = () => {
  // for liked: remembers which card is liked by id (true/false)
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  // activeIdx: remembers which dot (option) is active for each card
  const [activeIdx, setActiveIdx] = useState<Record<string, number>>({});

  // for Heart shape (wishlist): toggles the heart state for a card (outline is filled)
  const onHeart = (id: string) =>
    setLiked((old) => ({ ...old, [id]: !old[id] }));

  // onDot: switches the active option (image/video) for a specific card
  // idx comes from the clicked dot
  const onDot = (id: string, idx: number) =>
    setActiveIdx((old) => ({ ...old, [id]: idx }));

  // run AOS one time for fade/slide animations
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  return (
    <section className="w-full bg-white lg:px-80">
      {/* centered container with padding */}
      <div className="mx-auto max-w-[1280px] py-16 md:pb-10 pt-0 ">
        {/* layout: left text (1fr) and right cards area (2fr) on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-0">
          {/* left side: title and paragraph */}
          <div data-aos="fade-right">
            <h2 className="text-[#270c54] leading-tight font-extrabold text-[34px] md:text-[42px] lg:text-[50px] lg:pr-17 lg:pb-2">
              Incorporate videos to create an interactive and engaging website
            </h2>
            <p className="mt-2 text-[#270c54] text-[15px] md:text-[16px] max-w-[500px] font-bold lg:pr-18">
              Today, in the age of history and TikTok, videos are an integral
              part of the browsing experience, and we don't argue with things
              that work. We have developed the option for you to integrate
              videos in banners on the homepage and product galleries in order
              to create a visual and interactive user experience that will
              attract customers and give them a perfect purchase experience.
            </p>
          </div>

          {/* right side: product cards */}
          <div>
            <div className="grid grid-cols-3 w-220 md:w-full md:grid-cols-3 gap-3">
              {items.map((it, i) => {
                // boolean for the heart state
                const isLiked = !!liked[it.id];

                // gallery: builds the list of options for this card based on the data it has
                // - if video + imageSrc => first option is the image, second option is the video
                // - if imageSrc1 + imageSrc2 => two image options
                // - if only one image given => single option
                // useMemo keeps the array stable unless these inputs change
                const gallery = useMemo(() => {
                  // when card has both video and image
                  if (it.videoSrc && it.imageSrc) {
                    return [
                      {
                        kind: "video" as const, // video first so it shows by default
                        src: it.videoSrc, // iframe link
                        image: it.imageSrc, // still keep the image info if needed
                      },
                      {
                        kind: "image" as const, // image second option
                        src: it.imageSrc,
                      },
                    ];
                  }

                  if (it.imageSrc1 && it.imageSrc2) {
                    return [
                      { kind: "image" as const, src: it.imageSrc1 },
                      { kind: "image" as const, src: it.imageSrc2 },
                    ];
                  }
                  if (it.imageSrc1)
                    return [{ kind: "image" as const, src: it.imageSrc1 }];
                  if (it.imageSrc2)
                    return [{ kind: "image" as const, src: it.imageSrc2 }];

                  return [];
                }, [it.videoSrc, it.imageSrc, it.imageSrc1, it.imageSrc2]);

                // wanted: which dot user selected for this card (default 0)
                const wanted = activeIdx[it.id] ?? 0;

                // this is for  safe indexing inside gallery range (prevents errors on bad index)
                const cur =
                  gallery.length > 0
                    ? Math.min(Math.max(wanted, 0), gallery.length - 1)
                    : 0;

                return (
                  <article
                    key={it.id}
                    className="group"
                    data-aos="fade-right"
                    data-aos-delay={(i + 1) * 100}
                  >
                    {/* media wrapper */}
                    <div className="relative overflow-hidden bg-white">
                      {/* heart button: toggles like state */}
                      <button
                        type="button"
                        aria-pressed={isLiked}
                        onClick={() => onHeart(it.id)}
                        className="absolute left-3 top-3 z-10 h-7 w-7 rounded-full bg-white/90 backdrop-blur hover:bg-white transition flex items-center justify-center"
                      >
                        {isLiked ? (
                          <FaHeart className="h-4 w-4 text-black" />
                        ) : (
                          <FiHeart className="h-4 w-4 text-black/70" />
                        )}
                      </button>

                      {/* label chip on the top-right if label exists */}
                      {it.label && (
                        <span className="absolute right-0 top-3 z-10 bg-[#f5d9df] px-4 py-1 text-[14px] font-light text-[#1d0e3d] opacity-80">
                          {it.label}
                        </span>
                      )}

                      {/* fixed aspect ratio area for the media */}
                      <div className="relative aspect-[3/4] w-full">
                        {gallery[cur]?.kind === "video" ? (
                          // iframe view: vimeo player fills the whole box (no extra px gaps)
                          <iframe
                            src={(gallery[cur] as any).src}
                            className="absolute inset-0 h-110 max-w-90"
                            style={{ border: "none" }}
                            loading="lazy"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={it.title}
                          />
                        ) : (
                          // image view: shows the chosen image source
                          <img
                            src={
                              gallery[cur]?.src ||
                              it.imageSrc1 ||
                              it.imageSrc2 ||
                              ""
                            }
                            alt={it.title}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* title, price, and the clickable color dots */}
                    <div className="mt-3">
                      <h3 className="text-[15px] text-[#1d0e3d]">{it.title}</h3>
                      <div className="mt-1 text-sm text-[#1d0e3d]">
                        ${it.price}
                      </div>

                      {/* dots row: each dot sets a different gallery index */}
                      <ul className="mt-2 flex items-center gap-2">
                        {it.colors.map((c, k) => {
                          // active: true when this dot matches the current gallery index
                          const active = cur === k;
                          return (
                            <li key={k}>
                              {/* dot button: switches to k-th option for this card */}
                              <button
                                type="button"
                                aria-label={`Switch to option ${k + 1}`}
                                aria-selected={active}
                                onClick={() => onDot(it.id, k)}
                                className="relative inline-flex items-center justify-center h-3 w-3 rounded-full"
                                style={{ background: c }}
                              >
                                {/* thin black ring when this dot is the active one */}
                                {active && (
                                  <span className="pointer-events-none absolute inset-[-2px] rounded-full ring-1 ring-black" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIbezLayout_4;
