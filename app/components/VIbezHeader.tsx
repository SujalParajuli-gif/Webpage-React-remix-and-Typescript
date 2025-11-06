// app/components/VibezHeader.tsx
import React from "react";
import { Link } from "react-router";

type Props = {
  onQuoteClick?: () => void; 
  phone?: string;            
};

const VibezHeader: React.FC<Props> = ({ onQuoteClick, phone = "055-9909090" }) => {
  return (
   <div className="bg-[gray] h-500">
    <header
      className={
        // sticky header with solid background with no scroll listeners
        "sticky top-0 z-50 w-full h-25 bg-white"
      }
    >
      {/* main row */}
      <div className="mx-auto pt-5 flex h-12 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* left: quote button */}
        <button
          type="button"
          onClick={onQuoteClick}
          // simple purple pill like in your screenshot
          className="rounded-3xl px-5 py-2 text-white bg-[#6b00b9] hover:opacity-90 active:scale-[0.98] transition"
        >
          quote
        </button>

        {/* center: vibez logo image */}
        <Link to="/Vibez" className="inline-flex items-center">
          {/* use your existing image path */}
          <img
            src="/images/Vibez/logos/vibez-logo-big.png"
            alt="VIBEZ by MATAT"
            className="w-40 object-contain"
          />
        </Link>

        {/* right: phone text */}
        <a href="tel:0559909090" className="text-sm md:text-base text-black">
          {phone}
        </a>
      </div>
    </header>
    </div>
  );
};

export default VibezHeader;
