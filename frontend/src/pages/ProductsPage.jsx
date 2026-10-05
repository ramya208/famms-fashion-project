import Navbar from "../components/Navbar";
import Products from "../components/Products";
import AboutFooter from "../components/AboutFooter";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADING */}
      <section className="products-page-title">
        <h1>Product Grid</h1>
      </section>

      {/* PRODUCTS */}
      <Products />

      {/* FOOTER */}
      <AboutFooter />
    </>
  );
}

export default ProductsPage;














