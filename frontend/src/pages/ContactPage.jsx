import Navbar from "../components/Navbar";
import NewArrivals from "../components/NewArrivals";
import AboutFooter from "../components/AboutFooter";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />

      {/* CONTACT HEADING */}
      <section className="contact-page-title">
        <h1>Contact us</h1>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Full Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email Address"
          />

          <input
            type="text"
            placeholder="Enter Subject"
          />

          <textarea
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </section>

      {/* NEW ARRIVALS */}
      <NewArrivals />

      {/* FOOTER */}
      <AboutFooter />

    </>
  );
}

export default ContactPage;