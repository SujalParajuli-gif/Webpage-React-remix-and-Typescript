import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Article from "~/components/Article";

export function meta() {
  return [
    { title: "Database | Matat Application" },
    { name: "description", content: "Database page for Matat Application" },
  ];
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 px-6">
        <Article />
      </main>
      <Footer />
    </>
  );
}
