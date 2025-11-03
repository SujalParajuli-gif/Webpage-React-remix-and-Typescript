// app/components/privacy-policy.tsx
import React from "react";
import { Link } from "react-router"; // breadcrumb Home link


// simple blue bullet list (with extra spacing + taller line-height)
const BlueList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-6 space-y-3 marker:text-[#2d5fcc] leading-7">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

export default function ContactUsV2() {
  return (
    <div className="bg-white">
      
  

      {/* top banner + breadcrumb */}
      <div className="mx-auto max-w-360 px-5 sm:px-6 lg:px-8 pt-32 pb-4">
        <div className="bg-[#EAF3FF] px-15 py-15 shadow-[0_20px_40px_rgba(69,119,228,0.20)] ring-1 ring-black/5">
          <div className="mb-3 text-[13px] text-black/60">
            <Link to="/" className="hover:text-[#2d5fcc]">Home</Link>
            <span className="mx-1">/</span>
            <span className="text-black">ContactUs</span>
          </div>
          <h1 className="pt-5 text-[43px] font-bold leading-tight text-[#0D1B2A]">Contact Us</h1>
        </div>
      </div>

      {/* two-column layout */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-15 lg:grid-cols-[300px_1fr]">
          {/* left sticky promo */}
          <aside className="relative">
            <div
              className="lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "120px" }}
            >
              <div className="w-88 h-65 relative overflow-hidden rounded-lg border border-black/5 p-8 shadow-[0_12px_28px_rgba(69,119,228,0.10)] ring-2 ring-blue-500 mt-17">
                <img src="/images/sidebarbg.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="relative text-center">
                  <p className="text-[19px] font-semibold leading-7 text-black">
                    Need a website, an app
                    <br />
                    Or some other
                    <br />
                    technological solution?
                  </p>
                  <p className="mt-3 text-[15px]">We have the answers!</p>
                  <a
                    href="#"
                    className="mt-5 inline-block rounded-full bg-[#4577E4] px-10 py-3 text-[17px] font-medium text-white shadow-md ring-1 ring-black/5"
                  >
                    Click for a quote
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* right content */}
           <section className=" relative flex flex-col items-center justify-center text-[#1F1F1F]">
              
          
                {/* container for form and image */}
                <div className="relative min-w-285 flex flex-col md:flex-row items-start justify-center ">
                  {/* form part */}
                  <form
                    className=" md:w-2/3 p-8 space-y-8 mr-70"
                    onSubmit={(e) => e.preventDefault()} // stops the page from refreshing
                  >
                    {/* input fields for name and phone */}
                    <div className="flex flex-col md:flex-row md:space-x-6  ">
                      {/* full name input */}
                      <div className="flex-1 md:mb-0 ">
                        <label className="block text-[16px] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-100  border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl "
                        />
                      </div>
          
                      {/* phone input */}
                      <div className="flex-1">
                        <label className="block text-[16px]font-semibold mb-2">Phone</label>
                        <input
                          type="text"
                          placeholder="phone"
                          className="w-95 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
                        />
                      </div>
                    </div>
          
                    {/* message input area */}
                    <div>
                      <label className="block text-[16px] mb-2 pt-4">message</label>
                      <textarea
                        placeholder="message"
                        rows={5}
                        className="w-200 h-60 border border-gray-200 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-xl"
                      ></textarea>
                    </div>
          
                    {/* privacy policy section */}
                    <div className="flex items-start space-x-2 text-lg text-[#1F1F1F]">
                      <input type="checkbox" className="mt-1" />
                      <p className="leading-relaxed text-[13px] md:text-[14px]">
                        The information you provide will be stored and processed for
                        commercial purposes in Matat Technologies Ltd.'s databases in
                        {" "}
                        
                        <Link
                        to="/privacy-policy" className="text-[#4577E4] font-semibold underline">
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
                      className="w-20 mx-auto block bg-[#7D8EF8] text-white font-semibold py-3 rounded-full hover:bg-[#5b6ce0] transition-all duration-200 mr-150"
                    >
                      send
                    </button>
                  </form>
        
                </div>
              </section>
        </div>
      </div>

    </div>
  );
}
