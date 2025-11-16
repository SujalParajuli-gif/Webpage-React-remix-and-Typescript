import React from "react";
import Header from "./Header"; // importing our existing header
import { FiSearch } from "react-icons/fi";
import ArticleIconGrid from "./ArticleIconGrid";
import ArticleGrid from "./ArticleGrid"; // added: grid that reads cards from JSON
import { useSearchParams } from "react-router"; // Added: read ?label from URL

const Article = () => {
  // Added: pull ?label=... so we can filter ArticleGrid
  // we read the active label from the query string and clean spaces
  const [params] = useSearchParams();
  const selectedLabel = params.get("label")?.trim() ?? ""; // read active label from URL

  // this is the big title on the banner
  // if a label is selected, we show that, else we show "Database"
  const displayTitle = selectedLabel || "Database"; // fallback when nothing active

  return (
    <>
      {/* We reused same header and the colors are handelded by map inside the header component it self*/}
      {/* header stays sticky as defined inside Header component */}
      <Header />

      {/* Main content section for Database / Article
          this whole block includes the blue banner, icon grid, and the cards grid */}
      <div className="bg-white py-10 md:py-14 w-8xl mr-25">
        {/* container to center banner content */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-25">
          {/* Blue background card behind everything
              holds the illustration on the left and the heading + search on the right */}
          <div
            className="
              relative overflow-visible
              bg-[#EAF3FF]
              px-6 py-10 md:px-12 w-340 h-105
              shadow-[0_20px_30px_rgba(69,119,228,0.20)]
             
            "
          >
            {/* leaf decoration behind the person
               purely decorative image positioned in the corner */}
            <img
              src="logos/page-header-decor.png"
              alt=""
              className="pointer-events-none select-none absolute -top-10 -left-0 w-25 z-0"
            />

            {/* layout: illustration left, text + search right
               grid splits into 12 cols on md+, so we can set spans easily */}
            <div className="relative grid items-center gap-8 md:gap-12 md:grid-cols-12">
              {/* person illustration
                 we keep a drop shadow so it pops above the blue card */}
              <div className="md:col-span-5">
                <img
                  src="/images/Database-page-banner.webp"
                  alt="Analytics illustration"
                  className="
                    w-95 h-105
                    relative z-20
                    -ml-4 md:-ml-10
                    -mb-6 md:-mb-10
                    drop-shadow-[0_18px_35px_rgba(0,0,0,0.18)]
                  "
                />
              </div>

              {/* heading + search
                 title reflects the selected label or the default 'Database' */}
              <div className="md:col-span-7 relative z-10">
                <h1
                  className="
              text-4xl md:text-[55px] font-extrabold text-black
              drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]
            "
                >
                  {displayTitle}
                </h1>

                {/* search field
                   just UI right now; no handler attached (placeholder behavior) */}
                <form role="search" className="mt-8 md:mt-10">
                  <div className="relative">
                    {/* search icon placed inside the input area */}
                    <FiSearch className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#4577E4]" />
                    <input
                      type="search"
                      placeholder="Type a search word"
                      className="
                        w-full rounded-full border-0 bg-white
                        py-4 md:py-3.5 pl-12 pr-6
                        shadow-[0_22px_45px_rgba(69,119,228,0.25)]
                        placeholder:text-gray-400
                        focus:outline-none focus:ring-0 
                      "
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* faint outer glow  
               empty element kept for future effects; sits behind using negative z */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl" />
          </div>
        </div>

        {/* ICON GRID (cards below the banner)
           this shows the category tiles; clicking a tile updates ?label */}
        <div className="mx-auto w-full max-w-7xl ml-90 px-4 sm:px-6 lg:px-8 mt-20">
          <ArticleIconGrid />
        </div>

        {/* article cards loaded from /data/articles.json 
           we pass the active label so the grid filters the list */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          {/* pass the selected label to filter the grid */}
          <ArticleGrid selectedLabel={selectedLabel} />
        </div>
      </div>
    </>
  );
};

export default Article;
