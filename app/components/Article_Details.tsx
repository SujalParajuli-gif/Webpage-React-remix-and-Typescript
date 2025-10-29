// app/components/Article_Details.tsx
import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import list from "../data/articles.json";          // list for related titles
import detailMap from "../data/article_details.json"; // full article data
import ArticleIconGrid from "../components/ArticleIconGrid";

// list item type (same as our grid)
type ListItem = {
  id: string;        // unique id
  title: string;     // heading text
  summary: string;   // short summary
  labels?: string[]; // tags (not used here)
  paths: string;     // slug like "install-anydesk"
};

// one block of content in the detail page
type ContentBlock = {
  type: "p" | "h2" | "ol" | "img"; // paragraph, small heading, ordered list, or image
  text?: string;                   // text for p/h2
  items?: string[];                // items for ordered list
  src?: string;                    // image path
  alt?: string;                    // image alt
  continue?: boolean;              // if true, continue numbering from previous <ol>
};

// detail record loaded by slug
type DetailEntry = {
  title: string;          // main page title
  blocks: ContentBlock[]; // ordered content blocks
};

// simple divider used in left card
const Divider: React.FC = () => <div className="my-2 h-px w-full bg-black/10" />;

const Article_Details: React.FC = () => {
  // get :paths from url => /article/:paths
  const { paths } = useParams();
  const navigate = useNavigate();

  // read full article by slug from the json map
  const entry: DetailEntry | undefined = paths
    ? (detailMap as Record<string, DetailEntry>)[paths]
    : undefined;

  // NON data entry handling (simple fallback)
  if (!entry) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-16">
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

  // small related list left side = first 4 titles (skip current topic if it exists)
  const related = (list as ListItem[]).filter((it) => it.paths !== paths).slice(0, 4);

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
            {/* Home goes to real home page */}
            <Link to="/" className="hover:text-[#2d5fcc]">
              Home
            </Link>
            <span className="mx-1">/</span>

            {/* Database LINK goes back to previous page */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1); // goes back to the previous page
              }}
              className="hover:text-[#2d5fcc]"
            >
              Database
            </a>
            <span className="mx-1">/</span>

            {/* current title (not a link) */}
            <span className="text-black">{entry.title}</span>
          </div>

          {/* main page title */}
          <h1 className="pt-5 text-[43px] font-bold leading-tight text-[#0D1B2A]">
            {entry.title}
          </h1>
        </div>
      </div>

      {/* main layout: left related sticky layout + right article content */}
      <div
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16"
        // The sticky area stops when this container ends (before the <hr/>).
      >
        <div className="grid grid-cols-1 gap-25 lg:grid-cols-[300px_1fr]">
          {/* LEFT COLUMN (sticky wrapper) */}
          <div className="relative">
            {/* Sticky sidebar on lg screen also adjusts -stick-top if header height changes. */}

            <div
              className="lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "120px" }}
            >
              <aside className="space-y-10">
                {/* Related Articles card */}
                <div className=" rounded-lg border border-black/5 bg-white shadow-[0_12px_28px_rgba(69,119,228,0.10)] w-80 p-6">
                  <h3 className="mb-4 text-center text-[15px] font-bold text-gray-400">
                    Related Articles
                  </h3>

                  <ul className="text-[15px]">
                    {related.map((it, idx) => (
                      <li key={it.id} className="py-1">
                        <div className="flex items-start gap-2">
                          <span className="text-[15px] text-black">{idx + 1}</span>
                          <Link
                            to={`/article/${it.paths}`}
                            className="leading-4 hover:text-[#2d5fcc]"
                          >
                            {it.title}
                          </Link>
                        </div>
                        <Divider />
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 text-center">
                    <Link to="/article" className="text-[14px] text-[#2d5fcc] hover:underline">
                      See all articles
                    </Link>
                  </div>
                </div>

                {/* Promo card with background image */}
                <div
                  className={[
                    "relative overflow-hidden rounded-lg border border-black/5",
                    "p-5 shadow-[0_12px_28px_rgba(69,119,228,0.10)] ring-2 ring-blue-500",
                  ].join(" ")}
                >
                  {/* background image */}
                  <img
                    src="/images/sidebarbg.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative text-center">
                    <p className="text-[16px] font-semibold leading-5 text-black">
                      Need a website, an app
                      <br />
                      Or some other
                      <br />
                      technological solution?
                    </p>
                    <p className="mt-3 text-[12px] text-black/60">We have the answers!</p>

                    <a
                      href="#"
                      className="mt-5 inline-block rounded-full bg-[#4577E4] px-5 py-2 text-[13px] font-medium text-white shadow-md ring-1 ring-black/5"
                    >
                      Click for a quote
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* RIGHT COLUMN: article content */}
          <main className="[font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif]">
            {(() => {
              // stepNo keeps ordered list numbers across blocks
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
                    <p key={i} className="mb-20 text-[16px] leading-6 ">
                      {b.text}
                    </p>
                  );
                }

                if (b.type === "ol") {
                  // figure start number (continue or reset)
                  const start = b.continue ? stepNo : 1;
                  const count = b.items?.length ?? 0;
                  stepNo = start + count;

                  return (
                    <ol
                      key={i}
                      start={start} // HTML start attribute keeps numbering
                      className="mb-6 list-decimal pl-6 text-[16px] leading-6 "
                    >
                      {b.items?.map((t, j) => (
                        <li
                          key={j}
                          className="mb-1 marker:text-blue-800 marker:font-semibold" // blue numbers
                        >
                          {t}
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (b.type === "img") {
                  // Images don’t affect the numbering
                  return <img key={i} src={b.src} alt={b.alt ?? ""} className="mb-10" />;
                }

                return null;
              });
            })()}
          </main>
        </div>
      </div>

      {/* more categories section */}
      <section className="mb-50">
        {/* hr and heading aligned to page container */}
        <div className="mx-auto w-full px-5 sm:px-6 lg:px-8">
          <hr className="mb-10 border-t border-black/10" />
          <h2 className="text-[16px] sm:text-[24px] font-bold mb-10 pl-65">More Categories</h2>
        </div>

        {/* article grid imported below */}
        <ArticleIconGrid />
      </section>
    </div>
  );
};

export default Article_Details;
