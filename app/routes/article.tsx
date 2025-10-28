// importing the Article and ContactUs components
import Article from "../components/Article";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

// routing for different components inside the Database page
export default function ArticleRoute() {
  return (
    <>
      <Article />
      <ContactUs />
      <Footer />
    </>
  );
}
