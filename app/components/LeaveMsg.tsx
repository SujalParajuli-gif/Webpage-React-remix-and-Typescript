import React from "react";
import { Link } from "react-router";

// props type for closing from parent (Header)
type LeaveMsgProps = {
  onClose: () => void;
};

// main contact us component
const LeaveMsg: React.FC<LeaveMsgProps> = ({ onClose }) => {
  // stop click inside the panel from closing the overlay
  function stop(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    // Fullscreen overlay for popup centering
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose} // added click on overlay that closes popup
      role="dialog"
      aria-modal="true"
      aria-labelledby="leave-msg-title"
    >
      {/* Popup container */}
      <section
        className="relative h-180 max-w-160 rounded-2xl bg-white p-20 shadow-2xl"
        onClick={stop} // prevent overlay close when clicking inside the panel
      >
        {/* Cross close button on top-left */}
        <button
          type="button"
          className="absolute left-5 top-4 text-3xl text-gray-400 transition-all duration-200 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {/* heading text */}
        <h2
          id="leave-msg-title"
          className="mb-10 text-center text-3xl font-semibold text-[#4577E4] md:text-4xl"
        >
          Contact Us
        </h2>

        {/* form part */}
        <form
          className="w-full space-y-6 bg-white text-[#281776]"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* input fields for name and phone */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* full name input */}
            <div className="mb-4 flex-1 md:mb-0">
              <label className="mb-2 block text-lg">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* phone input */}
            <div className="flex-1">
              <label className="mb-2 block text-lg">Phone</label>
              <input
                type="text"
                placeholder="phone"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* message input area */}
          <div>
            <label className="mb-2 block text-lg">Message</label>
            <textarea
              placeholder="message"
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* privacy policy section */}
          <div className="flex items-start space-x-2 text-lg text-[#281776]">
            <input type="checkbox" className="mt-1" />
            <p className="leading-relaxed md:text-[15px]">
              The information you provide will be stored and processed for
              commercial purposes in Matat Technologies Ltd.'s databases in{" "}
              <Link
                to="/privacy-policy"
                onClick={onClose} // closes the modal first
                className="font-semibold text-[#4577E4] underline"
              >
                accordance with the Privacy Policy
              </Link>
              . I am not obligated to provide the information in accordance with
              the law, but without providing the information we will not be able
              to contact you or handle your request.
            </p>
          </div>

          {/* send button */}
          <button
            type="submit"
            className="mx-auto block h-12 max-w-44 rounded-full bg-[#4577E4] px-6 py-2 font-semibold text-white transition-all duration-200 hover:scale-105 md:w-1/2"
          >
            send
          </button>
        </form>
      </section>
    </div>
  );
};

// exporting the component so it can be used in other files
export default LeaveMsg;
