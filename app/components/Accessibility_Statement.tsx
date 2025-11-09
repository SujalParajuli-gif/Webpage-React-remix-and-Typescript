import React from "react";
import { Link } from "react-router"; // breadcrumb Home link
import ArticleIconGrid from "../components/ArticleIconGrid";

// simple blue bullet list (adds spacing + taller line-height)
const BlueList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-6 space-y-3 marker:text-[#2d5fcc] leading-7">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

export default function Accessilibity_Statement() {
  return (
    <div className="bg-white">
      {/* scoped styles: nudged margins + line-height */}
      <style>{`
        .as-scope h2 { font-size: 15.5px; font-weight: 700; margin-top: 1.35rem; margin-bottom: .35rem; }
        .as-scope p  { font-size: 14px; margin-bottom: 22px; line-height: 1.8; }
        .as-scope .num { color: #2d5fcc; }
        .as-scope ul, .as-scope ol { font-size: 14px; line-height: 1.8; }
      `}</style>

      {/* top banner + breadcrumb */}
      <div className="mx-auto max-w-360 px-5 sm:px-6 lg:px-8 pt-32 pb-6">
        <div className="bg-[#EAF3FF] px-15 py-15 shadow-[0_20px_40px_rgba(69,119,228,0.20)] ring-1 ring-black/5">
          <div className="mb-3 text-[13px] text-black/60">
            <Link to="/" className="hover:text-[#2d5fcc]">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="text-black">Accessibility Statement</span>
          </div>
          <h1 className="pt-5 text-[43px] font-bold leading-tight text-[#0D1B2A]">
            Accessibility Statement
          </h1>
        </div>
      </div>

      {/* two-column layout */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-25 lg:grid-cols-[300px_1fr]">
          {/* left sticky promo (unchanged) */}
          <aside className="relative">
            <div
              className="lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "160px" }}
            >
              <div className="w-88 h-65 relative overflow-hidden rounded-lg border border-black/5 p-8 shadow-[0_12px_28px_rgba(69,119,228,0.10)] ring-2 ring-blue-500 mt-20">
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
          </aside>

          {/* right content */}
          <main className="as-scope [font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif] max-w-5xl">
            {/* wrapper adds vertical spacing between blocks */}
            <div className="space-y-6 sm:space-y-8">
              {/* 1 */}
              <section className="space-y-2">
                <h2>
                  <span className="num">1&nbsp;</span>Introduction
                </h2>
                <p className="leading-7">
                  We invest a lot of resources to make this site accessible in
                  order to enable the browsing experience for the general
                  population and people with disabilities in particular. The
                  motto that guides us is human dignity and freedom, as this is
                  a cornerstone of Israeli society because we are all equal in
                  our essence rights.
                </p>
              </section>

              {/* 2 */}
              <section className="space-y-2">
                <h2>
                  <span className="num">2&nbsp;</span>Use of the accessibility
                  component
                </h2>
                <p className="leading-7">
                  This website includes an accessibility plugin that helps make
                  the site accessible to people with disabilities.
                </p>
              </section>

              {/* 3 */}
              <section className="space-y-3">
                <h2>
                  <span className="num">3&nbsp;</span>Menu User Manual
                </h2>
                <BlueList
                  items={[
                    <>
                      Site Customization Button and Site Tags for Assistive
                      Devices and Technologies for People with Disabilities
                    </>,
                    <>
                      Enable navigation with the keyboard keys between the links
                      on the website
                    </>,
                    <>
                      Switch off flashes and/or moving elements on the screen
                    </>,
                    <>Enable black and white monochrome mode for color blind</>,
                    <>Spia button (brown)</>,
                    <>High contrast change button</>,
                    <>Black Yellow Button</>,
                    <>Color reversal button</>,
                    <>
                      A button that clearly highlights all the title tags that
                      appear on the website
                    </>,
                    <>
                      A button that clearly emphasizes all the links that appear
                      on the website
                    </>,
                    <>
                      A button that displays the alternate description of all
                      the images that appear on the site with a mouse hover
                    </>,
                    <>
                      A button that displays a permanent description of the
                      images on the website
                    </>,
                    <>De-use Readable Font Button</>,
                    <>Button to increase the size of fonts on the website</>,
                    <>Button to reduce the size of the fonts on the website</>,
                    <>Zoom in to about 200%</>,
                    <>Zoom out all display to about 70%</>,
                    <>Mouse cursor increase button</>,
                    <>
                      Mouse cursor enlarge button and change its color to black
                    </>,
                    <>Site Reading Status Button</>,
                    <>Button that displays the accessibility statement</>,
                    <>Reset button that disables accessibility</>,
                    <>Send Accessibility Feedback Button</>,
                    <>
                      Button to change the language of the bar and the
                      accessibility statement accordingly
                    </>,
                  ]}
                />
              </section>

              {/* 4 */}
              <section className="space-y-3">
                <h2>
                  <span className="num">4&nbsp;</span>Keyboard functions and
                  magnification
                </h2>
                <p className="leading-7">
                  There are 2 types of magnification in the accessibility bar
                  for your convenience, but if you want to enlarge the letters
                  further, you can use the following keyboard functions:
                </p>
                <BlueList
                  items={[
                    <>The Esc key will open and close the accessibility bar</>,
                    <>The Ctrl + key will enlarge the text on the site</>,
                    <>Ctrl key – will reduce the text on the site</>,
                    <>
                      Pressing Ctrl 0 will restore the site to its original size
                    </>,
                    <>A spacebar will bring the site down.</>,
                    <>
                      The F11 key will increase the screen to full size –
                      another press will make it smaller again.
                    </>,
                  ]}
                />
              </section>

              {/* 5 */}
              <section className="space-y-2">
                <h2>
                  <span className="num">5&nbsp;</span>For the avoidance of doubt
                </h2>
                <p className="leading-7">
                  We are committed to making our websites accessible to all
                  people, people with abilities and disabilities. On this
                  website, you can find the right technology for your needs.
                  This site is usable for the majority of the population and
                  with maximum effort. You may find elements that are not
                  accessible because they have not yet been made accessible or a
                  suitable technology has not been found, and at the same time,
                  we ensure that most efforts are made to improve and make them
                  accessible at a high level and without compromise. If you
                  encounter any difficulty browsing the site and viewing our
                  content, we apologize and we will be very happy for you to
                  draw our attention to this.
                </p>
              </section>

              {/* 6 */}
              <section className="space-y-2">
                <h2>
                  <span className="num">6&nbsp;</span>For any questions about
                  accessibility
                </h2>
                <p className="leading-7">
                  Accessibility Officer: Amit Matat
                  <br />
                  Phone: 055-9919191
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* more categories */}
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
}
