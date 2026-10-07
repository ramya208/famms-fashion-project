// import Navbar from "../components/Navbar";
// import Products from "../components/Products";
// import AboutFooter from "../components/AboutFooter";
// import "./ProductsPage.css";

// function ProductsPage() {
//   return (
//     <>
//       <Navbar />

//       {/* PAGE HEADING */}
//       <section className="products-page-title">
//         <h1>Product Grid</h1>
//       </section>

//       {/* PRODUCTS */}
//       <Products />

//       {/* FOOTER */}
//       <AboutFooter />
//     </>
//   );
// }

// export default ProductsPage;
import { useState } from "react";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import AboutFooter from "../components/AboutFooter";

import Signup from "./Signup";
import Login from "./Login";

import "./ProductsPage.css";

function ProductsPage() {
  const [popup, setPopup] = useState(null);

  const closePopup = () => {
    setPopup(null);
  };

  const showSignup = () => {
    setPopup("signup");
  };

  const showLogin = () => {
    setPopup("login");
  };

  return (
    <>
      <Navbar />

      {/* PAGE HEADING */}
      <section className="products-page-title">
        <h1>Product Grid</h1>
      </section>

      {/* PRODUCTS */}
      <Products onOpenAuth={showSignup} />

      {/* FOOTER */}
      <AboutFooter />

      {/* AUTH POPUP */}
      {popup && (
        <div className="signup-overlay">
          <div className="signup-popup">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="close-btn"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* SIGNUP */}
            {popup === "signup" && (
              <Signup onLoginClick={showLogin} />
            )}

            {/* LOGIN */}
            {popup === "login" && (
              <Login onSignupClick={showSignup} />
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default ProductsPage;














