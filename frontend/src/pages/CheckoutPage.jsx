// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./CheckoutPage.css";

// function CheckoutPage() {
//   const [cartItems, setCartItems] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   useEffect(() => {
//     const savedCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     setCartItems(savedCart);
//   }, []);

//   const getPrice = (price) => {
//     return Number(price.replace("$", ""));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) =>
//       total + getPrice(item.price) * item.quantity,
//     0
//   );

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     alert("Order placed successfully!");

// //     console.log("Customer Details:", formData);
// //     console.log("Order Items:", cartItems);
// //   };
// //       const handleSubmit = (e) => {
// //   e.preventDefault();

// //   alert("Order placed successfully!");

// //   // Clear cart
// //   localStorage.removeItem("cartItems");

// //   // Clear cart state
// //   setCartItems([]);
// // }; 
//      const handleSubmit = (e) => {
//   e.preventDefault();

//   // Check all fields
//   if (
//     !formData.name ||
//     !formData.email ||
//     !formData.phone ||
//     !formData.address ||
//     !formData.city ||
//     !formData.pincode
//   ) {
//     alert("Please fill all details.");
//     return;
//   }

//   // Order success
//   alert("Order placed successfully!");

//   // Delete cart only after successful order
//   localStorage.removeItem("cartItems");

//   // Clear cart
//   setCartItems([]);
//   setFormData({
//   name: "",
//   email: "",
//   phone: "",
//   address: "",
//   city: "",
//   pincode: "",
// });
// };

//   return (
//     <>
//       <Navbar />

//       {/* Page Title */}
//       <section className="checkout-page-title">
//         <h1>Checkout</h1>
//       </section>

//       {/* Checkout Section */}
//       <section className="checkout-section">
//         <div className="checkout-container">

//           {/* Customer Details */}
//           <div className="customer-details">

//             <h2>Billing Details</h2>

//             <form onSubmit={handleSubmit}>

//               <div className="form-group">
//                 <label>Full Name</label>

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>


//               <div className="form-group">
//                 <label>Email Address</label>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>


//               <div className="form-group">
//                 <label>Phone Number</label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>


//               <div className="form-group">
//                 <label>Address</label>

//                 <textarea
//                   name="address"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>


//               <div className="checkout-row">

//                 <div className="form-group">
//                   <label>City</label>

//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="Enter city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>


//                 <div className="form-group">
//                   <label>Pincode</label>

//                   <input
//                     type="text"
//                     name="pincode"
//                     placeholder="Enter pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//               </div>

//             </form>

//           </div>


//           {/* Order Summary */}
//           <div className="checkout-summary">

//             <h2>Your Order</h2>

//             <div className="checkout-products">

//               {cartItems.map((item) => (

//                 <div
//                   className="checkout-product"
//                   key={item.id}
//                 >

//                   <div className="checkout-product-info">

//                     <img
//                       src={item.image}
//                       alt={item.name}
//                     />

//                     <div>
//                       <h3>{item.name}</h3>

//                       <p>
//                         Quantity: {item.quantity}
//                       </p>
//                     </div>

//                   </div>

//                   <span>
//                     $
//                     {(
//                       getPrice(item.price) *
//                       item.quantity
//                     ).toFixed(2)}
//                   </span>

//                 </div>

//               ))}

//             </div>


//             <div className="checkout-summary-line"></div>


//             <div className="checkout-summary-row">
//               <span>Subtotal</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>


//             <div className="checkout-summary-row">
//               <span>Shipping</span>

//               <span>Free</span>
//             </div>


//             <div className="checkout-total">
//               <span>Total</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>
//             <div className="payment-method">
//   <h2>Payment Method</h2>

//   <label className="cod-option">
//     <input
//       type="radio"
//       name="payment"
//       value="COD"
//       defaultChecked
//     />
//     <span>Cash on Delivery</span>
//   </label>

//   <p>Pay with cash when your order is delivered.</p>
// </div>


//             <button
//               className="place-order-btn"
//               onClick={handleSubmit}
//             >
//               Place Order
//             </button>

//           </div>

//         </div>
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default CheckoutPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./CheckoutPage.css";

