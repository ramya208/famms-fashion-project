// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./CartPage.css";

// function CartPage() {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items
//   useEffect(() => {
//     const savedCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     setCartItems(savedCart);
//   }, []);

//   // Increase quantity
//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//           }
//         : item
//     );

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   // Decrease quantity
//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity - 1,
//             }
//           : item
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   // Remove product
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter(
//       (item) => item.id !== id
//     );

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   // Convert "$75" → 75
//   const getPrice = (price) => {
//     return Number(price.replace("$", ""));
//   };

//   // Subtotal
//   const subtotal = cartItems.reduce(
//     (total, item) =>
//       total + getPrice(item.price) * item.quantity,
//     0
//   );

//   return (
//     <>
//       <Navbar />

//       {/* Page Title */}
//       <section className="cart-page-title">
//         <h1>Shopping Cart</h1>
//       </section>

//       {/* Cart */}
//       <section className="cart-section">
//         <div className="cart-container">

//           {/* Cart Items */}
//           <div className="cart-items">

//             {cartItems.length === 0 ? (
//               <div className="empty-cart">
//                 <h2>Your Cart is Empty</h2>
//                 <p>
//                   Add some products to your cart.
//                 </p>
//               </div>
//             ) : (
//               cartItems.map((item) => (

//                 <div
//                   className="cart-item"
//                   key={item.id}
//                 >

//                   {/* Product */}
//                   <div className="cart-product">

//                     <img
//                       src={item.image}
//                       alt={item.name}
//                     />

//                     <div className="cart-product-info">

//                       <h3>{item.name}</h3>

//                       <p>
//                         Fashion Product
//                       </p>

//                     </div>

//                   </div>

//                   {/* Price */}
//                   <div className="cart-price">
//                     {item.price}
//                   </div>

//                   {/* Quantity */}
//                   <div className="quantity-box">

//                     <button
//                       onClick={() =>
//                         decreaseQuantity(item.id)
//                       }
//                     >
//                       −
//                     </button>

//                     <span>
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() =>
//                         increaseQuantity(item.id)
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   {/* Subtotal */}
//                   <div className="cart-subtotal">

//                     $
//                     {(
//                       getPrice(item.price) *
//                       item.quantity
//                     ).toFixed(2)}

//                   </div>

//                   {/* Remove */}
//                   <button
//                     className="remove-btn"
//                     onClick={() =>
//                       removeItem(item.id)
//                     }
//                   >
//                     ×
//                   </button>

//                 </div>

//               ))
//             )}

//           </div>


//           {/* Order Summary */}
//           <div className="order-summary">

//             <h2>Order Summary</h2>

//             <div className="summary-row">
//               <span>Subtotal</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>

//             <div className="summary-row">
//               <span>Shipping</span>

//               <span>Free</span>
//             </div>

//             <div className="summary-line"></div>

//             <div className="summary-total">

//               <span>Total</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>

//             </div>

//             <button className="checkout-btn">
//               Proceed to Checkout
//             </button>

//             <button className="continue-btn">
//               Continue Shopping
//             </button>

//           </div>

//         </div>
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default CartPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./CartPage.css";

// function CartPage() {
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const savedCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     setCartItems(savedCart);
//   }, []);

//   const getPrice = (price) => {
//     return Number(price.replace("$", ""));
//   };

//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter(
//       (item) => item.id !== id
//     );

//     setCartItems(updatedCart);

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) =>
//       total +
//       getPrice(item.price) * item.quantity,
//     0
//   );

//   return (
//     <>
//       <Navbar />

//       <section className="cart-page-title">
//         <h1>Shopping Cart</h1>
//       </section>

//       <section className="cart-section">
//         <div className="cart-container">

//           <div className="cart-items">

