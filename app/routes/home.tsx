// importing route types for meta function (Remix stuff)
import type { Route } from "./+types/home";

// importing your UI components (sections)
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OurProduct from "../components/OurProjects"; // uses VideoCard + PhotoCard internally
import Services from "../components/Services";
import Sidebar from "../components/Slidebar";
import OurCustomer from "../components/OurCustomer";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

// page meta tags (title + description shown in browser/tab)
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Matat Application" },
    { name: "description", content: "Welcome to Our Matat Nepali Website" },
  ];
}

// main page (home)
export default function Home() {
  return (
    <>
      {/* top navigation/header */}
      <Header />

      {/* main content wrapper */}
      <main className="min-h-screen bg-white">
        {/* hero banner area */}
        <HeroSection />

        {/* portfolio section (videos + photos) */}
        <OurProduct />

        {/* services area */}
        <Services />

        {/* sliding logo/testimonial bar */}
        <Sidebar />

        {/* customer testimonials */}
        <OurCustomer />

        {/* contact section */}
        <ContactUs />
      </main>

      {/* footer at bottom */}
      <Footer />
    </>
  );
}
