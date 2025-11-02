// app/routes/accessibility-statement.tsx
import React from "react";

// page layout pieces
import Header_ArticleDetails from "../components/Header_ArticleDetails";
import Footer from "../components/Footer";

// component for this page
import Accessilibity_Statement from "../components/Accessibility_Statement";
import ContactUs from "~/components/ContactUs";

export default function AccessibilityStatementRoute() {
  return (
    <>
      <Header_ArticleDetails />
      <Accessilibity_Statement />
      <ContactUs />
      <Footer />
    </>
  );
}