// function CheckoutPage() {
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     fetch("http://127.0.0.1:8000/api/cart/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch cart");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Checkout Cart:", data);

//         setCartItems(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Checkout Cart Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   const getPrice = (price) => {
//     return Number(price);
//   };

//   const subtotal = cartItems.reduce((total, item) => {
//     const product = item.product_details;

//     if (!product) {
//       return total;
//     }

//     return (
//       total +
//       getPrice(product.price) * item.quantity
//     );
//   }, 0);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.address ||
//       !formData.city ||
//       !formData.pincode
//     ) {
//       alert("Please fill all details.");
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }

//     alert("Order placed successfully!");

//     console.log("Customer Details:", formData);
//     console.log("Order Items:", cartItems);

//     setCartItems([]);

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       city: "",
//       pincode: "",
//     });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />

//         <section className="checkout-page-title">
//           <h1>Checkout</h1>
//         </section>

//         <section className="checkout-section">
//           <div className="checkout-container">
//             <p>Loading checkout...</p>
//           </div>
//         </section>

//         <AboutFooter />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       {/* Page Title */}
//       <section className="checkout-page-title">
//         <h1>Checkout</h1>
//       </section>

//       {/* Checkout Section */}
//       <section className="checkout-section">
//         <div className="checkout-container">

//           {/* Customer Details */}
//           <div className="customer-details">

//             <h2>Billing Details</h2>

//             <form onSubmit={handleSubmit}>

//               <div className="form-group">
//                 <label>Full Name</label>

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone Number</label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Address</label>

//                 <textarea
//                   name="address"
//                   placeholder="Enter your address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>

//               <div className="checkout-row">

//                 <div className="form-group">
//                   <label>City</label>

//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="Enter city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Pincode</label>

//                   <input
//                     type="text"
//                     name="pincode"
//                     placeholder="Enter pincode"
//                     value={formData.pincode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//               </div>

//             </form>

//           </div>

//           {/* Order Summary */}
//           <div className="checkout-summary">

//             <h2>Your Order</h2>

//             <div className="checkout-products">

//               {cartItems.length === 0 ? (
//                 <div>
//                   <p>Your cart is empty.</p>

//                   <button
//                     type="button"
//                     onClick={() => navigate("/products")}
//                   >
//                     Continue Shopping
//                   </button>
//                 </div>
//               ) : (
//                 cartItems.map((item) => {

//                   const product = item.product_details;

//                   if (!product) {
//                     return null;
//                   }

//                   return (
//                     <div
//                       className="checkout-product"
//                       key={item.id}
//                     >

//                       <div className="checkout-product-info">

//                         <img
//                           src={
//                             product.image
//                               ? product.image.startsWith("http")
//                                 ? product.image
//                                 : `http://127.0.0.1:8000${product.image}`
//                               : "/products/p1.png"
//                           }
//                           alt={product.name}
//                         />

//                         <div>
//                           <h3>{product.name}</h3>

//                           <p>
//                             Quantity: {item.quantity}
//                           </p>
//                         </div>

//                       </div>

//                       <span>
//                         $
//                         {(
//                           getPrice(product.price) *
//                           item.quantity
//                         ).toFixed(2)}
//                       </span>

//                     </div>
//                   );
//                 })
//               )}

//             </div>

//             <div className="checkout-summary-line"></div>

//             <div className="checkout-summary-row">
//               <span>Subtotal</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>

//             <div className="checkout-summary-row">
//               <span>Shipping</span>

//               <span>Free</span>
//             </div>

//             <div className="checkout-total">
//               <span>Total</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>

//             {/* Payment Method */}
//             <div className="payment-method">

//               <h2>Payment Method</h2>

//               <label className="cod-option">

//                 <input
//                   type="radio"
//                   name="payment"
//                   value="COD"
//                   defaultChecked
//                 />

//                 <span>Cash on Delivery</span>

//               </label>

//               <p>
//                 Pay with cash when your order is delivered.
//               </p>

//             </div>

//             <button
//               type="button"
//               className="place-order-btn"
//               onClick={handleSubmit}
//               disabled={cartItems.length === 0}
//             >
//               Place Order
//             </button>

