// import Navbar from "../components/Navbar";
// import Testimonial from "../components/Testimonial";
// import TestimonialFooter from "../components/TestimonialFooter";
// import "./TestimonialPage.css";

// function TestimonialPage() {
//   return (
//     <>
//       <Navbar />

//       {/* PAGE HEADING */}
//       <section className="testimonial-page-title">
//         <h1>Testimonial</h1>
//       </section>

//       {/* TESTIMONIAL SECTION */}
//       <Testimonial />

//       {/* NEW FOOTER */}
//       <TestimonialFooter />
//     </>
//   );
// }

// export default TestimonialPage;
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import AboutFooter from "../components/AboutFooter";
import "./TestimonialPage.css";

function TestimonialPage() {
  return (
    <>
      <Navbar />

      {/* PAGE HEADING */}
      <section className="testimonial-page-title">
        <h1>Testimonial</h1>
      </section>

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* SAME FOOTER */}
      <AboutFooter />
    </>
  );
}

export default TestimonialPage;