import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link, useLocation } from "react-router"; // added useLocation for detecting current route
import LeaveMsg from "./LeaveMsg";

// we render the main header bar with scroll-aware styles and per-page color rules
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

  // get current route path to apply underline dynamically
  const location = useLocation();

  // code color behavior
  // This map defines how the nav text, icons, and the "Leave a Message"/phone text behave
  // when at top vs after scroll for each route.
  const pageMap: Record<
    string,
    {
      navTop: "white" | "black";
      navScrolled: "white" | "black";
      msgPhoneTextTop: "inherit" | "blue" | "black" | "white";
      msgPhoneTextScrolled: "inherit" | "blue" | "black" | "white";
      mailIconTop: "white" | "blue";
      mailIconScrolled: "white" | "blue";
      phoneIconTop: "white" | "blue";
      phoneIconScrolled: "white" | "blue";
    }
  > = {
    // Home page behavior
    "/": {
      navTop: "white",
      navScrolled: "black",
      msgPhoneTextTop: "inherit", // inherits nav color (white at top)
      msgPhoneTextScrolled: "inherit", // inherits nav color (black after scroll)
      mailIconTop: "white",
      mailIconScrolled: "blue",
      phoneIconTop: "white",
      phoneIconScrolled: "blue",
    },
    // Article page behavior
    "/article": {
      navTop: "black",
      navScrolled: "black",
      msgPhoneTextTop: "blue", // blue at top
      msgPhoneTextScrolled: "black",
      mailIconTop: "blue",
      mailIconScrolled: "blue",
      phoneIconTop: "blue",
      phoneIconScrolled: "blue",
    },
    // Vibez page
    "/vibez": {
      navTop: "white",
      navScrolled: "black",
      msgPhoneTextTop: "inherit",
      msgPhoneTextScrolled: "inherit",
      mailIconTop: "white",
      mailIconScrolled: "blue",
      phoneIconTop: "white",
      phoneIconScrolled: "blue",
    },
    // Fallback (acts like home)
    "*": {
      navTop: "white",
      navScrolled: "black",
      msgPhoneTextTop: "inherit",
      msgPhoneTextScrolled: "inherit",
      mailIconTop: "white",
      mailIconScrolled: "blue",
      phoneIconTop: "white",
      phoneIconScrolled: "blue",
    },
  };

  // pick settings for current page (use "*" when path not listed)
  let pageCfg = pageMap[location.pathname]; // try exact path first
  if (!pageCfg) {
    pageCfg = pageMap["*"]; // fallback behavior (acts like home)
  }

  // small helper: turn our tokens into Tailwind classes
  function toTextClass(c: "white" | "black" | "blue" | "inherit") {
    // "white" => white text
    if (c === "white") return "text-white";
    // "black" => black text
    if (c === "black") return "text-black";
    // "blue" => site blue
    if (c === "blue") return "text-blue-600";
    // "inherit" => keep parent color
    return "";
  }

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
          isAtTop ? "bg-transparent shadow-none" : "bg-white/90 backdrop-blur-md shadow-lg",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Left side logo */}
          <div className="flex items-center space-x-3">
            <div className="flex flex-col gap-1">
              <Link to="/">
                {/* using Link instead of a tag for Home too */}
                <img src="/logos/matat-logo.png" alt="Matat Logo" className="w-52" />
              </Link>
            </div>
          </div>

          {/* Right side text links */}
          {/*We add only color control + smooth transition here other things like inner items stays untouched */}
          <nav
            className={[
              "flex space-x-9 text-base font-bold ",
              // color from pageMap (top vs scrolled)
              isAtTop ? toTextClass(pageCfg.navTop) : toTextClass(pageCfg.navScrolled),
              // smooth color change
              "transition-colors duration-10 ease-in-out",
            ].join(" ")}
          >
            {/* Home link with active underline */}
            <Link
              to="/"
              className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                ${location.pathname === "/" ? "after:w-full" : "after:w-0"} 
                after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out`}
            >
              Home
            </Link>

            {/* CHANGED: use Link so it can get active underline */}
            <Link
              to="/vibez"
              className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                ${location.pathname === "/vibez" ? "after:w-full" : "after:w-0"} 
                after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out `}
            >
              VIBEZ Project
            </Link>

            {/* Link helps to go to another page (Article route) without refreshing the entire page*/}
            <Link
              to="/article"
              className={`relative after:absolute after:left-0 after:bottom-0 after:h-[2px]
                ${location.pathname === "/article" ? "after:w-full" : "after:w-0"}
                after:bg-current hover:after:w-full after:transition-all after:duration-300 after:ease-in-out`}
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
                    "text-2xl transition-transform duration-300 ease-in-out group-hover:scale-125",
                    // color from map (white at top on "/")
                    isAtTop ? toTextClass(pageCfg.mailIconTop) : toTextClass(pageCfg.mailIconScrolled),
                  ].join(" ")}
                />

                <span
                  className={[
                    // text near the icon: follows map (inherit means use nav color above)
                    isAtTop
                      ? toTextClass(pageCfg.msgPhoneTextTop)
                      : toTextClass(pageCfg.msgPhoneTextScrolled),
                    // DEFAULT variant inherits nav color
                    "transition-colors duration-200",
                  ].join(" ")}
                >
                  Leave a Message
                </span>
              </div>
            </a>

            <a href="#" className="group">
              <div className="flex items-center gap-2">
                <FaPhone
                  className={[
                    "text-base transition-transform duration-300 ease-in-out group-hover:scale-125",
                    // color from map (white at top on "/")
                    isAtTop ? toTextClass(pageCfg.phoneIconTop) : toTextClass(pageCfg.phoneIconScrolled),
                  ].join(" ")}
                />
                <span
                  className={[
                    // text near the icon: follows map (inherit means use nav color above)
                    isAtTop
                      ? toTextClass(pageCfg.msgPhoneTextTop)
                      : toTextClass(pageCfg.msgPhoneTextScrolled),
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
