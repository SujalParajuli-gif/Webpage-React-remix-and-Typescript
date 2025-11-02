// app/routes/privacy-policy.tsx
import React from "react";

// page layout pieces
import Header_ArticleDetails from "../components/Header_ArticleDetails";
import Footer from "../components/Footer";

// your reusable component (file below)
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
