import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router";
import LeaveMsg from "./LeaveMsg";

// added variant prop so we can reuse header with small style changes on other pages
export default function Header({ variant = "default" }: { variant?: "default" | "article" }) {
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

  //wrap return in pices so we can render the popup after the header
  return (
    <>
      <header
        className={[
          // when the header postion is at the top
          "fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-in-out",
          // spacing
          "px-4 md:px-12 pb-2 pt-4",
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
              <Link to="/">
                {/* using Link instead of a tag for Home too */}
                <img
                  src="/logos/matat-logo.png"
                  alt="Matat Logo"
                  className="w-51"
                />
              </Link>
            </div>
          </div>

          {/* Right side text links */}
          {/*We add only color control + smooth transition here other things like inner items stays untouched */}
          <nav
            className={[
              "flex space-x-9 text-base font-bold ",
              // color for when it is at the top (changes if variant is 'article')
              variant === "article"
                ? "text-black"
                : isAtTop
                ? "text-white"
                : "text-black",
              // smooth color change
              "transition-colors duration-10 ease-in-out",
            ].join(" ")}
          >
            <Link
              to="/"
              className="underline underline-offset-5"
            >
              Home
            </Link>

            <a
              href="#"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out "
            >
              VIBEZ Project
            </a>

            {/* Link helps to go to another page (Article route) without refreshing the entire page*/}
            <Link
              to="/article"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out "
            >
              Database
            </Link>

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
                    // use variant to decide colors (article page keeps blue, home uses scroll logic)
                    variant === "article"
                      ? "text-blue-600"         // article: always blue
                      : isAtTop
                      ? "!text-white"           // home top: white
                      : "!text-blue-600",       // home scrolled: BLUE (changed from black)
                  ].join(" ")}
                />
                <span
                  className={[
                    // ARTICLE ONLY: blue at top, black on scroll
                    variant === "article"
                      ? (isAtTop ? "text-blue-600" : "text-black")
                      : "",
                    // DEFAULT variant inherits nav color 
                    "transition-colors duration-200",
                  ].join(" ")}
                >
                  Message Us
                </span>
              </div>
            </a>

            <a href="#" className="group">
              <div className="flex items-center gap-2">
                <FaPhone
                  className={[
                    "text-blue-600 text-base transition-transform duration-300 ease-in-out group-hover:scale-125",
                    // use variant to decide colors (article page keeps blue, home uses scroll logic)
                    variant === "article"
                      ? "text-blue-600"         // article: always blue
                      : isAtTop
                      ? "!text-white"           // home top: white
                      : "!text-blue-600",       // home scrolled: BLUE 
                  ].join(" ")}
                />
                <span
                  className={[
                    // ARTICLE ONLY: blue at top, black on scroll
                    variant === "article"
                      ? (isAtTop ? "text-blue-600" : "text-black")
                      : "",
                    // DEFAULT variant inherits nav color
                    "transition-colors duration-200",
                  ].join(" ")}
                >
                  055-9909090
                </span>
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
