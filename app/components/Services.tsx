// app/components/Services.tsx
export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* grid layout with equal height rows */}
        <div className="grid md:grid-cols-2 gap-y-20 gap-x-16 items-start content-start">
          {/* Shape on the right side */}
          <img src="/shapes/bg-service.svg" className="absolute left-410 bottom-50" />

          {/* Why us? */}
          <div className="flex items-center justify-between gap-12 h-full min-h-[260px]">
            <div className="max-w-sm">
              <h3 className="mb-3 text-xl font-semibold">Why us?</h3>
              <p className="text-[13px] leading-6 text-[rgba(0,0,0,0.5)] font-medium">
                The graphics, interfaces, clearing, data tracking, all the parameters that are important
                to you in order to operate a successful and well-known website, are no less important to
                us. Dozens of our customers will testify that we are meticulous about every layer of the
                site and refine it according to the needs and the most up-to-date developments.
              </p>
            </div>
            <img
              src="/images/web-design.svg"
              alt=""
              className="h-28 w-28 shrink-0 object-contain"
            />
          </div>

          {/* Step One */}
          <div className="flex items-center justify-between gap-12 h-full min-h-[250px]">
            <div className="max-w-sm">
              <h3 className="mb-3 text-xl font-semibold w-100">
                Step One: Characterization of the Site
              </h3>
              <p className="text-[13px] leading-6 text-[rgba(0,0,0,0.5)] font-medium">
                We understand that your website must first and foremost provide a solution to your needs
                and take into account your customers. A successful website takes into account its target
                audience. Therefore, in the first stage, we will discuss and create an in-depth
                characterization in favor of a website that will enable the fulfillment of goals in the
                most effective way.
              </p>
            </div>
            <img
              src="/images/ux-interface.svg"
              alt=""
              className="h-28 w-28 shrink-0 object-contain"
            />
          </div>

          {/* personalization */}
          <div className="flex items-center justify-between gap-12 h-full min-h-[260px]">
            <div className="max-w-sm">
              <h3 className="mb-3 text-xl font-semibold">personalization</h3>
              <p className="text-[13px] leading-6 text-[rgba(0,0,0,0.5)] font-medium">
                No two websites are the same. At Matat, we understand that each client has a target
                audience and different needs. Our development team is prepared and attentive to develop
                and implement every move that will lead to the creation of the best website for you.
                Unique design, precise interfaces and dedicated solutions that will put your website at
                the top of the search list.
              </p>
            </div>
            <img
              src="/images/coding.svg"
              alt=""
              className="h-28 w-28 shrink-0 object-contain"
            />
          </div>

          {/* Without scattering */}
          <div className="flex items-center justify-between gap-12 h-full min-h-[260px]">
            <div className="max-w-sm">
              <h3 className="mb-3 text-xl font-semibold">Without scattering</h3>
              <p className="text-[13px] leading-6 text-[rgba(0,0,0,0.5)] font-medium">
                Matat offers you all the services you need to operate your website under one roof.
                Hosting service on fast and secure servers, regular upgrade and update of plugins, system
                updates under strict control, and of course ongoing maintenance to keep your website with
                optimal visibility and efficiency.
              </p>
            </div>
            <img
              src="/images/website.svg"
              alt=""
              className="h-28 w-28 shrink-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
