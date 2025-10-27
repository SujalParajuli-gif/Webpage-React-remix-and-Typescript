import React from "react";
import Header from "./Header"; //importing our existing header

const Article = () => {
  return (
    <>
      {/* Reuse same header but use variant for color difference */}
      <Header variant="article" />

      {/* Main content section for Database / Article */}
      <div className="h-500 bg-white py-20 px-10 mt-10">
        <h1 className="text-3xl font-semibold text-center text-[#4577E4] mb-6">
          Database Section
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Hello my name is sujal
        </p>
      </div>
    </>
  );
};

export default Article;
