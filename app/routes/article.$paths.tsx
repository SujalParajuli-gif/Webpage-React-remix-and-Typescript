import React from "react";
import Article_Details from "../components/Article_Details";
import Header_ArticleDetails from "../components/Header_ArticleDetails";
import ContactUs from "~/components/ContactUs";
import Footer from "~/components/Footer";

export default function ArticleDetailsRoute() {
   return (
    <>
    <Header_ArticleDetails />
      <Article_Details />
      <ContactUs />
      
      <Footer/>
      
    </>
  );
}