//             {cartItems.length === 0 ? (
//               <div className="empty-cart">
//                 <h2>Your Cart is Empty</h2>
//                 <p>Add some products to your cart.</p>
//               </div>
//             ) : (
//               cartItems.map((item) => (
//                 <div
//                   className="cart-item"
//                   key={item.id}
//                 >

//                   <div className="cart-product">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                     />

//                     <div className="cart-product-info">
//                       <h3>{item.name}</h3>
//                       <p>Fashion Product</p>
//                     </div>
//                   </div>

//                   <div className="cart-price">
//                     {item.price}
//                   </div>

//                   <div className="quantity-box">

//                     <button
//                       onClick={() =>
//                         decreaseQuantity(item.id)
//                       }
//                     >
//                       −
//                     </button>

//                     <span>{item.quantity}</span>

//                     <button
//                       onClick={() =>
//                         increaseQuantity(item.id)
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   <div className="cart-subtotal">
//                     $
//                     {(
//                       getPrice(item.price) *
//                       item.quantity
//                     ).toFixed(2)}
//                   </div>

//                   <button
//                     className="remove-btn"
//                     onClick={() =>
//                       removeItem(item.id)
//                     }
//                   >
//                     ×
//                   </button>

//                 </div>
//               ))
//             )}

//           </div>

//           <div className="order-summary">

//             <h2>Order Summary</h2>

//             <div className="summary-row">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>

//             <div className="summary-row">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>

//             <div className="summary-line"></div>

//             <div className="summary-total">
//               <span>Total</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>

//             {/* IMPORTANT */}
//             <button
//               type="button"
//               className="checkout-btn"
//               onClick={() => navigate("/checkout")}
//             >
//               Proceed to Checkout
//             </button>

//             <button
//               type="button"
//               className="continue-btn"
//               onClick={() => navigate("/products")}
//             >
//               Continue Shopping
//             </button>

//           </div>

//         </div>
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default CartPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./CartPage.css";

// function CartPage() {
//   const navigate = useNavigate();

//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ==============================
//   // GET CART FROM DATABASE
//   // ==============================

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
//         console.log("Cart Data:", data);

//         setCartItems(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Cart Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   // ==============================
//   // GET PRODUCT PRICE
//   // ==============================

//   const getPrice = (price) => {
//     return Number(String(price).replace("$", ""));
//   };

//   // ==============================
//   // INCREASE QUANTITY
//   // ==============================

//   const increaseQuantity = async (id, quantity) => {
//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/cart/${id}/`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             quantity: quantity + 1,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log("Updated Cart:", data);

//       if (response.ok) {
//         setCartItems((oldItems) =>
//           oldItems.map((item) =>
//             item.id === id
//               ? {
//                   ...item,
//                   quantity: quantity + 1,
//                 }
//               : item
//           )
//         );
//       } else {
//         console.log("Quantity Error:", data);
//       }
//     } catch (error) {
//       console.error("Quantity Error:", error);
//     }
//   };

//   // ==============================
//   // DECREASE QUANTITY
//   // ==============================

//   const decreaseQuantity = async (id, quantity) => {
//     const token = localStorage.getItem("access");

