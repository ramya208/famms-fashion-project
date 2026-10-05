import Navbar from "../components/Navbar";
import WhyShop from "../components/WhyShop";
import NewArrivals from "../components/NewArrivals";
import AboutFooter from "../components/AboutFooter";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      {/* About Us */}
      <section className="about-title">
        <h1>About Us</h1>
      </section>

      {/* Why Shop */}
      <WhyShop />

      {/* New Arrivals */}
      <NewArrivals />

      {/* Different Footer */}
      <AboutFooter />
    </>
  );
}

export default About;