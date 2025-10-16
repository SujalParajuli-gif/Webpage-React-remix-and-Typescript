import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import LeaveMsg from "./LeaveMsg"; 


export default function Header() {
  //creating usestate for changing data when input is at top or when onscroll
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setIsAtTop(y < 10); // this makes the header transparent when it is at top
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  // controls LeaveMsg popup visibility 
  const [showLeaveMsg, setShowLeaveMsg] = useState(false);

  // NEW: wrap return in a fragment so we can render the popup after the header
  return (
    <>
      <header
        className={[
          // when the header postion is at the top
          "fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-in-out",
          // spacing
          "px-4 md:px-12 pb-1 pt-1",
          // styles based on scroll
          isAtTop
            ? "bg-transparent shadow-none"
            : "bg-white/90 backdrop-blur-md shadow-lg",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Left side logo */}
          <div className="flex items-center space-x-3">
            <div className="flex flex-col gap-1">
              <a href="#">
                <img
                  src="/logos/matat-logo.png"
                  alt="Matat Logo"
                  className="h-13 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right side text links */}
          {/*We add only color control + smooth transition here other things like inner items stays untouched */}
          <nav
            className={[
              "flex space-x-9 text-base font-bold",
              // color for when it is at the top
              isAtTop ? "text-white" : "text-black",
              // smooth color change
              "transition-colors duration-10 ease-in-out",
            ].join(" ")}
          >
            <a href="#" className="underline underline-offset-5">
              Home
            </a>

            <a
              href="#"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
            >
              VIBEZ Project
            </a>

            <a
              href="#"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
            >
              Database
            </a>

            <a
              href="#"
              className="group"
              onClick={(e) => {
                e.preventDefault();
                setShowLeaveMsg(true);
              }}
            >
              <div className="flex items-center gap-2">
                <IoIosMail
                  className={[
                    "text-blue-600 text-2xl transition-transform duration-300 ease-in-out group-hover:scale-125",
                    isAtTop ? "!text-white" : "!text-black",
                  ].join(" ")}
                />
                Message Us
              </div>
            </a>

            <a href="#" className="group">
              <div className="flex items-center gap-2">
                <FaPhone
                  className={[
                    "text-blue-600 text-base transition-transform duration-300 ease-in-out group-hover:scale-125",
                    isAtTop ? "!text-white" : "!text-black",
                  ].join(" ")}
                />
                <span>055-9909090</span>
              </div>
            </a>
          </nav>
        </div>
      </header>

      {/*render existing LeaveMsg component when state is true */}
      {showLeaveMsg && <LeaveMsg onClose={() => setShowLeaveMsg(false)} />}
    </>
  );
}