//     // If quantity is 1, remove item
//     if (quantity === 1) {
//       removeItem(id);
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/cart/${id}/`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             quantity: quantity - 1,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log("Updated Cart:", data);

//       if (response.ok) {
//         setCartItems((oldItems) =>
//           oldItems.map((item) =>
//             item.id === id
//               ? {
//                   ...item,
//                   quantity: quantity - 1,
//                 }
//               : item
//           )
//         );
//       } else {
//         console.log("Quantity Error:", data);
//       }
//     } catch (error) {
//       console.error("Quantity Error:", error);
//     }
//   };

//   // ==============================
//   // REMOVE ITEM
//   // ==============================

//   const removeItem = async (id) => {
//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/cart/${id}/`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         setCartItems((oldItems) =>
//           oldItems.filter(
//             (item) => item.id !== id
//           )
//         );
//       } else {
//         console.log("Remove failed");
//       }
//     } catch (error) {
//       console.error("Remove Error:", error);
//     }
//   };

//   // ==============================
//   // CALCULATE SUBTOTAL
//   // ==============================

//   const subtotal = cartItems.reduce(
//     (total, item) => {
//       const product = item.product_details;

//       if (!product) {
//         return total;
//       }

//       return (
//         total +
//         getPrice(product.price) *
//           item.quantity
//       );
//     },
//     0
//   );

//   // ==============================
//   // LOADING
//   // ==============================

//   if (loading) {
//     return (
//       <>
//         <Navbar />

//         <section className="cart-page-title">
//           <h1>Shopping Cart</h1>
//         </section>

//         <section className="cart-section">
//           <div className="cart-container">
//             <p>Loading cart...</p>
//           </div>
//         </section>

//         <AboutFooter />
//       </>
//     );
//   }

//   // ==============================
//   // CART PAGE
//   // ==============================

//   return (
//     <>
//       <Navbar />

//       <section className="cart-page-title">
//         <h1>Shopping Cart</h1>
//       </section>

//       <section className="cart-section">
//         <div className="cart-container">

//           {/* CART ITEMS */}

//           <div className="cart-items">

//             {cartItems.length === 0 ? (
//               <div className="empty-cart">
//                 <h2>Your Cart is Empty</h2>

//                 <p>
//                   Add some products to your cart.
//                 </p>
//               </div>
//             ) : (
//               cartItems.map((item) => {

//                 const product =
//                   item.product_details;

//                 if (!product) {
//                   return null;
//                 }

//                 return (
//                   <div
//                     className="cart-item"
//                     key={item.id}
//                   >

//                     {/* PRODUCT */}

//                     <div className="cart-product">

//                       <img
//                         src={
//                           product.image
//                             ? product.image.startsWith(
//                                 "http"
//                               )
//                               ? product.image
//                               : `http://127.0.0.1:8000${product.image}`
//                             : "/products/p1.png"
//                         }
//                         alt={product.name}
//                       />

//                       <div className="cart-product-info">
//                         <h3>
//                           {product.name}
//                         </h3>

//                         <p>
//                           Fashion Product
//                         </p>
//                       </div>

//                     </div>

//                     {/* PRICE */}

//                     <div className="cart-price">
//                       $
//                       {Number(
//                         product.price
//                       ).toFixed(2)}
//                     </div>

//                     {/* QUANTITY */}

//                     <div className="quantity-box">

//                       <button
//                         onClick={() =>
//                           decreaseQuantity(
//                             item.id,
//                             item.quantity
//                           )
//                         }
//                       >
//                         −
//                       </button>

//                       <span>
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() =>
//                           increaseQuantity(
//                             item.id,
//                             item.quantity
//                           )
//                         }
//                       >
//                         +
//                       </button>

//                     </div>

//                     {/* SUBTOTAL */}

//                     <div className="cart-subtotal">
//                       $
//                       {(
//                         Number(product.price) *
//                         item.quantity
//                       ).toFixed(2)}
//                     </div>

//                     {/* REMOVE */}

//                     <button
//                       className="remove-btn"
//                       onClick={() =>
//                         removeItem(item.id)
//                       }
//                     >
//                       ×
//                     </button>

//                   </div>
//                 );
//               })
//             )}

//           </div>

//           {/* ORDER SUMMARY */}

//           <div className="order-summary">

//             <h2>Order Summary</h2>

//             <div className="summary-row">
//               <span>Subtotal</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>

//             <div className="summary-row">
//               <span>Shipping</span>

//               <span>Free</span>
//             </div>

//             <div className="summary-line"></div>

//             <div className="summary-total">
//               <span>Total</span>

//               <span>
//                 ${subtotal.toFixed(2)}
//               </span>
//             </div>

//             {/* CHECKOUT */}

//             <button
//               type="button"
//               className="checkout-btn"
//               onClick={() =>
//                 navigate("/checkout")
//               }
//               disabled={cartItems.length === 0}
//             >
//               Proceed to Checkout
//             </button>

//             {/* CONTINUE SHOPPING */}

//             <button
//               type="button"
//               className="continue-btn"
//               onClick={() =>
//                 navigate("/products")
//               }
//             >
//               Continue Shopping
//             </button>

//           </div>

//         </div>
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default CartPage;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutFooter from "../components/AboutFooter";
import "./CartPage.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

function CartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // GET CART FROM DATABASE
  // ==========================================

  useEffect(() => {
    const getCart = async () => {
      let token = localStorage.getItem("access");
      const refreshToken = localStorage.getItem("refresh");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // First request
        let response = await fetch(
          `${API_URL}/api/cart/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ==========================================
        // ACCESS TOKEN EXPIRED
        // ==========================================

        if (response.status === 401 && refreshToken) {
          console.log(
            "Access token expired. Refreshing..."
          );

          const refreshResponse = await fetch(
            `${API_URL}/api/token/refresh/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refresh: refreshToken,
              }),
            }
          );

          const refreshData =
            await refreshResponse.json();

          if (!refreshResponse.ok) {
            console.log(
              "Refresh failed:",
              refreshData
            );

            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            localStorage.removeItem("isAdmin");

            navigate("/login");
            return;
          }

          // Save new access token
          token = refreshData.access;

          localStorage.setItem(
            "access",
            token
          );

          console.log(
            "New access token saved"
          );

          // ==========================================
          // GET CART AGAIN WITH NEW TOKEN
          // ==========================================

          response = await fetch(
            `${API_URL}/api/cart/`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }

        // ==========================================
        // CART API ERROR
        // ==========================================

        if (!response.ok) {
          const errorData =
            await response.json();

          console.log(
            "Cart API Error:",
            errorData
          );

          throw new Error(
            "Failed to fetch cart"
          );
        }

        // ==========================================
        // CART DATA
        // ==========================================

        const data =
          await response.json();

        console.log(
          "Cart Data:",
          data
        );

        const cartList =
          Array.isArray(data)
            ? data
            : data.results || [];

        setCartItems(cartList);

      } catch (error) {
        console.error(
          "Cart Error:",
          error
        );

        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    getCart();
  }, [navigate]);

  // ==========================================
  // GET PRICE
  // ==========================================

  const getPrice = (price) => {
    return Number(
      String(price).replace("$", "")
    );
  };

  // ==========================================
  // INCREASE QUANTITY
  // ==========================================

  const increaseQuantity = async (
    id,
    quantity
  ) => {
    const token =
      localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/cart/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity: quantity + 1,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "Updated Cart:",
        data
      );

      if (response.ok) {
        setCartItems(
          (oldItems) =>
            oldItems.map(
              (item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        quantity + 1,
                    }
                  : item
            )
        );
      } else {
        console.log(
          "Quantity Error:",
          data
        );
      }

    } catch (error) {
      console.error(
        "Quantity Error:",
        error
      );
    }
  };

  // ==========================================
  // DECREASE QUANTITY
  // ==========================================

  const decreaseQuantity = async (
    id,
    quantity
  ) => {
    if (quantity === 1) {
      await removeItem(id);
      return;
    }

    const token =
      localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/cart/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity:
              quantity - 1,
          }),
        }
      );

      const data =
        await response.json();

      console.log(
        "Updated Cart:",
        data
      );

      if (response.ok) {
        setCartItems(
          (oldItems) =>
            oldItems.map(
              (item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity:
                        quantity - 1,
                    }
                  : item
            )
        );
      } else {
        console.log(
          "Quantity Error:",
          data
        );
      }

    } catch (error) {
      console.error(
        "Quantity Error:",
        error
      );
    }
  };

  // ==========================================
  // REMOVE ITEM
  // ==========================================

  const removeItem = async (id) => {
    const token =
      localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/cart/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setCartItems(
          (oldItems) =>
            oldItems.filter(
              (item) =>
                item.id !== id
            )
        );
      } else {
        const data =
          await response.json();

        console.log(
          "Remove Error:",
          data
        );
      }

    } catch (error) {
      console.error(
        "Remove Error:",
        error
      );
    }
  };

  // ==========================================
  // CALCULATE SUBTOTAL
  // ==========================================

  const subtotal =
    cartItems.reduce(
      (total, item) => {
        const product =
          item.product_details;

        if (!product) {
          return total;
        }

        return (
          total +
          getPrice(product.price) *
            item.quantity
        );
      },
      0
    );

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="cart-page-title">
          <h1>Shopping Cart</h1>
        </section>

        <section className="cart-section">
          <div className="cart-container">
            <p>
              Loading cart...
            </p>
          </div>
        </section>

        <AboutFooter />
      </>
    );
  }

  // ==========================================
  // CART PAGE
  // ==========================================

  return (
    <>
      <Navbar />

      <section className="cart-page-title">
        <h1>Shopping Cart</h1>
      </section>

      <section className="cart-section">
        <div className="cart-container">

          {/* CART ITEMS */}

          <div className="cart-items">

            {cartItems.length === 0 ? (
              <div className="empty-cart">

                <h2>
                  Your Cart is Empty
                </h2>

                <p>
                  Add some products
                  to your cart.
                </p>

              </div>
            ) : (
              cartItems.map(
                (item) => {

                  const product =
                    item.product_details;

                  if (!product) {
                    return null;
                  }

                  return (
                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      {/* PRODUCT */}

                      <div className="cart-product">

                        <img
                          src={
                            product.image
                              ? product.image.startsWith(
                                  "http"
                                )
                                ? product.image
                                : `${API_URL}${product.image}`
                              : "/products/p1.png"
                          }
                          alt={
                            product.name
                          }
                        />

                        <div className="cart-product-info">

                          <h3>
                            {product.name}
                          </h3>

                          <p>
                            Fashion Product
                          </p>

                        </div>

                      </div>

                      {/* PRICE */}

                      <div className="cart-price">

                        $
                        {Number(
                          product.price
                        ).toFixed(2)}

                      </div>

                      {/* QUANTITY */}

                      <div className="quantity-box">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(
                              item.id,
                              item.quantity
                            )
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(
                              item.id,
                              item.quantity
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      {/* SUBTOTAL */}

                      <div className="cart-subtotal">

                        $
                        {(
                          Number(
                            product.price
                          ) *
                          item.quantity
                        ).toFixed(2)}

                      </div>

                      {/* REMOVE */}

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() =>
                          removeItem(
                            item.id
                          )
                        }
                      >
                        ×
                      </button>

                    </div>
                  );
                }
              )
            )}

          </div>

          {/* ORDER SUMMARY */}

          <div className="order-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                $
                {subtotal.toFixed(2)}
              </span>

            </div>

            <div className="summary-row">

              <span>
                Shipping
              </span>

              <span>
                Free
              </span>

            </div>

            <div className="summary-line"></div>

            <div className="summary-total">

              <span>
                Total
              </span>

              <span>
                $
                {subtotal.toFixed(2)}
              </span>

            </div>

            {/* CHECKOUT */}

            <button
              type="button"
              className="checkout-btn"
              onClick={() =>
                navigate("/checkout")
              }
              disabled={
                cartItems.length === 0
              }
            >
              Proceed to Checkout
            </button>

            {/* CONTINUE SHOPPING */}

            <button
              type="button"
              className="continue-btn"
              onClick={() =>
                navigate("/products")
              }
            >
              Continue Shopping
            </button>

          </div>

        </div>
      </section>

      <AboutFooter />
    </>
  );
}

export default CartPage;