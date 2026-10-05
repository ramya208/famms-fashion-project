// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import TestimonialPage from "./pages/TestimonialPage";
// import ProductsPage from "./pages/ProductsPage";
// import BlogPage from "./pages/BlogPage";
// import ContactPage from "./pages/ContactPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />
//             <Route
//           path="/testimonial"
//           element={<TestimonialPage />}
//         />
//          <Route
//           path="/products"
//           element={<ProductsPage />}
//         />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Home from "./pages/Home";
import About from "./pages/About";
import TestimonialPage from "./pages/TestimonialPage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website open → Signup */}
        <Route
          path="/"
          element={<Navigate to="/signup" replace />}
        />
        {/* Website open → Home */}
<Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/testimonial"
          element={<TestimonialPage />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route path="/blog" element={<BlogPage />} />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route path="/cart" element={<CartPage />} />

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />
        <Route path="/add-product" element={<AddProduct />} />
        <Route
  path="/edit-product/:id"
  element={<EditProduct />}
/>
<Route path="/my-orders" element={<MyOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;