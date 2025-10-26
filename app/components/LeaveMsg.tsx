import React from "react";

// props type for closing from parent (Header)
type LeaveMsgProps = {
  onClose: () => void;
};

// main contact us component
const LeaveMsg: React.FC<LeaveMsgProps> = ({ onClose }) => {
  return (
    // Fullscreen overlay for popup centering
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      // NEW: click on overlay closes popup
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Popup container */}
      <section
        className="relative bg-white rounded-2xl shadow-2xl p-20 h-170 max-w-3xl"
        // NEW: prevent overlay close when clicking inside the panel
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon (optional, you can link it to hide popup later) */}
        <button
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-700"
          // NEW: actually close the popup
          onClick={onClose}
          aria-label="Close"
        >
          
        </button>

        {/* heading text */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4577E4] mb-10 text-center">
          Leave a Message
        </h2>

        {/* form part */}
        <form
          className="w-full bg-white space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* input fields for name and phone */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* full name input */}
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-lg font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
              />
            </div>

            {/* phone input */}
            <div className="flex-1">
              <label className="block text-lg font-semibold mb-2">Phone</label>
              <input
                type="text"
                placeholder="phone"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
              />
            </div>
          </div>

          {/* message input area */}
          <div>
            <label className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              placeholder="message"
              rows={5}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
            ></textarea>
          </div>

          {/* privacy policy section */}
          <div className="flex items-start space-x-2 text-lg text-[#1F1F1F]">
            <input type="checkbox" className="mt-1" />
            <p className="leading-relaxed text-[13px] md:text-[14px]">
              The information you provide will be stored and processed for
              commercial purposes in Matat Technologies Ltd.'s databases in
              accordance with{" "}
              <a href="#" className="text-[#4577E4] font-semibold underline">
                the Privacy Policy
              </a>
              . I am not obligated to provide the information in accordance with
              the law, but without providing the information we will not be able
              to contact you or handle your request.
            </p>
          </div>

          {/* send button */}
          <button
            type="submit"
            className="w-full md:w-1/2 mx-auto block bg-[#7D8EF8] text-white font-semibold py-2 rounded-full hover:bg-[#5b6ce0] transition-all duration-200"
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
