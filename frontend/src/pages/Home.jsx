import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyShop from "../components/WhyShop";
import NewArrivals from "../components/NewArrivals";
import Products from "../components/Products";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyShop />
      <NewArrivals />
       <Products />
       <Subscribe />
       <Testimonial />
       <Footer />
    </>
  );
}

export default Home;