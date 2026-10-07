// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";


// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//        <Products />
//        <Subscribe />
//        <Testimonial />
//        <Footer />
//     </>
//   );
// }

// export default Home;
// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";
// import Signup from "./Signup";

// // import "./Home.css";

// function Home() {
//   const [showSignup, setShowSignup] = useState(true);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//       <Products />
//       <Subscribe />
//       <Testimonial />
//       <Footer />

//       {showSignup && (
//         <div className="signup-overlay">
//           <div className="signup-popup">

//             <button
//               className="close-btn"
//               onClick={() => setShowSignup(false)}
//             >
//               ✕
//             </button>

//             <Signup />

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";
// import Signup from "./Signup";

// import "./Home.css";

// function Home() {
//   const [showSignup, setShowSignup] = useState(true);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//       <Products />
//       <Subscribe />
//       <Testimonial />
//       <Footer />

//       {showSignup && (
//         <div className="signup-overlay">
//           <div className="signup-popup">

//             <button
//               className="close-btn"
//               onClick={() => setShowSignup(false)}
//             >
//               ✕
//             </button>

//             <Signup />

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";
// import Signup from "./Signup";

// import "./Home.css";

// function Home() {
//   const [showSignup, setShowSignup] = useState(true);

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//       <Products />
//       <Subscribe />
//       <Testimonial />
//       <Footer />

//       {showSignup && (
//         <div className="signup-overlay">
//           <div className="signup-popup">

//             <button
//               className="close-btn"
//               onClick={() => setShowSignup(false)}
//             >
//               ✕
//             </button>

//             <Signup />

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";

// import Signup from "./Signup";
// import Login from "./Login";

// import "./Home.css";

// function Home() {
//   const [showSignup, setShowSignup] = useState(true);
//   const [showLogin, setShowLogin] = useState(false);

//   const openLogin = () => {
//     setShowSignup(false);
//     setShowLogin(true);
//   };

//   const openSignup = () => {
//     setShowLogin(false);
//     setShowSignup(true);
//   };

//   const closePopup = () => {
//     setShowSignup(false);
//     setShowLogin(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//       <Products />
//       <Subscribe />
//       <Testimonial />
//       <Footer />

//       {/* SIGNUP POPUP */}
//       {showSignup && (
//         <div className="signup-overlay">
//           <div className="signup-popup">

//             <button
//               className="close-btn"
//               onClick={closePopup}
//             >
//               ✕
//             </button>

//             <Signup onLoginClick={openLogin} />

//           </div>
//         </div>
//       )}

//       {/* LOGIN POPUP */}
//       {showLogin && (
//         <div className="signup-overlay">
//           <div className="signup-popup">


//             <button
//               className="close-btn"
//               onClick={closePopup}
//             >
//               ✕
//             </button>

//             <Login onSignupClick={openSignup} />

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import WhyShop from "../components/WhyShop";
// import NewArrivals from "../components/NewArrivals";
// import Products from "../components/Products";
// import Subscribe from "../components/Subscribe";
// import Testimonial from "../components/Testimonial";
// import Footer from "../components/Footer";

// import Signup from "./Signup";
// import Login from "./Login";

// import "./Home.css";

// function Home() {
//   const [popup, setPopup] = useState("signup");

//   const closePopup = () => {
//     setPopup(null);
//   };

//   const showLogin = () => {
//     setPopup("login");
//   };

//   const showSignup = () => {
//     setPopup("signup");
//   };

//   return (
//     <>
//       {/* HOME PAGE */}
//       <Navbar />
//       <Hero />
//       <WhyShop />
//       <NewArrivals />
//       <Products />
//       <Subscribe />
//       <Testimonial />
//       <Footer />

//       {/* POPUP */}
//       {popup && (
//         <div className="signup-overlay">
//           <div className="signup-popup">

//             {/* CLOSE BUTTON */}
//             <button
//               className="close-btn"
//               onClick={closePopup}
//             >
//               ✕
//             </button>

//             {/* SIGNUP */}
//             {popup === "signup" && (
//               <Signup onLoginClick={showLogin} />
//             )}

//             {/* LOGIN */}
//             {popup === "login" && (
//               <Login onSignupClick={showSignup} />
//             )}

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyShop from "../components/WhyShop";
import NewArrivals from "../components/NewArrivals";
import Products from "../components/Products";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import Signup from "./Signup";
import Login from "./Login";

import "./Home.css";

function Home() {
  const [popup, setPopup] = useState("signup");

  const closePopup = () => {
    setPopup(null);
  };

  const showLogin = () => {
    setPopup("login");
  };

  const showSignup = () => {
    setPopup("signup");
  };

  return (
    <>
      {/* HOME PAGE */}
      <Navbar />
      <Hero />
      <WhyShop />
      <NewArrivals />

      {/* PRODUCTS */}
      <Products onOpenAuth={showSignup} />

      <Subscribe />
      <Testimonial />
      <Footer />

      {/* AUTH POPUP */}
      {popup && (
        <div className="signup-overlay">
          <div className="signup-popup">

            {/* CLOSE */}
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

export default Home;