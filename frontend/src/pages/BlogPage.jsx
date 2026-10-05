import Navbar from "../components/Navbar";
import WhyShop from "../components/WhyShop";
import AboutFooter from "../components/AboutFooter";
import "./BlogPage.css";

function BlogPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADING */}
      <section className="blog-page-title">
        <h1>Blog List</h1>
      </section>

      {/* WHY SHOP */}
      <WhyShop />

      {/* FOOTER */}
      <AboutFooter />
    </>
  );
}

export default BlogPage;