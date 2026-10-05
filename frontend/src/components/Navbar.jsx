// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="nav-container">

//         {/* <div className="logo">
//           <span className="logo-icon">👓</span>
//           <span>
//             <b>F</b>amms
//           </span>
//         </div> */}

//         <a href="/" className="logo">
//           <img src="/logofam.png" alt="Famms" />
//         </a>

//         <nav className="nav-links">
//           <a href="/" className="active">HOME</a>
//           <a href="#pages">PAGES <span>⌄</span></a>
//           <a href="#products">PRODUCTS</a>
//           <a href="#blog">BLOG</a>
//           <a href="#contact">CONTACT</a>
//           <a href="#cart" className="icon">🛒</a>
//           <a href="#search" className="icon">⌕</a>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;
// import "./Navbar.css";
// import { Link } from "react-router-dom";


// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="nav-container">

//         {/* Logo */}
//         <a href="/" className="logo">
//           <img src="/logofam.png" alt="Famms" />
//         </a>

//         {/* Menu */}
//         <nav className="nav-links">

//           {/* <a href="/" className="active">
//             HOME
//           </a> */}
//           <Link to="/home" className="active">
//   HOME
// </Link>

//           {/* Pages Dropdown */}
//           <div className="pages-dropdown">
//             <a href="#" className="pages-link">
//               PAGES <span>⌄</span>
//             </a>

//             <div className="dropdown-menu">
//               <a href="/about">About</a>
//               <a href="/testimonial">Testimonial</a>
//             </div>
//           </div>

//           <a href="/products">
//             PRODUCTS
//           </a>

//           <a href="/blog">
//             BLOG
//           </a>

//           <a href="/contact">
//             CONTACT
//           </a>

//           {/* <a href="#cart" className="icon">
//             🛒
//           </a> */}
//           {/* <div className="nav-icons">
//   <Link to="/checkout" className="cart-icon">
//     🛒
//   </Link>
// </div> */}
// <Link to="/cart" className="cart-link">
//   <i className="fa fa-shopping-cart"></i>
//   🛒
// </Link>

//           <a href="#search" className="icon">
//             🔍
//           </a>

//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/home" className="logo">
          <img src="/logofam.png" alt="Famms" />
        </Link>

        {/* Menu */}
        <nav className="nav-links">

          <Link to="/home" className="active">
            HOME
          </Link>

          {/* Pages Dropdown */}
          <div className="pages-dropdown">
            <a href="#" className="pages-link">
              PAGES <span>⌄</span>
            </a>

            <div className="dropdown-menu">
              <Link to="/about">About</Link>
              <Link to="/testimonial">Testimonial</Link>
            </div>
          </div>

          <Link to="/products">
            PRODUCTS
          </Link>

          {/* My Orders - User Only */}
          {!isAdmin && (
            <Link to="/my-orders">
              MY ORDERS
            </Link>
          )}

          <Link to="/blog">
            BLOG
          </Link>

          <Link to="/contact">
            CONTACT
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <i className="fa fa-shopping-cart"></i>
            🛒
          </Link>

          {/* Search */}
          <a href="#search" className="icon">
            🔍
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;