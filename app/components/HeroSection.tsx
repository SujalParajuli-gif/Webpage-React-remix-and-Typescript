import React from "react";

const HeroSection = () => {
  return (
    // Hero main section
    <section className="relative overflow-hidden bg-white">
      {/* Blue curved background */}
      <div>
        
        <img src="/shapes/header-bg-01.svg" className="absolute w-53rem top-0 opacity-100"></img>
      </div>

      {/* Light blue circle */}
      <div>
        
        <img src="/shapes/header-bg-02.svg" className="absolute w-full bottom-150 opacity-100 "></img>
      </div>

      {/* Main content area */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16">
        {/* Flex container for image and text */}
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left side - Image */}
          <div className="hero-image w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/element_1.svg"
              alt="Shopping illustration"
              className="w-full max-w-[600px] lg:max-w-[650px] scale-130 drop-shadow-[0_20px_40px_rgba(0,0,0,0.10)] mt-10"
            />
          </div>

          {/* Right side - Text and logos */}
          <div className="hero-text w-full lg:w-1/2 text-left transform translate-x-25 translate-y-10 ">


            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-gray-900">
              Do you need an efficient, high-quality and most importantly
              <span className="block">fast sales website?</span>
            </h1>

            {/* Sub text */}
            <p className="mt-5 text-gray-600 max-w-md">
              Leave your details and we will get back to you as soon as possible.
            </p>

            {/* Partner logos */}
            <div className="hero-banners mt-8 flex items-center gap-6">
              <img
                src="/logos/woocommerce.png"
                alt="WooCommerce"
                className="h-8 w-auto"
              />
              <img
                src="/logos/shopify-partners.png"
                alt="Shopify Partners"
                className="h-8 w-auto"
              />
            </div>

            {/* Social links */}
            <div className="hero-socials mt-8 flex items-center gap-5">
              {/* Instagram button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100 text-gray-800 font-medium "
              >
                <img src="/logos/instagram.svg" className="text-xl text-[#E1306C] hover:scale-115 transition-transform">
                </img>
                <span>Instagram</span>
              </a>

              {/* Facebook button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.10)] border border-gray-100 text-gray-800 font-medium "
              >
                 <img src="/logos/facebook.svg" className="text-xl text-[#E1306C] hover:scale-115 transition-transform">
                </img>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