//           </div>

//         </div>
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default CheckoutPage;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutFooter from "../components/AboutFooter";
import "./CheckoutPage.css";

function CheckoutPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://127.0.0.1:8000/api/cart/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Checkout Cart:", data);

        setCartItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Checkout Cart Error:", error);
        setLoading(false);
      });
  }, [navigate]);

  const getPrice = (price) => {
    return Number(price);
  };

  const subtotal = cartItems.reduce((total, item) => {
    const product = item.product_details;

    if (!product) {
      return total;
    }

    return (
      total +
      getPrice(product.price) * item.quantity
    );
  }, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    setPlacingOrder(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/place-order/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            pincode: formData.pincode,
            payment_method: "COD",
          }),
        }
      );

      const data = await response.json();

      console.log("Order Response:", data);

      if (response.ok) {
        alert("Order placed successfully!");

        setCartItems([]);

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          pincode: "",
        });

        navigate("/home");
      } else {
        console.log("Order Error:", data);

        alert(
          data.message ||
          "Unable to place order."
        );
      }
    } catch (error) {
      console.error(
        "Place Order Error:",
        error
      );

      alert("Server connection error.");
    } finally {
      setPlacingOrder(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="checkout-page-title">
          <h1>Checkout</h1>
        </section>

        <section className="checkout-section">
          <div className="checkout-container">
            <p>Loading checkout...</p>
          </div>
        </section>

        <AboutFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Page Title */}
      <section className="checkout-page-title">
        <h1>Checkout</h1>
      </section>

      {/* Checkout Section */}
      <section className="checkout-section">
        <div className="checkout-container">

          {/* Customer Details */}
          <div className="customer-details">

            <h2>Billing Details</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address</label>

                <textarea
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="checkout-row">

                <div className="form-group">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Pincode</label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

            </form>

          </div>

          {/* Order Summary */}
          <div className="checkout-summary">

            <h2>Your Order</h2>

            <div className="checkout-products">

              {cartItems.length === 0 ? (
                <div>
                  <p>Your cart is empty.</p>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/products")
                    }
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => {

                  const product =
                    item.product_details;

                  if (!product) {
                    return null;
                  }

                  return (
                    <div
                      className="checkout-product"
                      key={item.id}
                    >

                      <div className="checkout-product-info">

                        <img
                          src={
                            product.image
                              ? product.image.startsWith(
                                  "http"
                                )
                                ? product.image
                                : `http://127.0.0.1:8000${product.image}`
                              : "/products/p1.png"
                          }
                          alt={product.name}
                        />

                        <div>
                          <h3>
                            {product.name}
                          </h3>

                          <p>
                            Quantity:{" "}
                            {item.quantity}
                          </p>
                        </div>

                      </div>

                      <span>
                        $
                        {(
                          getPrice(
                            product.price
                          ) *
                          item.quantity
                        ).toFixed(2)}
                      </span>

                    </div>
                  );
                })
              )}

            </div>

            <div className="checkout-summary-line"></div>

            <div className="checkout-summary-row">

              <span>Subtotal</span>

              <span>
                ${subtotal.toFixed(2)}
              </span>

            </div>

            <div className="checkout-summary-row">

              <span>Shipping</span>

              <span>Free</span>

            </div>

            <div className="checkout-total">

              <span>Total</span>

              <span>
                ${subtotal.toFixed(2)}
              </span>

            </div>

            {/* Payment Method */}
            <div className="payment-method">

              <h2>Payment Method</h2>

              <label className="cod-option">

                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  defaultChecked
                />

                <span>
                  Cash on Delivery
                </span>

              </label>

              <p>
                Pay with cash when your
                order is delivered.
              </p>

            </div>

            {/* Place Order */}
            <button
              type="button"
              className="place-order-btn"
              onClick={handleSubmit}
              disabled={
                cartItems.length === 0 ||
                placingOrder
              }
            >
              {placingOrder
                ? "Placing Order..."
                : "Place Order"}
            </button>

          </div>

        </div>
      </section>

      <AboutFooter />
    </>
  );
}

export default CheckoutPage;