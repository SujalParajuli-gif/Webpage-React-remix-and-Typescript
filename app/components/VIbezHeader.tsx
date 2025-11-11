import React from "react";
import { Link } from "react-router";
// left arrow for hover state
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  onQuoteClick?: () => void;
  phone?: string;
};

const VibezHeader: React.FC<Props> = ({
  onQuoteClick,
  phone = "055-9909090",
}) => {
  return (
    <header
      className={
        // sticky header with solid background with no scroll listeners
        "sticky top-0 z-50 w-full h-25 bg-white"
      }
    >
      {/* main row */}
      <div
        className="
            mx-auto pt-2
            grid items-center
            grid-cols-[160px_1fr_160px]
            h-12 max-w-7xl px-4 md:h-20 md:px-8
          "
      >
        {/* left quote button */}
        <div className="justify-self-start">
          <button
            type="button"
            onClick={onQuoteClick}
            // width handled by grid also we only animate inner padding meaning for the quote button hover
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
            {/* left arrow that fades/slides in on hover */}
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

            {/* We keep the label as-is */}
            <span className="inline-block">quote</span>
          </button>
        </div>

        {/* center: vibez logo image */}
        <Link to="#" className="inline-flex items-center justify-self-center">
          {/*Our existing image path */}
          <div className="w-full">
            <img
              src="/images/Vibez/logos/vibez-logo-big.png"
              alt="VIBEZ by MATAT"
              className="w-40 object-contain"
            />
          </div>
        </Link>

        {/* right side phone text */}
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
