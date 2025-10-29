import React from "react";
import { useNavigate } from "react-router"; // used for navigation
import { FiArrowLeft } from "react-icons/fi"; // left arrow icon
import items from "../data/articles.json"; // JSON data file

// This type matches the JSON directly (no normalizer)
type ArticleItem = {
  id: string; // unique id
  title: string; // heading text
  summary: string; // short text under the title
  labels?: string[]; // tag chips
  paths: string; // URL part used for /article/:paths
};

const ACCENT = "#2d5fcc"; // shared accent color for hovers

// Small round arrow button; hover flips colors; click goes to detail page
const LeftAction: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick} // navigates to the detail page
    aria-label="Open article"
    className={[
      "inline-flex h-8 w-8 items-center justify-center rounded-full",
      "bg-[color:var(--accent)] text-white ring-1 ring-[color:var(--accent)]/20",
      "shadow-sm transition-colors duration-200",
      "hover:bg-white hover:text-[color:var(--accent)]",
    ].join(" ")}
    style={{ ["--accent" as any]: ACCENT }}
  >
    <FiArrowLeft className="h-4 w-4" />
  </button>
);

// Card shell for spacing, radius, and shadow
const CardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-60 w-95 ml-19 flex-col  rounded-2xl bg-white p-5 shadow-[0_20px_40px_rgba(69,119,228,0.12)] ring-1 ring-black/5">
    {children}
  </div>
);

// Single text card with title + summary + footer (button + chips)
const TextCard: React.FC<{ item: ArticleItem }> = ({ item }) => {
  const navigate = useNavigate(); // used by title and arrow button

  return (
    <CardShell>
      {/* title: hover only on the h4; click navigates to detail */}
      <h4
        onClick={() => navigate(`/article/${item.paths}`)} // title click navigates
        className={[
          "mb-2 text-[19px] font-bold leading-6 text-[#0D1B2A]",
          "[font-family:inherit]", // heading uses page font
          "cursor-pointer transition-colors duration-200",
          "hover:text-[color:var(--accent)]", // hover only on h4
        ].join(" ")}
        style={{ ["--accent" as any]: ACCENT }}
      >
        {item.title}
      </h4>

      {/* summary text */}
      <p
        className={[
          "text-[14px] leading-relaxed text-[rgb(0_0_0_/_60%)] pb-3",
          "[font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif]",
        ].join(" ")}
      >
        {item.summary}
      </p>

      {/* left button + tags inside their own wrappers */}
      <div className={[" mt-auto flex items-center justify-between"].join(" ")}>
        {/* left: action button */}
        <div className="post-action">
          <LeftAction onClick={() => navigate(`/article/${item.paths}`)} />
        </div>

        <div
          className={[
            "post-cat flex flex-wrap justify-end",
            "gap-x-3 gap-y-2", // horizontal/vertical space between chips
            "pl-4", // space between button group and chips group
          ].join(" ")}
        >
          {item.labels?.map((t) => (
            <span
              key={t}
              className={[
                "rounded-full px-3 py-1 text-[13px]",
                "bg-[#e2f1ff] text-black",
                "[font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif]",
                "transition-colors duration-200",
                "hover:bg-[color:var(--accent)] hover:text-white",
              ].join(" ")}
              style={{ ["--accent" as any]: ACCENT }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </CardShell>
  );
};

// Renders all cards from JSON in a 1/2/3 column grid
export default function ArticleGrid() {
  //the grid's gap controls spacing between cards
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-9xl px-5 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-17 md:grid-cols-2 lg:grid-cols-3">
          {(items as ArticleItem[]).map((it) => (
            <TextCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
