import React from "react";
import { Link } from "react-router"; // used for internal SPA links

const Footer = () => {
  return (
    <footer className="relative bg-white text-black pt-20  overflow-hidden">
      {/* Top curved blue bar */}
      <div className="pointer-events-none select-none absolute -top-2 -left-300 w-1100 z-0">
        <img
          src="/shapes/footer-shape.svg"
          alt=""
          aria-hidden="true"
          className="w-1100 h-110 block"
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-40">
        {/* Column 1: Follow us */}
        <div>
          <h3 className="text-lg font-extrabold mb-4">Follow us</h3>
          <div className="flex gap-9">
            <a
              href="#"
              className="text-2xl transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <img src="/logos/facebook-2.svg" alt="Facebook" />
            </a>
            <a
              href="#"
              className="text-2xl transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <img src="/logos/instagram-2.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-25 text-[13px]">
          <h3 className=" font-bold mb-4 text-[16px] ">Quick Links</h3>
          <ul className="space-y-4 text-[14px]">
            <li>
              {/* internal link to our article list (meaning "Database") */}
              <Link
                to="/article"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Database
              </Link>
            </li>
            <li>
              <Link
                to="/accessibility_statement"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Accessibility Statement
              </Link>
            </li>

            <li>
              {/* internal link to the Privacy Policy page */}
              <Link
                to="/privacy-policy"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              {/* placeholder until you have a route */}
              <Link
                to="/ContactUsV2"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Products */}
        <div className="w-47 text-[13px]">
          <h3 className="font-bold mb-4 text-[16px]">Our Products</h3>
          <ul className="space-y-4 text-[14px]">
            <li>
              <Link
                to="/vibez"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                VIBEZ Project
              </Link>
            </li>
            <li>
              <a
                href="https://mflow.co.il/"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Mflow ERP
              </a>
            </li>
            <li>
              <a
                href="https://textme.co.il/"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                TextMe SMS - Mailing System
              </a>
            </li>
            <li>
              <a
                href="https://app.shipos.co.il/login"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                Ship OS - Shipment Management System
              </a>
            </li>
          </ul>
        </div>
        {/* Column 4: Logo and About */}
        <div className="flex flex-col items-start w-70">
          <img
            src="/logos/matat-logo.png"
            alt="Matat Logo"
            className="h-10 w-auto mb-4"
          />
          <p className="text-[13px] leading-relaxed text-left ">
            Home Software for Sales Website Development and advanced systems,
            based on WordPress and Shopify platforms.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-[#E9F3FF] border-t border-gray-100 py-3 flex justify-between items-center px-70 text-xs mb-2">
        <div className="flex items-center gap-2">
          <span>Developed by Matat Technologies LTD</span>
          <img
            src="/images/new-logo.svg"
            alt="New Logo"
            className="h-4 w-auto"
          />
        </div>
        <p>All rights reserved to Mata Technologies Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
