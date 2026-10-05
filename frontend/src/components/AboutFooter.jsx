// import "./AboutFooter.css";

// function AboutFooter() {
//   return (
//     <footer className="about-footer">

//       <div className="about-footer-content">

//         <div>
//           <h3>FAMMS</h3>

//           <p>
//             Fashion for everyone.
//             <br />
//             Quality products at the best price.
//           </p>
//         </div>

//         <div>
//           <h3>QUICK LINKS</h3>

//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/testimonial">Testimonial</a>
//           <a href="/">Products</a>
//         </div>

//         <div>
//           <h3>CONTACT</h3>

//           <p>📍 New York, USA</p>
//           <p>📞 +91 987 654 3210</p>
//           <p>✉ yourmain@gmail.com</p>
//         </div>

//       </div>

//       <div className="about-footer-bottom">
//         © 2026 FAMMS. All Rights Reserved.
//       </div>

//     </footer>
//   );
// }

// export default AboutFooter;
import "./AboutFooter.css";

function AboutFooter() {
  return (
    <footer className="about-footer">

      <div className="about-footer-container">

        {/* LEFT SIDE */}
        <div className="footer-contact">
          <h3>Reach at..</h3>

          <p>
            <span className="footer-icon">📍</span>
            Location
          </p>

          <p>
            <span className="footer-icon">📞</span>
            Call +01 1234567890
          </p>

          <p>
            <span className="footer-icon">✉</span>
            demo@gmail.com
          </p>
        </div>


        {/* RIGHT SIDE */}
        <div className="footer-about">

          <h3>Famms</h3>

          <p>
            Necessary, making this the first true
            <br />
            generator on the Internet. It uses a
            <br />
            dictionary of over 200 Latin words,
            <br />
            combined with
          </p>


          {/* SOCIAL ICONS */}
          <div className="social-icons">

            <a href="#" className="social-icon">
              f
            </a>

            <a href="#" className="social-icon">
              𝕏
            </a>

            <a href="#" className="social-icon">
              in
            </a>

            <a href="#" className="social-icon">
              ◎
            </a>

            <a href="#" className="social-icon">
              p
            </a>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-line"></div>

        <p>
          © 2026 All Rights Reserved By{" "}
          <a href="https://html.design/" target="_blank">
            Free Html Templates
          </a>
        </p>

        <p>
          Distributed By{" "}
          <a href="https://themewagon.com/" target="_blank">
            ThemeWagon
          </a>
        </p>

      </div>

    </footer>
  );
}

export default AboutFooter;