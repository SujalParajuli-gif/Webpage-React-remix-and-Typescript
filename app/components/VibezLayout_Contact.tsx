import React from "react";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

// main contact layout for VIBEZ
const VibezLayout_Contact: React.FC = () => {
  return (
    // main section wrapper for the contact form
    <section className="relative w-full flex items-center justify-center bg-white text-[#281776] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* background image that shows large VIBEZ text */}
      <img
        src="/images/Vibez/image/VIBEZ.png"
        alt="VIBEZ background"
        className="pointer-events-none select-none absolute inset-0 w-full object-cover"
      />

      {/* content wrapper that stays above the background */}
      <div className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center">
        {/* heading text */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#270c54] text-center mb-8 sm:mb-10">
          Want to hear more? Talk to us!
        </h2>

        {/* form container (no card box, just simple vertical layout) */}
        <form
          className="w-full max-w-lg space-y-5 px-7"
          onSubmit={(e) => e.preventDefault()} // stops the page from refreshing
        >
          {/* row for family name + first name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* family name input */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="family name"
                className="w-full placeholder:text-black  text-black border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm bg-white"
              />
            </div>

            {/* first name input */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="first name"
                className="w-full placeholder:text-black  text-black border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm bg-white"
              />
            </div>
          </div>

          {/* row for phone + email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* phone input */}
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="phone"
                className="w-full text-black placeholder:text-black  border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm bg-white"
              />
            </div>

            {/* email input */}
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="email"
                className="w-full placeholder:text-black  text-black border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm bg-white"
              />
            </div>
          </div>

          {/* message input area */}
          <div>
            <textarea
              placeholder="Write a message..."
              // row is for the box space
              rows={4}
              className="w-full placeholder:text-black text-black border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-sm bg-white"
            />
          </div>

          {/* checkbox for marketing updates */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-black">
            <input type="checkbox" className="w-4 h-4" />
            <p className="leading-tight text-xs sm:text-[13px] md:text-[17px] max-w-2xl">
              I agree to receive updates by email and/or SMS
            </p>
          </div>

          {/* privacy policy section */}
          <div className="flex items-start space-x-2 text-black">
            <input type="checkbox" className="mt-1 w-4 h-4" />
            <p className="leading-relaxed text-xs sm:text-[13px] md:text-[17px] max-w-2xl">
              The information you provide will be stored and processed for
              commercial purposes in Matat Technologies Ltd&apos;s databases in{" "}
              {/* link to privacy policy route */}
              <Link
                to="/privacy-policy"
                className="text-[#4577E4] font-extrabold underline"
              >
                accordance with the Privacy Policy
              </Link>
              . I am not obligated to provide the information in accordance with
              the law, but without providing the information we will not be able
              to contact you or handle your request. It is possible to review
              the information and request its correction in accordance with the
              provisions of the law. For inquiries:{" "}
              <a
                href="mailto:support@matat.co.il"
                className="text-[#4577E4] font-semibold underline"
              >
                support@matat.co.il
              </a>
              .
            </p>
          </div>

          {/* button row */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              // button arrow hover behavior works opposite of the header hover
              // group lets the child icon react to parent hover
              className="
                          group relative rounded-3xl
                          px-6 py-3 pl-6
                          text-white font-extrabold
                          bg-[linear-gradient(108deg,#6b00b9_0%,#a200ff_100%)]
                          transition-[padding,background,opacity,transform] duration-300
                          hover:pl-[70px]
                          shadow-[0_10px_18px_rgba(0,0,0,0.15)]
                        "
            >
              {/* left arrow icon that slides in on hover */}
              <FiArrowLeft
                className="
                            absolute left-5 top-1/2 -translate-y-1/2
                            opacity-0 -translate-x-2
                            transition-all duration-300
                            group-hover:opacity-100 group-hover:translate-x-0
                          "
                aria-hidden="true"
                size={18}
              />
              {/* button text. we keep it simple and bold for clear cta */}
              <span className="inline-block">Talk To Us</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// exporting the component so it can be used in other files
export default VibezLayout_Contact;
