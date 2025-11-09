import { useEffect, useState } from "react";
import { Link } from "react-router"; // no useLocation

// Minimal header used on Article Details pages
export default function Header_ArticleDetails() {
  const [isAtTop, setIsAtTop] = useState(true); // tracks top-of-page for bg/shadow

  useEffect(() => {
    const onScroll = () =>
      setIsAtTop((window.scrollY || window.pageYOffset) < 10);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-in-out",
        "px-4 md:px-12 pb-2 pt-4",
        isAtTop
          ? "bg-transparent shadow-none"
          : "bg-white/90 backdrop-blur-md shadow-lg",
      ].join(" ")}
    >
      <div className="max-w-350 mx-auto flex justify-between items-center p-4">
        {/* left: logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logos/matat-logo.png" alt="Matat Logo" className="w-50" />
        </Link>

        {/* right: only Home & Database */}
        <nav className="flex space-x-12 text-base">
          <Link to="/" className="transition-colors hover:text-blue-600">
            Home
          </Link>

          <Link to="/article" className="transition-colors hover:text-blue-600">
            Database
          </Link>
        </nav>
      </div>
    </header>
  );
}
