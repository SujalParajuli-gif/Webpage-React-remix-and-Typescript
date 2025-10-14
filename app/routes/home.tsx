import type { Route } from "./+types/home";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Matat Application" },
    { name: "description", content: "Welcome to Our Matat Nepali Website" },
  ];
}

export default function Home() {
 return (
    <>
      <Header />
      <HeroSection />
      
    </>
  );
}
