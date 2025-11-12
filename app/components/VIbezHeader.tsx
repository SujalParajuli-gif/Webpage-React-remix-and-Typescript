import React from "react";
import { Link } from "react-router";
// left arrow for hover state
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  onQuoteClick?: () => void; // runs when the "quote" button is clicked
  phone?: string; // phone text on the right (can be replaced from parent)
};

const VibezHeader: React.FC<Props> = ({
  onQuoteClick,
  phone = "055-9909090", // default phone if parent does not pass one
}) => {
  return (
    <header
      className={
        // sticky header that stays on top while scrolling
        // solid white background; high z-index so it sits above page content
        "sticky top-0 z-50 w-full h-25 bg-white"
      }
    >
      {/* main row (3 columns): left button | center logo | right phone */}
      <div
        className="
            mx-auto pt-2
            grid items-center
            grid-cols-[160px_1fr_160px]
            h-12 max-w-7xl px-4 md:h-20 md:px-8
          "
      >
        {/* left: quote button */}
        <div className="justify-self-start">
          <button
            type="button"
            onClick={onQuoteClick} // click handler comes from parent
            // rounded pill button with gradient; padding-left grows on hover
            className="
                group relative rounded-3xl
                px-5 py-2 pl-5
                text-white font-extrabold
                bg-[linear-gradient(108deg,#6b00b9_0%,#a200ff_200%)]
                transition-[padding,background,opacity,transform] duration-300
                hover:pl-[50px]
                shadow-[0_10px_18px_rgba(0,0,0,0.15)]
              "
          >
            {/* arrow icon that slides in when the parent button is hovered */}
            <FiArrowLeft
              className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  opacity-0 -translate-x-2
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-x-0
                "
              aria-hidden="true"
              size={20}
            />

            {/* button label */}
            <span className="inline-block">quote</span>
          </button>
        </div>

        {/* center: brand logo links to home (placeholder '#') */}
        <Link to="#" className="inline-flex items-center justify-self-center">
          {/* logo image kept as provided */}
          <div className="w-full">
            <img
              src="/images/Vibez/logos/vibez-logo-big.png"
              alt="VIBEZ by MATAT"
              className="w-40 object-contain"
            />
          </div>
        </Link>

        {/* right: phone text with a subtle underline on hover
           anchor uses tel: so it opens dialer on mobile */}
        <a
          href="tel:0559909090"
          className="justify-self-end text-sm md:text-base text-black relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
        >
          {phone}
        </a>
      </div>
    </header>
  );
};

export default VibezHeader;
