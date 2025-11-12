import React from "react";
import { Link } from "react-router"; // breadcrumb Home link
import ArticleIconGrid from "../components/ArticleIconGrid";

// simple blue bullet list (with extra spacing + taller line-height)
// we pass an array of React nodes and render them as <li> under a styled <ul>
const BlueList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-6 space-y-3 marker:text-[#2d5fcc] leading-7">
    {items.map((it, i) => (
      <li key={i}>{it}</li> // each row in the list
    ))}
  </ul>
);

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* local styles scoped to this component only
         we keep typography consistent for h2, p, lists in the policy area */}
      <style>{`
        .pp-scope h2 { font-size: 15.5px; font-weight: 700; margin-top: 1.35rem; margin-bottom: .35rem; }
        .pp-scope p  { font-size: 14px; margin-bottom: 22px; line-height: 1.8; }
        .pp-scope .num { color: #2d5fcc; }
        .pp-scope ul, .pp-scope ol { font-size: 14px; line-height: 1.8; }
      `}</style>

      {/* top banner + breadcrumb
         container gives max width + side paddings
         banner has light blue bg + subtle shadow + ring */}
      <div className="mx-auto max-w-360 px-5 sm:px-6 lg:px-8 pt-32 pb-6">
        <div className="bg-[#EAF3FF] px-15 py-15 shadow-[0_20px_40px_rgba(69,119,228,0.20)] ring-1 ring-black/5">
          {/* breadcrumb: Home / Privacy Policy */}
          <div className="mb-3 text-[13px] text-black/60">
            <Link to="/" className="hover:text-[#2d5fcc]">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="text-black">Privacy Policy</span>
          </div>

          {/* main page title */}
          <h1 className="pt-5 text-[43px] font-bold leading-tight text-[#0D1B2A]">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* two-column layout
         left = sticky promo card
         right = policy content (pp-scope applies local typography rules) */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-25 lg:grid-cols-[300px_1fr]">
          {/* left sticky promo
             lg:sticky keeps the card fixed while scrolling past it
             --stick-top sets where it sticks from top */}
          <aside className="relative">
            <div
              className="lg:sticky lg:top-[var(--stick-top)] h-max"
              style={{ ["--stick-top" as any]: "160px" }}
            >
              {/* promo card with bg image + CTA */}
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

          {/* right content
             pp-scope = local CSS above, sets sizes/line-heights for headings/paragraphs/lists */}
          <main className="pp-scope [font-family:'Heebo','Helvetica Neue',Helvetica,Arial,sans-serif] max-w-5xl ">
            {/* wrapper adds vertical spacing between sections */}
            <div className="space-y-6 sm:space-y-7">
              {/* page-level heading with site domain for clarity */}
              <h1 className="pt-5 text-[35px] font-bold leading-tight text-[#0D1B2A]">
                Privacy Policy - matat.co.il
              </h1>

              {/* 1: intro + scope of policy */}
              <section className="space-y-2">
                <h2>
                  <span className="num">1&nbsp;</span>Introduction and scope
                </h2>
                <p className="leading-7">
                  This Privacy Policy details what personal information we
                  collect when using <strong>matat.co.il</strong> (the “Site”),
                  how we use it, and how we protect it. By using the Site —
                  including browsing, submitting forms or communicating with us
                  — you agree to this Policy and future updates.
                </p>
              </section>

              {/* 2: what info we collect */}
              <section className="space-y-2">
                <h2>
                  <span className="num">2&nbsp;</span>Information Collected
                </h2>
                <p className="leading-7">
                  We may collect the following information:
                </p>
                <div className="space-y-3 leading-7">
                  <p>
                    <strong>Information provided voluntarily</strong>, such as
                    full name, email, phone number, position, or organization
                    (in the case of business inquiries).
                  </p>
                  <p>
                    <strong>Technical and anonymous information</strong>, such
                    as IP address, browser type, device models, and browsing
                    hours — for the purpose of analyzing logins and improving
                    the Service.
                  </p>
                </div>
              </section>

              {/* 3: how we use the info */}
              <section className="space-y-2">
                <h2>
                  <span className="num">3&nbsp;</span>Use of the Information
                </h2>
                <p className="leading-7">
                  Information is used for the following purposes:
                </p>
                <BlueList
                  items={[
                    <>
                      Responding to your inquiry — contacting, sending materials
                      and providing service.
                    </>,
                    <>
                      Improving the Site and adapting it to the needs of the
                      users.
                    </>,
                    <>
                      Sending updates and newsletters — only if you have
                      explicitly requested it.
                    </>,
                  ]}
                />
              </section>

              {/* 4: cookies usage + management */}
              <section className="space-y-2">
                <h2>
                  <span className="num">4&nbsp;</span>Use of Cookies
                </h2>
                <p className="leading-7">
                  The website uses cookies and similar technologies to:
                </p>
                <BlueList
                  items={[
                    <>Ensure the proper functioning of the website.</>,
                    <>
                      Collect statistics and analytics (e.g., using Google
                      Analytics) to improve the user experience.
                    </>,
                    <>
                      Adapt content and display relevant advertisements (if
                      targeted advertising tools are used).
                    </>,
                  ]}
                />
                <p className="font-semibold leading-7">Cookie management:</p>
                <p className="leading-7">
                  You can change your browser settings to block some or all
                  cookies, or to alert you when cookies are being sent. Please
                  note that blocking certain cookies may impair the
                  functionality of the website.
                </p>
              </section>

              {/* 5: third-party sharing rules */}
              <section className="space-y-2">
                <h2>
                  <span className="num">5&nbsp;</span>Sharing with Third Parties
                </h2>
                <p className="leading-7">
                  We do not share the information with third parties, except:
                </p>
                <BlueList
                  items={[
                    <>
                      <strong>Service providers</strong> that help us operate
                      the Site (such as hosting and infrastructure providers),
                      subject to their confidentiality obligations.
                    </>,
                    <>
                      <strong>When required by law</strong> (for example, for
                      the purpose of complying with a legal obligation).
                    </>,
                  ]}
                />
              </section>

              {/* 6: security measures */}
              <section className="space-y-2">
                <h2>
                  <span className="num">6&nbsp;</span>Information Security
                </h2>
                <p className="leading-7">
                  We take technical and organizational measures to maintain the
                  privacy of information — including encryption, secure servers,
                  and regular software updates.
                </p>
              </section>

              {/* 7: how long data is stored */}
              <section className="space-y-2">
                <h2>
                  <span className="num">7&nbsp;</span>Data Retention
                </h2>
                <p className="leading-7">
                  We retain personal information only for as long as there is a
                  real need (such as handling an inquiry or sending updates),
                  unless otherwise required by law.
                </p>
              </section>

              {/* 8: user rights */}
              <section className="space-y-2">
                <h2>
                  <span className="num">8&nbsp;</span>Your rights
                </h2>
                <p className="leading-7">
                  You have the right to request access, correction, or deletion
                  of information stored about you. You can contact us at any
                  time using our contact details below.
                </p>
              </section>

              {/* 9: policy updates */}
              <section className="space-y-2">
                <h2>
                  <span className="num">9&nbsp;</span>Updates to this Policy
                </h2>
                <p className="leading-7">
                  There may be changes to this Policy (for example, due to
                  technological or regulatory changes). Changes will be posted
                  here — please check the above date from time to time.
                </p>
              </section>

              {/* 10: contact info */}
              <section className="space-y-2">
                <h2>
                  <span className="num">10&nbsp;</span>Contact
                </h2>
                <div className="space-y-2 leading-7">
                  <p>
                    For any questions or requests related to privacy, you can
                    contact us at:
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:support@matat.co.il"
                      className="text-[#2d5fcc] underline"
                    >
                      support@matat.co.il
                    </a>
                  </p>
                  <p>Phone: 055-9919191</p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* more categories
         small section at bottom that shows the reusable ArticleIconGrid */}
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
