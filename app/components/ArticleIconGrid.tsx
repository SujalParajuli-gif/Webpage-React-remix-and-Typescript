import React from "react";
import { Link } from "react-router"; // client-side navigation between routes
import { FiShoppingCart, FiLayout, FiCode, FiMonitor } from "react-icons/fi";
import { LuMegaphone } from "react-icons/lu";

// Reusable Tailwind classes (kept simple + with proper spacing)
const card =
  // main card box + layout
  "group flex flex-col items-center justify-center rounded-lg min-h-[150px] w-full " +
  // base surface + soft ring/shadow
  "bg-white shadow-[0_8px_22px_rgba(69,119,228,0.15)] " +
  // hover styles
  "transition-colors hover:bg-[#4577E4] hover:shadow-[0_16px_35px_rgba(69,119,228,0.35)]";

const icon = "text-[30px] text-black transition-colors group-hover:text-white";
const label =
  "mt-3 text-[18px] leading-6 text-black text-center transition-colors group-hover:text-white";

// Grid of clickable tiles shown under the Article banner
export default function ArticleIconGrid() {
  // Simple config for each tile: destination route, label text, and icon component
  const items = [
    { to: "/article/promotions", label: "Promotions", Icon: FiShoppingCart },
    { to: "/article/ecommerce", label: "E commerce", Icon: FiShoppingCart },
    { to: "/article/ux", label: "UX Characterization", Icon: FiLayout },
    { to: "/article/ship-os", label: "Ship OS", Icon: FiCode },
    { to: "/article/additives", label: "Additives", Icon: FiMonitor },
    { to: "/article/marketing", label: "Marketing & Promotion", Icon: LuMegaphone },
  ];

  return (
    // MAIN WRAPPER
    <section className="w-full py-4 pt-0">
      {/* centers content and adds padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* this makes the grid responsive tight on mobile, grows to 6 cols on desktop */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ to, label: text, Icon }) => (
            <Link key={to} to={to} className={card}>
              <Icon className={icon} />
              <span className={label}>{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
