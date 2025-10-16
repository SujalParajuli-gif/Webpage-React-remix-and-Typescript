import React from "react";

// main contact us component
const ContactUs: React.FC = () => {
  return (
    // main section wrapper for the contact form
    <section className="relative flex flex-col items-center justify-center bg-white text-[#1F1F1F]">
      {/* heading text */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4577E4] mb-10">
        Contact Us
      </h2>

      {/* container for form and image */}
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full max-w-4xl ml-85 ">
        {/* form part */}
        <form
          className="w-full md:w-2/3 bg-white p-8 space-y-6"
          onSubmit={(e) => e.preventDefault()} // stops the page from refreshing
        >
          {/* input fields for name and phone */}
          <div className="flex flex-col md:flex-row md:space-x-6  ">
            {/* full name input */}
            <div className="flex-1 mb-4 md:mb-0 ">
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

        {/* right side image */}
        <div className="hidden md:block w-1/3 relative">
          <img
            src="/images/contactus.svg"
            alt="contact us illustration"
            className="relative left-70 top-30 w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

// exporting the component so it can be used in other files
export default ContactUs;
