// app/components/ArticleIconGrid.tsx
import React from "react";
import { Link, useSearchParams } from "react-router";
// NOTE: we switched to IcoMoon classes instead of react-icons to match with the website

// simple helpers we use in multiple places
const norm = (s: string) => s.toLowerCase().trim();

// base pieces (we keep hover behavior for non-active tiles)
const baseCard =
  "group flex flex-col items-center justify-center rounded-lg min-h-[150px] w-full transition-colors";
const inactiveCard =
  "bg-white shadow-[0_8px_22px_rgba(69,119,228,0.15)] hover:bg-[#4577E4] hover:shadow-[0_16px_35px_rgba(69,119,228,0.35)]";
const activeCard = "bg-[#4577E4] shadow-[0_16px_35px_rgba(69,119,228,0.35)]";

const iconBase = "icon-xl transition-colors"; // icon-xl -> font-size:35px (we defined this in app.css)
const labelBase =
  "mt-3 text-[21px] font-xl leading-6 text-center transition-colors";

// small helper so we can render an IcoMoon glyph by class like "icon-ux-design"
const Glyph = ({ className }: { className: string }) => (
  <span aria-hidden="true" className={className} />
);

export default function ArticleIconGrid() {
  // we read current ?label=... so we can highlight the active card
  const [params] = useSearchParams();
  const active = params.get("label") ?? "";

  // each tile represents a label from our JSON
  // we map labels to IcoMoon class names we added in app.css
  const items = [
    { label: "Promotions", iconClass: "icon-ecommerce" },
    { label: "E commerce", iconClass: "icon-ecommerce" },
    { label: "UX Characterization", iconClass: "icon-ux-design" },
    { label: "Ship OS", iconClass: "icon-development" },
    { label: "Additives", iconClass: "icon-extensions" },
    { label: "Marketing & Promotion", iconClass: "icon-megaphone" },
  ];

  return (
    <section className="w-full pt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ label: text, iconClass }) => {
            // if this matches ?label=..., we render the active style
            const isActive = norm(text) === norm(active);

            return (
              <Link
                key={text}
                to={{
                  pathname: "/article",
                  search: `?label=${encodeURIComponent(text)}`,
                }} // we send label for query
                className={[
                  baseCard,
                  isActive ? activeCard : inactiveCard,
                ].join(" ")}
              >
                {/* icon color switches to white when active otherwise black also turns white on hover */}
                <Glyph
                  className={[
                    iconBase,
                    iconClass,
                    isActive
                      ? "text-white"
                      : "text-black group-hover:text-white",
                  ].join(" ")}
                />

                {/* text color switches to white when active otherwise black also turns white on hover */}
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
