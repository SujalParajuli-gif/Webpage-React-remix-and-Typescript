// article detail page: left = related, right = HTML content
import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import list from "../data/articles.json"; // used to build "related"
import detailMap from "../data/article_details.json"; // { title, html } per slug
import ArticleIconGrid from "../components/ArticleIconGrid";
import Html from "../components/Html";

// related-list item shape (same as in articles.json)
type ListItem = {
  id: string;
  title: string;
  summary: string;
  labels?: string[];
  paths: string; // slug like "install-anydesk"
};

// detail entry: single HTML field for the right side
type DetailEntry = {
  title: string;
  html: string;
};

// small divider between related items
const Divider: React.FC = () => (
  <div className="my-2 h-px w-full bg-black/10" />
);

// marker rules per article slug
// we return extra Tailwind selectors to style list markers differently
function getMarkerClasses(slug?: string): string[] {
  if (slug === "install-anydesk") {
    // numbering markers in blue for <ol>
    return [
      "[&_ol]:list-decimal",
      "[&_ol>li]:marker:text-[#2d5fcc]",
      "[&_ol>li]:marker:font-semibold",
    ];
  }
  if (slug === "sales-site-menu-best-practices") {
    // dot markers in blue for <ul>
    return [
      "[&_ul]:list-disc",
      "[&_ul>li]:marker:text-[#2d5fcc]",
      "[&_ul>li]:marker:font-semibold",
    ];
  }
  return [];
}

const Article_Details: React.FC = () => {
  // slug from /article/:paths
  const { paths } = useParams();
  const navigate = useNavigate();

  // lookup by slug inside detailMap (title + html)
  const entry: DetailEntry | undefined = paths
    ? (detailMap as Record<string, DetailEntry>)[paths]
    : undefined;

  // soft 404 page when there is no entry for this slug
  if (!entry) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-35">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p className="mt-2 text-[14px] text-black/60">
          This article has not been added to <code>article_details.json</code>{" "}
          yet.
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

  // related list for the left column:
  // - remove current article
  // - de-dup by id using Map
  // - limit to first N items
  const RELATED_LIMIT = 4;
  const related = Array.from(
    new Map(
      (list as ListItem[])
        .filter((it) => it.paths !== paths)
        .map((it) => [it.id, it])
    ).values()
  ).slice(0, RELATED_LIMIT);

  return (
    <div className="bg-white">
      {/* banner: breadcrumb + page title */}
      <div
        className={[
          "mx-auto max-w-360 px-5 sm:px-6 lg:px-8",
          "pt-32 mb-15",
        ].join(" ")}
      >
        <div
          className={[
            "bg-[#EAF3FF] px-15 py-15",
            "shadow-[0_20px_40px_rgba(69,119,228,0.20)] ring-1 ring-black/5",
          ].join(" ")}
        >
          {/* breadcrumb trail with back to Database */}
          <div className=" text-[14px] text-black/60">
            <Link to="/" className="hover:text-[#2d5fcc]">
              Home
            </Link>
            <span className="mx-1">/</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1); // go to previous page
              }}
              className="hover:text-black"
            >
              Database
            </a>
            <span className="mx-1">/</span>
            <span className="text-black">{entry.title}</span>
          </div>

          {/* page title from the entry */}
          <h1 className="pt-5 text-[47px] font-extrabold leading-relaxed text-[#0D1B2A]">
            {entry.title}
          </h1>
        </div>
      </div>

      {/* layout: left sticky rail + right article content */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-[300px_1fr]">
          {/* left column: related list + promo */}
          <div className="relative">
            <div
              className="lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "150px" }}
            >
              {/* related list card */}
              <aside className="space-y-10 max-h-120">
                <div
                  key={paths} // key helps React re-render when slug changes
                  className="max-h-120 rounded-lg border border-black/5 bg-white shadow-[0_12px_28px_rgba(69,119,228,0.10)] w-88 p-6 overflow-hidden"
                >
                  <h3 className="mb-4 text-center text-[15px] font-bold text-gray-400">
                    Related Articles
                  </h3>

                  {/* ordered list of related titles */}
                  <ul className="text-[18px]">
                    {related.map((it, idx) => (
                      <li key={it.id} className="py-3">
                        <div className="flex items-start gap-2 min-w-0">
                          <span className="text-[15px] text-black flex-shrink-0">
                            {idx + 1}
                          </span>
                          <Link
                            to={`/article/${it.paths}`}
                            className="leading-6 hover:text-[#2d5fcc] block max-w-full"
                            title={it.title}
                          >
                            {it.title}
                          </Link>
                        </div>
                        {idx < related.length - 1 && <Divider />}
                      </li>
                    ))}
                  </ul>

                  {/* link to full list page */}
                  <div className="pt-1 text-center">
                    <Link
                      to="/article"
                      className="text-[14px] text-[#2d5fcc] hover:underline"
                    >
                      See all articles
                    </Link>
                  </div>
                </div>
              </aside>

              {/* promo card under related */}
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

          {/* right column: HTML content with per-article marker styles */}
          <main className="[font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif]">
            {/* Html component injects sanitized HTML with our Tailwind scopes */}
            <Html
              html={entry.html}
              className={[
                // h2 styles
                "[&_h2]:mb-3",
                "[&_h2]:text-[32px]",
                "[&_h2]:font-light",
                "[&_h2]:text-[#0D1B2A]",

                // paragraph styles
                "[&_p]:mt-2",
                "[&_p]:mb-8",
                "[&_p]:text-[16px]",
                "[&_p]:leading-6",
                "text-black",

                // base list spacing/sizing
                "[&_ol]:mb-8",
                "[&_ol]:pl-6",
                "[&_ol]:text-[16px]",
                "[&_ol]:leading-6",
                "[&_ul]:mb-8",
                "[&_ul]:pl-6",
                "[&_ul]:text-[16px]",
                "[&_ul]:leading-6",

                // default list types
                "[&_ul]:list-disc",
                "[&_ol]:list-decimal",

                // default ul marker color (blue)
                "[&_ul>li]:marker:text-[#2d5fcc]",

                // image spacing (custom token)
                "[&_img]:mb-13",

                // per-article marker overrides (from helper)
                ...getMarkerClasses(paths),
              ].join(" ")}
            />
          </main>
        </div>
      </div>

      {/* footer section: links back to categories */}
      <section className="mb-50">
        <div className="mx-auto w-full px-5 sm:px-6 lg:px-8">
          <hr className="mb-10 border-t border-black/10" />
          <h2 className="text-[16px] sm:text-[24px] font-bold mb-10 pl-65">
            More Categories
          </h2>
        </div>
        <ArticleIconGrid />
      </section>
    </div>
  );
};

export default Article_Details;
