// importing route types for meta function (remix stuff)
import type { Route } from "./+types/home";

// importing my components (these are your UI sections)
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OurProduct from "../components/OurProduct"; // this uses VideoCard + PhotoCard component inside
import Services from "../components/Services";
import Sidebar from"../components/Slidebar";
import OurCustomer from "../components/OurCustomer";
import ContactUs from "../components/ContactUs"
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

        {/* portfolio section (mix of videos + photos from portfolio.json) */}
        <OurProduct />
        <Services />
        <Sidebar />
        <OurCustomer/>
        <ContactUs />

        <Footer/>
      </main>

      {/* footer can be added later */}
    </>
  );
}
