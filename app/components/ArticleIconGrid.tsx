// app/components/ArticleIconGrid.tsx
import React from "react";
import { Link, useSearchParams } from "react-router";
import { FiShoppingCart, FiLayout, FiCode, FiMonitor } from "react-icons/fi";
import { LuMegaphone } from "react-icons/lu";

// simple helpers used in multiple places
const norm = (s: string) => s.toLowerCase().trim();

// base pieces (keeps hover behavior for non-active tiles)
const baseCard =
  "group flex flex-col items-center justify-center rounded-lg min-h-[150px] w-full transition-colors";
const inactiveCard =
  "bg-white shadow-[0_8px_22px_rgba(69,119,228,0.15)] hover:bg-[#4577E4] hover:shadow-[0_16px_35px_rgba(69,119,228,0.35)]";
const activeCard = "bg-[#4577E4] shadow-[0_16px_35px_rgba(69,119,228,0.35)]";

const iconBase = "text-[30px] transition-colors";
const labelBase = "mt-3 text-[18px] leading-6 text-center transition-colors";

export default function ArticleIconGrid() {
  // read current ?label=... so we can highlight the active card
  const [params] = useSearchParams();
  const active = params.get("label") ?? "";

  // each tile represents a label from our JSON
  const items = [
    { label: "Promotions", Icon: FiShoppingCart },
    { label: "E commerce", Icon: FiShoppingCart },
    { label: "UX Characterization", Icon: FiLayout },
    { label: "Ship OS", Icon: FiCode },
    { label: "Additives", Icon: FiMonitor },
    { label: "Marketing & Promotion", Icon: LuMegaphone },
  ];

  return (
    <section className="w-full pt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ label: text, Icon }) => {
            // if this matches ?label=..., we render the active style
            const isActive = norm(text) === norm(active);

            return (
              <Link
                key={text}
                to={{
                  pathname: "/article",
                  search: `?label=${encodeURIComponent(text)}`,
                }} // send label for query
                className={[
                  baseCard,
                  isActive ? activeCard : inactiveCard,
                ].join(" ")}
              >
                {/* icon color switches to white when active; otherwise black and turns white on hover */}
                <Icon
                  className={[
                    iconBase,
                    isActive
                      ? "text-white"
                      : "text-black group-hover:text-white",
                  ].join(" ")}
                />

                {/* text color switches to white when active; otherwise black and turns white on hover */}
                <span
                  className={[
                    labelBase,
                    isActive
                      ? "text-white"
                      : "text-black group-hover:text-white",
                  ].join(" ")}
                >
                  {text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
