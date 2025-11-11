import React from "react";

// we render three main feature blocks similar to the original Vibez layout
const VibezLayout_3: React.FC = () => {
  // added array so it’s easy to edit images or texts later
  const features = [
    {
      img: "/images/Vibez/image/mainft-col-1.png",
      title: "Purchase a gift card to use on the website or store",
    },
    {
      img: "/images/Vibez/image/mainft-col-2.png",
      title:
        "Log in to the website using a mobile code, email, or Google account",
    },
    {
      img: "/images/Vibez/image/mainft-col-3.png",
      title: "A variety of advanced payment methods in the market",
    },
  ];

  // wrap return so we can control layout and animation separately
  return (
    <section className="w-full bg-white py-10 md:py-5">
      {/* container that keeps items centered and responsive */}
      <div className="max-w-8xl mx-auto  md:px-80">
        {/* row of three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3  main-feat-wrapper">
          {features.map((item, i) => (
            <div
              key={i}
              // we add AOS fade-right like
              data-aos="fade-right"
              data-aos-delay="100"
              className="mainft-col flex flex-col items-center aos-init aos-animate"
            >
              {/* inner wrapper for image + title */}
              <div className="mainft-col-wrap flex flex-col items-center text-center">
                {/* image wrapper */}
                <div className="mainft-img mb-6">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[300px] md:w-[410px] h-auto object-contain"
                  />
                </div>
              </div>
              {/* feature title */}
              <div
                className=" 
              absolute text-center px-10 py-7"
              >
                <h2 className=" leading-tight text-white text-xl md:text-[29px] font-extrabold">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibezLayout_3;
