import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* Company */}
        <div className="footer-company">

          <img
            src="/logofam.png"
            alt="Famms"
            className="footer-logo"
          />

          <p>
            <strong>ADDRESS:</strong> 28 White tower, Street Name New
            <br />
            York City, USA
          </p>

          <p>
            <strong>TELEPHONE:</strong> +91 987 654 3210
          </p>

          <p>
            <strong>EMAIL:</strong> yourmain@gmail.com
          </p>

        </div>


        {/* Menu */}
        <div className="footer-column">

          <h3>MENU</h3>

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Testimonial</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>

        </div>


        {/* Account */}
        <div className="footer-column">

          <h3>ACCOUNT</h3>

          <a href="/">Account</a>
          <a href="/">Checkout</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
          <a href="/">Shopping</a>
          <a href="/">Widget</a>

        </div>


        {/* Newsletter */}
        <div className="footer-newsletter">

          <h3>NEWSLETTER</h3>

          <p>
            Subscribe by our newsletter and get
            <br />
            update providing.
          </p>

          <div className="footer-subscribe">

            <input
              type="email"
              placeholder="Enter Your Mail"
            />

            <button>Subscribe</button>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2021 All Rights Reserved By{" "}
          <span>Free Html Templates</span>
        </p>

        <p>
          Distributed By{" "}
          <span>ThemeWagon</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;