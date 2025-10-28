import React from "react";
import { Link } from "react-router"; // client-side navigation between routes
import { FiShoppingCart, FiLayout, FiCode, FiMonitor } from "react-icons/fi"; // feather-style icons
import { LuMegaphone } from "react-icons/lu"; // icons like megaphone

// Reusable Tailwind classes 
const card = "h-36 w-38 pt-5 group flex flex-col items-center justify-center rounded-xl radius" + "bg-white shadow-[0_8px_22px_rgba(69,119,228,0.15)] " + "transition-colors hover:bg-[#4577E4] hover:shadow-[0_16px_35px_rgba(69,119,228,0.35)]";


const icon =
  "text-[30px] text-black transition-colors group-hover:text-white"; // icon turns white on hover
const label =
  "mt-3 text-[18px] leading-6 text-black text-center transition-colors group-hover:text-white"; // text turns white on hover

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
    // Responsive grid: 2 cols (mobile), 3 cols (sm), 6 cols 
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
      {items.map(({ to, label: text, Icon }) => (
        // Link = SPA navigation; 
        <Link key={to} to={to} className={card}>
          {/* Icon inherits color and switches with group-hover */}
          <Icon className={icon} />
          {/* Label below the icon */}
          <span className={label}>{text}</span>
        </Link>
      ))}
    </div>
  );
}
