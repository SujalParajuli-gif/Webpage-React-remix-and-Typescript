import React from "react";
import { Link, useSearchParams } from "react-router";

// helper: normalize a string for safe comparisons (lowercase + trim)
const norm = (s: string) => s.toLowerCase().trim();

// base card styles (same size + rounded + smooth color change)
const baseCard =
  "group flex flex-col items-center justify-center rounded-lg min-h-[150px] w-full transition-colors";
// non-active look (white bg + soft shadow, turns blue on hover)
const inactiveCard =
  "bg-white shadow-[0_8px_22px_rgba(69,119,228,0.15)] hover:bg-[#4577E4] hover:shadow-[0_16px_35px_rgba(69,119,228,0.35)]";
// active look (blue bg + stronger shadow)
const activeCard = "bg-[#4577E4] shadow-[0_16px_35px_rgba(69,119,228,0.35)]";

// icon and label base styles (sizes + transitions)
// icon-xl is defined in app.css => font-size: 35px
const iconBase = "icon-xl transition-colors";
const labelBase =
  "mt-3 text-[21px] font-xl leading-6 text-center transition-colors";

// small helper to render an IcoMoon glyph via its class (e.g., "icon-ux-design")
const Glyph = ({ className }: { className: string }) => (
  <span aria-hidden="true" className={className} />
);

export default function ArticleIconGrid() {
  // read ?label=... from the URL so the matching tile can look active
  const [params] = useSearchParams();
  const active = params.get("label") ?? "";

  // tiles config: label text + the IcoMoon class to show
  // clicking a tile navigates to /article?label=<Label>
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
        {/* responsive grid:
            - 2 columns on small screens
            - 3 on sm+
            - 6 on lg+
            gap controls space between tiles */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ label: text, iconClass }) => {
            // active state check (case/space-insensitive)
            const isActive = norm(text) === norm(active);

            return (
              <Link
                key={text}
                // send label in the query so detail/list pages can filter
                to={{
                  pathname: "/article",
                  search: `?label=${encodeURIComponent(text)}`,
                }}
                // choose active or inactive style while keeping base styles
                className={[
                  baseCard,
                  isActive ? activeCard : inactiveCard,
                ].join(" ")}
              >
                {/* icon: white when active; otherwise black that turns white on hover */}
                <Glyph
                  className={[
                    iconBase,
                    iconClass,
                    isActive
                      ? "text-white"
                      : "text-black group-hover:text-white",
                  ].join(" ")}
                />

                {/* label: same color behavior as the icon */}
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
