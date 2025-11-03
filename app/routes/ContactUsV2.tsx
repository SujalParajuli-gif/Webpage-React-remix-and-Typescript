// app/routes/privacy-policy.tsx
import React from "react";

//Other Components 
import Header_ArticleDetails from "../components/Header_ArticleDetails";
import Footer from "../components/Footer";

// Our reusable components
import ContactUs from "~/components/ContactUs";
import ContactUsV2 from "../components/ContactUsV2";

export default function PrivacyPolicyRoute() {
  return (
    <>
      <Header_ArticleDetails />
      <ContactUsV2 />
      <Footer />
    </>
  );
}
