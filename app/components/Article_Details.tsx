// app/components/Article_Details.tsx
import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import list from "../data/articles.json";            // list for related titles
import detailMap from "../data/article_details.json"; // full article data
import ArticleIconGrid from "../components/ArticleIconGrid";

// list item type (same as our grid)
type ListItem = {
  id: string;
  title: string;
  summary: string;
  labels?: string[];
  paths: string; // slug like "install-anydesk"
};

// one block of content in the detail page
type ContentBlock = {
  type: "p" | "h2" | "ol" | "ul" | "img";
  text?: string;
  items?: string[]; //used by ol and ul
  src?: string;
  alt?: string;
  continue?: boolean; // only used by <ol>
};

// detail record loaded by slug
type DetailEntry = {
  title: string;
  blocks: ContentBlock[];
};

// small divider used in left card
const Divider: React.FC = () => <div className="my-2 h-px w-full bg-black/10" />;

const Article_Details: React.FC = () => {
  // get :paths from url => /article/:paths
  const { paths } = useParams();
  const navigate = useNavigate();

  // read full article by slug from the json map
  const entry: DetailEntry | undefined = paths
    ? (detailMap as Record<string, DetailEntry>)[paths]
    : undefined;

  // fallback when slug not found
  if (!entry) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-35">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p className="mt-2 text-[14px] text-black/60">
          This article has not been added to <code>article_details.json</code> yet.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] text-[#2d5fcc] underline"
        >
          Go back
        </button>
      </div>
    );
  }

  // raise how many related items we keep
  const RELATED_LIMIT = 4; //change to the limit that we want rn its 4 and our json data has 5 datas and this excludes current selection so it shows 4 data
  const related = Array.from(
    new Map(
      (list as ListItem[])
        .filter((it) => it.paths !== paths) // skip the current article
        .map((it) => [it.id, it])           // Map de-dupes by id
    ).values()
  ).slice(0, RELATED_LIMIT);                 // use the limit here

  return (
    <div className="bg-white">
      {/* top banner with nav links and title */}
      <div className={["mx-auto max-w-360 px-5 sm:px-6 lg:px-8", "pt-32 pb-6"].join(" ")}>
        <div
          className={[
            "bg-[#EAF3FF] px-15 py-15",
            "shadow-[0_20px_40px_rgba(69,119,228,0.20)] ring-1 ring-black/5",
          ].join(" ")}
        >
          {/* nav links: Home / Database / Title */}
          <div className="mb-3 text-[13px] text-black/60">
            <Link to="/" className="hover:text-[#2d5fcc]">Home</Link>
            <span className="mx-1">/</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1); // back to previous page
              }}
              className="hover:text-[#2d5fcc]"
            >
              Database
            </a>
            <span className="mx-1">/</span>
            <span className="text-black">{entry.title}</span>
          </div>

          {/* main page title */}
          <h1 className="pt-5 text-[43px] font-bold leading-relaxed text-[#0D1B2A]">
            {entry.title}
          </h1>
        </div>
      </div>

      {/* main layout: left related sticky layout + right article content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-[300px_1fr]">
          {/* LEFT COLUMN (sticky wrapper) */}
          <div className="relative ">
            <div
              className=" lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "150px" }}
            >

              <aside className="space-y-10 max-h-120">
                {/* Related Articles card */}
                <div
                  key={paths} // remount on route change so nothing stacks
                  className="max-h-120 rounded-lg border border-black/5 bg-white shadow-[0_12px_28px_rgba(69,119,228,0.10)] w-88 p-6 overflow-hidden"
                >
                  <h3 className="mb-4 text-center text-[15px] font-bold text-gray-400">
                    Related Articles
                  </h3>

                  <ul className="text-[18px]">
                    {related.map((it, idx) => (
                      <li key={it.id} className="py-3">
                        <div className="flex items-start gap-2 min-w-0">
                          <span className="text-[15px] text-black flex-shrink-0">{idx + 1}</span>
                          <Link
                            to={`/article/${it.paths}`}
                            className="leading-6 hover:text-[#2d5fcc]  block max-w-full"
                            title={it.title}
                          >
                            {it.title}
                          </Link>
                        </div>
                        {/* no divider after the last visible item */}
                        {idx < related.length - 1 && <Divider />}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 text-center">
                    <Link to="/article" className="text-[14px] text-[#2d5fcc] hover:underline">
                      See all articles
                    </Link>
                  </div>
                  
                </div>

              
              </aside>
                {/* Promo card with background image */}
                <div className="w-88 h-65 relative overflow-hidden rounded-lg border border-black/5 p-8 shadow-[0_12px_28px_rgba(69,119,228,0.10)] ring-2 ring-blue-500 mt-10 ">
                  <img
                    src="/images/sidebarbg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative text-center">
                    <p className="text-[19px] font-semibold leading-7 text-black">
                      Need a website, an app
                      <br />
                      Or some other
                      <br />
                      technological solution?
                    </p>
                    <p className="mt-3 text-[15px]">We have the answers!</p>

                    <a
                      href="#"
                      className="mt-5 inline-block rounded-full bg-[#4577E4] px-10 py-3 text-[17px] font-medium text-white shadow-md ring-1 ring-black/5"
                    >
                      Click for a quote
                    </a>
                  </div>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: article content */}
          <main className="[font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif]">
            {(() => {
              // keeps ordered-list numbers across blocks
              let stepNo = 1;

              return entry.blocks.map((b, i) => {
                if (b.type === "h2") {
                  return (
                    <h2 key={i} className="mb-3 mt-4 text-[30px] font-semibold">
                      {b.text}
                    </h2>
                  );
                }

                if (b.type === "p") {
                  return (
                    <p key={i} className="mb-8 mt-2 text-[16px] leading-6">
                      {b.text}
                    </p>
                  );
                }

                // ordered list (simple)
                if (b.type === "ol") {
                  const items = b.items ?? [];
                  const start = b.continue ? stepNo : 1;
                  stepNo = start + items.length; // update for next block

                  return (
                    <ol key={i} start={start} className="mb-8 list-decimal pl-6 text-[16px] leading-6">
                      {items.map((t, j) => {
                        // make first part bold if there is " - " or ":"
                        const dash = t.indexOf(" - ");
                        const colon = t.indexOf(":");
                        const cut = dash !== -1 ? dash : (colon !== -1 ? colon : -1);

                        if (cut === -1) {
                          return (
                            <li key={j} className="mb-3 marker:text-blue-800 marker:font-semibold">
                              {t}
                            </li>
                          );
                        }

                        return (
                          <li key={j} className="mb-3 marker:text-blue-800 marker:font-semibold">
                            <strong>{t.slice(0, cut)}</strong>
                            {t.slice(cut)}
                          </li>
                        );
                      })}
                    </ol>
                  );
                }

                // unordered list
                if (b.type === "ul") {
                  const items = b.items ?? [];

                  return (
                    <ul key={i} className="mb-8 list-disc pl-6 text-[16px] leading-6">
                      {items.map((t, j) => {
                        // make first part bold if there is " – " (en dash) or ":"
                        const EN = " - ";
                        const hasEn = t.indexOf(EN);
                        const colon = t.indexOf(":");
                        const cut = hasEn !== -1 ? hasEn : (colon !== -1 ? colon : -1);

                        if (cut === -1) {
                          return (
                            <li key={j} className="mb-3 marker:text-[#2d5fcc] marker:font-semibold">
                              {t}
                            </li>
                          );
                        }

                        return (
                          <li key={j} className="mb-3 marker:text-[#2d5fcc] marker:font-semibold">
                            <strong>{t.slice(0, cut)}</strong>
                            {t.slice(cut)}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                if (b.type === "img") {
                  return <img key={i} src={b.src} alt={b.alt ?? ""} className="mb-13" />;
                }

                return null;
              });
            })()}
          </main>
        </div>
      </div>

      {/* more categories section */}
      <section className="mb-50 ">
        <div className="mx-auto w-full px-5 sm:px-6 lg:px-8 ">
          <hr className="mb-10 border-t border-black/10" />
          <h2 className="text-[16px] sm:text-[24px] font-bold mb-10 pl-65">More Categories</h2>
        </div>

        <ArticleIconGrid />
      </section>
    </div>
  );
};

export default Article_Details;
