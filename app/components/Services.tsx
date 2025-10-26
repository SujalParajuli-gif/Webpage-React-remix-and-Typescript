// app/components/Services.tsx
export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          <img src="/shapes/bg-service.svg" className="absolute left-410 bottom-50"></img>
          {/* Why us? */}
          <div className="flex items-start justify-between gap-15">
            <div className="max-w-xl">
              <h3 className="mb-3 text-xl">Why us?</h3>
              <p className="text-xs leading-6 text-slate-500">
                The graphics, interfaces, clearing, data tracking, all the parameters that are important
                to you in order to operate a successful and well-known website, are no less important to
                us. Dozens of our customers will testify that we are meticulous about every layer of the
                site and refine it according to the needs and the most up-to-date developments.
              </p>
            </div>
            <img src="/images/web-design.svg" alt="" className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28" />
          </div>

          {/* Step One */}
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="mb-3 text-xl">
                Step One: Characterization of the Site
              </h3>
              <p className="text-xs leading-6 text-slate-500">
                We understand that your website must first and foremost provide a solution to your needs
                and take into account your customers. A successful website takes into account its target
                audience. Therefore, in the first stage, we will discuss and create an in-depth
                characterization in favor of a website that will enable the fulfillment of goals in the
                most effective way.
              </p>
            </div>
            <img src="/images/ux-interface.svg" alt="" className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28" />
          </div>

          {/* personalization */}
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="mb-3 text-xl">personalization</h3>
              <p className="text-xs leading-6 text-slate-500">
                No two websites are the same. At Matat, we understand that each client has a target
                audience and different needs. Our development team is prepared and attentive to develop
                and implement every move that will lead to the creation of the best website for you.
                Unique design, precise interfaces and dedicated solutions that will put your website at
                the top of the search list.
              </p>
            </div>
            <img src="/images/coding.svg" alt="" className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28" />
          </div>

          {/* Without scattering */}
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="mb-3 text-xl">Without scattering</h3>
              <p className="text-xs leading-6 text-slate-500">
                Matat offers you all the services you need to operate your website under one roof.
                Hosting service on fast and secure servers, regular upgrade and update of plugins, system
                updates under strict control, and of course ongoing maintenance to keep your website with
                optimal visibility and efficiency.
              </p>
            </div>
            <img src="/images/website.svg" alt="" className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28" />
          </div>
        </div>
      </div>
    </section>
  );
}
