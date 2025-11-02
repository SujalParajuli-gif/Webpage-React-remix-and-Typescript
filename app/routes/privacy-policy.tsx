// app/routes/privacy-policy.tsx
import React from "react";

//Other Components 
import Header_ArticleDetails from "../components/Header_ArticleDetails";
import Footer from "../components/Footer";

// Our reusable components
import PrivacyPolicy from "../components/privacy-policy";
import ContactUs from "~/components/ContactUs";

export default function PrivacyPolicyRoute() {
  return (
    <>
      <Header_ArticleDetails />
      <PrivacyPolicy />
      <ContactUs/>
      <Footer />
    </>
  );
}
