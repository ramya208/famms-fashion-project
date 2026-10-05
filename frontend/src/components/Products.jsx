// import "./Products.css";

// const products = [
//   {
//     id: 1,
//     name: "Men's Shirt",
//     price: "$75",
//     image: "/products/p1.png",
//   },
//   {
//     id: 2,
//     name: "Men's Shirt",
//     price: "$80",
//     image: "/products/p2.png",
//   },
//   {
//     id: 3,
//     name: "Women's Dress",
//     price: "$68",
//     image: "/products/p3.png",
//   },
//   {
//     id: 4,
//     name: "Women's Dress",
//     price: "$70",
//     image: "/products/p4.png",
//   },
//   {
//     id: 5,
//     name: "Men's T-Shirt",
//     price: "$55",
//     image: "/products/p5.png",
//   },
//   {
//     id: 6,
//     name: "Women's Top",
//     price: "$60",
//     image: "/products/p6.png",
//   },
//   {
//     id: 7,
//     name: "Women's dress",
//     price: "$80",
//     image: "/products/p7.png",
//   },
//   {
//     id: 8,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p8.png",
//   },
//   {
//     id: 9,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p9.png",
//   },
//   {
//     id: 10,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p10.png",
//   },
//   {
//     id: 11,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p11.png",
//   },
//   {
//     id: 12,
//     name: "Women's dress",
//     price: "$65",
//     image: "/products/p12.png",
//   },

// ];

// function Products() {
//   return (
//     <section className="products-section">

//       {/* Title */}
//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>
//       </div>

//       {/* Products */}
//       <div className="products-grid">

//         {products.map((product) => (
//           <div className="product-card" key={product.id}>

//             <div className="product-image">
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//                 {/* Hover Buttons */}
//               <div className="product-hover">

//                 <button className="cart-btn">
//                   Add to Cart
//                 </button>

//                 <button className="buy-btn">
//                   Buy Now
//                 </button>

//               </div>
//             </div>

//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p>{product.price}</p>
//             </div>

//           </div>
//         ))}

//       </div>
//       <div className="view-all-products">
//   <button>View All Products</button>
// </div>

//     </section>
//   );
// }

// export default Products;
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const products = [
//   {
//     id: 1,
//     name: "Men's Shirt",
//     price: "$75",
//     image: "/products/p1.png",
//   },
//   {
//     id: 2,
//     name: "Men's Shirt",
//     price: "$80",
//     image: "/products/p2.png",
//   },
//   {
//     id: 3,
//     name: "Women's Dress",
//     price: "$68",
//     image: "/products/p3.png",
//   },
//   {
//     id: 4,
//     name: "Women's Dress",
//     price: "$70",
//     image: "/products/p4.png",
//   },
//   {
//     id: 5,
//     name: "Men's T-Shirt",
//     price: "$55",
//     image: "/products/p5.png",
//   },
//   {
//     id: 6,
//     name: "Women's Top",
//     price: "$60",
//     image: "/products/p6.png",
//   },
//   {
//     id: 7,
//     name: "Women's dress",
//     price: "$80",
//     image: "/products/p7.png",
//   },
//   {
//     id: 8,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p8.png",
//   },
//   {
//     id: 9,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p9.png",
//   },
//   {
//     id: 10,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p10.png",
//   },
//   {
//     id: 11,
//     name: "Men's Shirt",
//     price: "$65",
//     image: "/products/p11.png",
//   },
//   {
//     id: 12,
//     name: "Women's dress",
//     price: "$65",
//     image: "/products/p12.png",
//   },
// ];

// function Products() {

//   const navigate = useNavigate();

//   // Add To Cart
//   const addToCart = (product) => {

//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {

//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );

//     } else {

//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     // alert(`${product.name} added to cart!`);
//     navigate("/cart");
//   };


  
//       const buyNow = (product) => {
//   const buyNowProduct = {
//     ...product,
//     quantity: 1,
//   };

//   localStorage.setItem(
//     "buyNowProduct",
//     JSON.stringify(buyNowProduct)
//   );

//   navigate("/checkout");
// };


//   return (
//     <section className="products-section">

//       {/* Title */}
//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>
//       </div>


//       {/* Products */}
//       <div className="products-grid">

//         {products.map((product) => (

//           <div
//             className="product-card"
//             key={product.id}
//           >

//             <div className="product-image">

//               <img
//                 src={product.image}
//                 alt={product.name}
//               />


//               {/* Hover Buttons */}
//               <div className="product-hover">

//                 <button
//                   className="cart-btn"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>


//                 <button
//                   className="buy-btn"
//                   onClick={() => buyNow(product)}
//                 >
//                   Buy Now
//                 </button>

//               </div>

//             </div>


//             <div className="product-info">

//               <h3>{product.name}</h3>

//               <p>{product.price}</p>

//             </div>

//           </div>

//         ))}

//       </div>


//       {/* View All Products */}
//       <div className="view-all-products">

//         <button>
//           View All Products
//         </button>

//       </div>

//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/products/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
//      useEffect(() => {
//   fetch("http://127.0.0.1:8000/api/products/")
//     .then((response) => {
//       console.log("Response:", response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Products:", data);
//       setProducts(data);
//     })
//     .catch((error) => {
//       console.error("API Error:", error);
//     });
// }, []);

//   const addToCart = (product) => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {
//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           price: `$${product.price}`,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     navigate("/cart");
//   };

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   return (
//     <section className="products-section">
//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>
//         <div className="products-line"></div>
//       </div>

//       <div className="products-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <div className="product-image">
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />

//               <div className="product-hover">
//                 <button
//                   className="cart-btn"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   className="buy-btn"
//                   onClick={() => buyNow(product)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="view-all-products">
//         <button>View All Products</button>
//       </div>
//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/products/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
//      useEffect(() => {
//   fetch("http://127.0.0.1:8000/api/products/")
//     .then((response) => {
//       console.log("Response:", response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Products:", data);
//       setProducts(data);
//     })
//     .catch((error) => {
//       console.error("API Error:", error);
//     });
// }, []);

//   const addToCart = (product) => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {
//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           price: `$${product.price}`,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     navigate("/cart");
//   };

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   return (
//     <section className="products-section">
//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>
//         <div className="products-line"></div>
//       </div>

//       <div className="products-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <div className="product-image">
//               <img
//                 src={product.image}
//                 alt={product.name}
//               />

//               <div className="product-hover">
//                 <button
//                   className="cart-btn"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   className="buy-btn"
//                   onClick={() => buyNow(product)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>

//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="view-all-products">
//         <button>View All Products</button>
//       </div>
//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);

//   // Get products from Django
//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     fetch("http://127.0.0.1:8000/api/products/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("API Error:", error);
//       });
//   }, []);

//   // Add to Cart
//   const addToCart = (product) => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {
//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           price: `$${product.price}`,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     navigate("/cart");
//   };

//   // Buy Now
//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   return (
//     <section className="products-section">

//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line">

//         </div>
//            {/* <button className="add-product-btn">
//   + Add Product
// </button> */}
// <button
//   className="add-product-btn"
//   onClick={() => navigate("/add-product")}
// >
//   + Add Product
// </button>
//       </div>

//       <div className="products-grid">

//         {products.map((product) => (
//           <div
//             className="product-card"
//             key={product.id}
//           >

//             <div className="product-image">

//               <img
//                 src={product.image}
//                 alt={product.name}
//               />

//               <div className="product-hover">

//                 <button
//                   className="cart-btn"
//                   onClick={() => addToCart(product)}
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   className="buy-btn"
//                   onClick={() => buyNow(product)}
//                 >
//                   Buy Now
//                 </button>

//               </div>

//             </div>

//             <div className="product-info">

//               <h3>{product.name}</h3>

//               <p>${product.price}</p>

//             </div>

//           </div>
//         ))}

//       </div>

//       <div className="view-all-products">
//         <button>
//           View All Products
//         </button>
//       </div>

//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // Check current user
//     fetch("http://127.0.0.1:8000/api/user/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User authentication failed");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Current User:", data);

//         setIsAdmin(data.is_staff);
//       })
//       .catch((error) => {
//         console.error("User Error:", error);
//       });

//     // Get products
//     fetch("http://127.0.0.1:8000/api/products/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Products Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Product Error:", error);
//       });
//   }, [navigate]);

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = (product) => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {
//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           price: `$${product.price}`,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     navigate("/cart");
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   // ==========================================
//   // DELETE PRODUCT
//   // ==========================================

//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Product deleted successfully!");

//         // Remove product from screen
//         setProducts((oldProducts) =>
//           oldProducts.filter(
//             (product) => product.id !== id
//           )
//         );
//       } else {
//         const data = await response.json();

//         console.log("Delete Error:", data);

//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);

//       alert("Server connection error");
//     }
//   };

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <section className="products-section">

//       {/* ================= TITLE ================= */}

//       <div className="products-title">

//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ONLY */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() => navigate("/add-product")}
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ================= PRODUCTS ================= */}

//       <div className="products-grid">

//         {products.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* PRODUCT IMAGE */}

//               <div className="product-image">

//                 <img
//                   src={
//                     product.image?.startsWith("http")
//                       ? product.image
//                       : `http://127.0.0.1:8000${product.image}`
//                   }
//                   alt={product.name}
//                 />

//               </div>

//               {/* PRODUCT DETAILS */}

//               <div className="product-info">

//                 <h3>{product.name}</h3>

//                 <p>${product.price}</p>

//               </div>

//               {/* ================= BUTTONS ================= */}

//               <div className="product-actions">

//                 {isAdmin ? (
//                   <>
//                     {/* ADMIN */}

//                     <button
//                       className="edit-btn"
//                       onClick={() =>
//                         navigate(
//                           `/edit-product/${product.id}`
//                         )
//                       }
//                     >
//                       Edit
//                     </button>

//                     <button
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {/* NORMAL USER */}

//                     <button
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     <button
//                       className="buy-btn"
//                       onClick={() =>
//                         buyNow(product)
//                       }
//                     >
//                       Buy Now
//                     </button>
//                   </>
//                 )}

//               </div>

//             </div>
//           ))
//         )}

//       </div>

//       {/* ================= VIEW ALL ================= */}

//       <div className="view-all-products">

//         <button>
//           View All Products
//         </button>

//       </div>

//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // ------------------------------------------
//     // CHECK CURRENT USER
//     // ------------------------------------------

//     fetch("http://127.0.0.1:8000/api/user/", {
//       method: "GET",

//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User authentication failed");
//         }

//         return response.json();
//       })
//       .then((userData) => {
//         console.log("Logged User:", userData);

//         // Check admin
//         if (userData.is_staff === true) {
//           setIsAdmin(true);
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         }
//       })
//       .catch((error) => {
//         console.error("User Error:", error);
//       });

//     // ------------------------------------------
//     // GET PRODUCTS
//     // ------------------------------------------

//     fetch("http://127.0.0.1:8000/api/products/", {
//       method: "GET",

//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Product Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Product Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = (product) => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cartItems")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     let updatedCart;

//     if (existingProduct) {
//       updatedCart = oldCart.map((item) =>
//         item.id === product.id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       );
//     } else {
//       updatedCart = [
//         ...oldCart,
//         {
//           ...product,
//           price: `$${product.price}`,
//           quantity: 1,
//         },
//       ];
//     }

//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(updatedCart)
//     );

//     navigate("/cart");
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   // ==========================================
//   // DELETE PRODUCT
//   // ==========================================

//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Product deleted successfully!");

//         // Remove deleted product from screen
//         setProducts((oldProducts) =>
//           oldProducts.filter(
//             (product) => product.id !== id
//           )
//         );
//       } else {
//         const data = await response.json();

//         console.log("Delete Error:", data);

//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);

//       alert("Server connection error");
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return (
//       <section className="products-section">
//         <div className="products-title">
//           <h2>
//             Our <span>products</span>
//           </h2>
//         </div>

//         <p>Loading products...</p>
//       </section>
//     );
//   }

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <section className="products-section">

//       {/* ======================================
//           TITLE
//       ====================================== */}

//       <div className="products-title">

//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ====================================
//             ADMIN ONLY - ADD PRODUCT
//         ==================================== */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() => navigate("/add-product")}
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ======================================
//           PRODUCTS
//       ====================================== */}

//       <div className="products-grid">

//         {/* ====================================
//             NO PRODUCTS
//         ==================================== */}

//         {products.length === 0 ? (
//           <div className="no-products">

//             <p>
//               No products available
//             </p>

//             {/* Admin can still add product */}

//             {/* {isAdmin && (
//               <button
//                 className="add-product-btn"
//                 onClick={() =>
//                   navigate("/add-product")
//                 }
//               >
//                 + Add Product
//               </button>
//             )} */}

//           </div>
//         ) : (

//           /* ==================================
//              PRODUCT LIST
//           ================================== */

//           products.map((product) => (

//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* =================================
//                   PRODUCT IMAGE
//               ================================= */}

//               <div className="product-image">

//                 <img
//                   src={
//                     product.image
//                       ? product.image.startsWith("http")
//                         ? product.image
//                         : `http://127.0.0.1:8000${product.image}`
//                       : "/products/p1.png"
//                   }
//                   alt={product.name}
//                 />

//               </div>

//               {/* =================================
//                   PRODUCT INFO
//               ================================= */}

//               <div className="product-info">

//                 <h3>
//                   {product.name}
//                 </h3>

//                 <p>
//                   ${product.price}
//                 </p>

//               </div>

//               {/* =================================
//                   BUTTONS
//               ================================= */}

//               <div className="product-actions">

//                 {isAdmin ? (

//                   /* ==============================
//                      ADMIN BUTTONS
//                   ============================== */

//                   <>
//                     <button
//                       className="edit-btn"
//                       onClick={() =>
//                         navigate(
//                           `/edit-product/${product.id}`
//                         )
//                       }
//                     >
//                       Edit
//                     </button>

//                     <button
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>

//                 ) : (

//                   /* ==============================
//                      USER BUTTONS
//                   ============================== */

//                   <>
//                     <button
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     <button
//                       className="buy-btn"
//                       onClick={() =>
//                         buyNow(product)
//                       }
//                     >
//                       Buy Now
//                     </button>
//                   </>

//                 )}

//               </div>

//             </div>

//           ))
//         )}

//       </div>

//       {/* ======================================
//           VIEW ALL
//       ====================================== */}
// {/* 
//       <div className="view-all-products">

//         <button>
//           View All Products
//         </button>

//       </div> */}

//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==============================
//   // GET USER AND PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // ==============================
//     // GET CURRENT USER
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/user/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User authentication failed");
//         }

//         return response.json();
//       })
//       .then((userData) => {
//         console.log("Logged User:", userData);

//         if (userData.is_staff === true) {
//           setIsAdmin(true);
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         }
//       })
//       .catch((error) => {
//         console.error("User Error:", error);
//       });

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/products/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Product Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Product Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/cart/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log("Cart Response:", data);

//       if (response.ok) {
//         alert("Product added to cart!");
//         navigate("/cart");
//       } else {
//         console.log("Cart Error:", data);
//         alert(JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Cart Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // BUY NOW
//   // ==============================

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   // ==============================
//   // DELETE PRODUCT
//   // ==============================

//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Product deleted successfully!");

//         setProducts((oldProducts) =>
//           oldProducts.filter(
//             (product) => product.id !== id
//           )
//         );
//       } else {
//         const data = await response.json();

//         console.log("Delete Error:", data);
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // LOADING
//   // ==============================

//   if (loading) {
//     return (
//       <section className="products-section">
//         <div className="products-title">
//           <h2>
//             Our <span>products</span>
//           </h2>
//         </div>

//         <p>Loading products...</p>
//       </section>
//     );
//   }

//   // ==============================
//   // PRODUCTS PAGE
//   // ==============================

//   return (
//     <section className="products-section">

//       {/* TITLE */}

//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() => navigate("/add-product")}
//           >
//             + Add Product
//           </button>
//         )}
//       </div>

//       {/* PRODUCTS GRID */}

//       <div className="products-grid">

//         {products.length === 0 ? (
//           <div className="no-products">
//             <p>No products available</p>
//           </div>
//         ) : (
//           products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* PRODUCT IMAGE */}

//               <div className="product-image">
//                 <img
//                   src={
//                     product.image
//                       ? product.image.startsWith("http")
//                         ? product.image
//                         : `http://127.0.0.1:8000${product.image}`
//                       : "/products/p1.png"
//                   }
//                   alt={product.name}
//                 />
//               </div>

//               {/* PRODUCT INFO */}

//               <div className="product-info">
//                 <h3>{product.name}</h3>

//                 <p>
//                   ${product.price}
//                 </p>
//               </div>

//               {/* PRODUCT BUTTONS */}

//               <div className="product-actions">

//                 {isAdmin ? (
//                   <>
//                     {/* EDIT */}

//                     <button
//                       className="edit-btn"
//                       onClick={() =>
//                         navigate(
//                           `/edit-product/${product.id}`
//                         )
//                       }
//                     >
//                       Edit
//                     </button>

//                     {/* DELETE */}

//                     <button
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {/* ADD TO CART */}

//                     <button
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     {/* BUY NOW */}

//                     <button
//                       className="buy-btn"
//                       onClick={() =>
//                         buyNow(product)
//                       }
//                     >
//                       Buy Now
//                     </button>
//                   </>
//                 )}

//               </div>
//             </div>
//           ))
//         )}

//       </div>
//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==============================
//   // GET USER AND PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // ==============================
//     // GET CURRENT USER
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/user/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User authentication failed");
//         }

//         return response.json();
//       })
//       .then((userData) => {
//         console.log("Logged User:", userData);

//         if (userData.is_staff === true) {
//           setIsAdmin(true);
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         }
//       })
//       .catch((error) => {
//         console.error("User Error:", error);
//       });

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/products/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Product Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Product Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/cart/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log("Cart Response:", data);

//       if (response.ok) {
//         alert("Product added to cart!");
//         navigate("/cart");
//       } else {
//         console.log("Cart Error:", data);
//         alert(JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Cart Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // BUY NOW
//   // ==============================

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   // ==============================
//   // DELETE PRODUCT
//   // ==============================

//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Product deleted successfully!");

//         setProducts((oldProducts) =>
//           oldProducts.filter(
//             (product) => product.id !== id
//           )
//         );
//       } else {
//         const data = await response.json();

//         console.log("Delete Error:", data);
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // LOADING
//   // ==============================

//   if (loading) {
//     return (
//       <section className="products-section">
//         <div className="products-title">
//           <h2>
//             Our <span>products</span>
//           </h2>
//         </div>

//         <p>Loading products...</p>
//       </section>
//     );
//   }

//   // ==============================
//   // PRODUCTS PAGE
//   // ==============================

//   return (
//     <section className="products-section">

//       {/* TITLE */}

//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() => navigate("/add-product")}
//           >
//             + Add Product
//           </button>
//         )}
//       </div>

//       {/* PRODUCTS GRID */}

//       <div className="products-grid">

//         {products.length === 0 ? (
//           <div className="no-products">
//             <p>No products available</p>
//           </div>
//         ) : (
//           products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* PRODUCT IMAGE */}

//               <div className="product-image">
//                 <img
//                   src={
//                     product.image
//                       ? `/products/${product.image
//                           .split("/")
//                           .pop()}`
//                       : "/products/p1.png"
//                   }
//                   alt={product.name}
//                 />
//               </div>

//               {/* PRODUCT INFO */}

//               <div className="product-info">
//                 <h3>{product.name}</h3>

//                 <p>
//                   ${product.price}
//                 </p>
//               </div>

//               {/* PRODUCT BUTTONS */}

//               <div className="product-actions">

//                 {isAdmin ? (
//                   <>
//                     {/* EDIT */}

//                     <button
//                       className="edit-btn"
//                       onClick={() =>
//                         navigate(
//                           `/edit-product/${product.id}`
//                         )
//                       }
//                     >
//                       Edit
//                     </button>

//                     {/* DELETE */}

//                     <button
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {/* ADD TO CART */}

//                     <button
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     {/* BUY NOW */}

//                     <button
//                       className="buy-btn"
//                       onClick={() =>
//                         buyNow(product)
//                       }
//                     >
//                       Buy Now
//                     </button>
//                   </>
//                 )}

//               </div>
//             </div>
//           ))
//         )}

//       </div>
//     </section>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==============================
//   // GET USER AND PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // ==============================
//     // GET CURRENT USER
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/user/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User authentication failed");
//         }

//         return response.json();
//       })
//       .then((userData) => {
//         console.log("Logged User:", userData);

//         if (userData.is_staff === true) {
//           setIsAdmin(true);
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         }
//       })
//       .catch((error) => {
//         console.error("User Error:", error);
//       });

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     fetch("http://127.0.0.1:8000/api/products/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log("Product Response:", response);

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Product Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/cart/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log("Cart Response:", data);

//       if (response.ok) {
//         alert("Product added to cart!");
//         navigate("/cart");
//       } else {
//         console.log("Cart Error:", data);
//         alert(JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Cart Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // BUY NOW
//   // ==============================

//   const buyNow = (product) => {
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     navigate("/checkout");
//   };

//   // ==============================
//   // DELETE PRODUCT
//   // ==============================

//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert("Product deleted successfully!");

//         setProducts((oldProducts) =>
//           oldProducts.filter(
//             (product) => product.id !== id
//           )
//         );
//       } else {
//         const data = await response.json();

//         console.log("Delete Error:", data);
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);
//       alert("Server connection error");
//     }
//   };

//   // ==============================
//   // LOADING
//   // ==============================

//   if (loading) {
//     return (
//       <section className="products-section">
//         <div className="products-title">
//           <h2>
//             Our <span>products</span>
//           </h2>
//         </div>

//         <p>Loading products...</p>
//       </section>
//     );
//   }

//   // ==============================
//   // PRODUCTS PAGE
//   // ==============================

//   return (
//     <section className="products-section">

//       {/* TITLE */}

//       <div className="products-title">
//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() => navigate("/add-product")}
//           >
//             + Add Product
//           </button>
//         )}
//       </div>

//       {/* PRODUCTS GRID */}

//       <div className="products-grid">

//         {products.length === 0 ? (
//           <div className="no-products">
//             <p>No products available</p>
//           </div>
//         ) : (
//           products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* PRODUCT IMAGE */}

//               <div className="product-image">
//                 <img
//                   src={
//                     product.image
//                       ? product.image
//                       : "/products/p1.png"
//                   }
//                   alt={product.name}
//                 />
//               </div>

//               {/* PRODUCT INFO */}

//               <div className="product-info">
//                 <h3>{product.name}</h3>

//                 <p>
//                   ${product.price}
//                 </p>
//               </div>

//               {/* PRODUCT BUTTONS */}

//               <div className="product-actions">

//                 {isAdmin ? (
//                   <>
//                     {/* EDIT */}

//                     <button
//                       className="edit-btn"
//                       onClick={() =>
//                         navigate(
//                           `/edit-product/${product.id}`
//                         )
//                       }
//                     >
//                       Edit
//                     </button>

//                     {/* DELETE */}

//                     <button
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     {/* ADD TO CART */}

//                     <button
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     {/* BUY NOW */}

//                     <button
//                       className="buy-btn"
//                       onClick={() =>
//                         buyNow(product)
//                       }
//                     >
//                       Buy Now
//                     </button>
//                   </>
//                 )}

//               </div>
//             </div>
//           ))
//         )}

//       </div>
//     </section>
//   );
// }

// export default Products;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // ==============================
  // GET USER AND PRODUCTS
  // ==============================

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    // ==============================
    // GET CURRENT USER
    // ==============================

    fetch("/api/user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("User authentication failed");
        }

        return response.json();
      })
      .then((userData) => {
        console.log("Logged User:", userData);

        if (userData.is_staff === true) {
          setIsAdmin(true);
          localStorage.setItem("isAdmin", "true");
        } else {
          setIsAdmin(false);
          localStorage.setItem("isAdmin", "false");
        }
      })
      .catch((error) => {
        console.error("User Error:", error);
      });

    // ==============================
    // GET PRODUCTS
    // ==============================

    fetch("/api/products/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Product Response:", response);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Products:", data);

        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Product Error:", error);
        setLoading(false);
      });
  }, [navigate]);

  // ==============================
  // ADD TO CART
  // ==============================

  const addToCart = async (product) => {
    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        "/api/cart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product: product.id,
            quantity: 1,
          }),
        }
      );

      const data = await response.json();

      console.log("Cart Response:", data);

      if (response.ok) {
        alert("Product added to cart!");
        navigate("/cart");
      } else {
        console.log("Cart Error:", data);
        alert(JSON.stringify(data));
      }
    } catch (error) {
      console.error("Cart Error:", error);
      alert("Server connection error");
    }
  };

  // ==============================
  // BUY NOW
  // ==============================

  const buyNow = (product) => {
    const buyNowProduct = {
      ...product,
      price: `$${product.price}`,
      quantity: 1,
    };

    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(buyNowProduct)
    );

    navigate("/checkout");
  };

  // ==============================
  // DELETE PRODUCT
  // ==============================

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `/api/products/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Product deleted successfully!");

        setProducts((oldProducts) =>
          oldProducts.filter(
            (product) => product.id !== id
          )
        );
      } else {
        const data = await response.json();

        console.log("Delete Error:", data);
        alert("Delete failed");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Server connection error");
    }
  };

  // ==============================
  // LOADING
  // ==============================

  if (loading) {
    return (
      <section className="products-section">
        <div className="products-title">
          <h2>
            Our <span>products</span>
          </h2>
        </div>

        <p>Loading products...</p>
      </section>
    );
  }

  // ==============================
  // PRODUCTS PAGE
  // ==============================

  return (
    <section className="products-section">

      {/* TITLE */}

      <div className="products-title">
        <h2>
          Our <span>products</span>
        </h2>

        <div className="products-line"></div>

        {/* ADMIN ADD PRODUCT */}

        {isAdmin && (
          <button
            className="add-product-btn"
            onClick={() => navigate("/add-product")}
          >
            + Add Product
          </button>
        )}
      </div>

      {/* PRODUCTS GRID */}

      <div className="products-grid">

        {products.length === 0 ? (
          <div className="no-products">
            <p>No products available</p>
          </div>
        ) : (
          products.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >

              {/* PRODUCT IMAGE */}

              <div className="product-image">
                <img
                  src={
                    product.image
                      ? product.image
                      : "/products/p1.png"
                  }
                  alt={product.name}
                />
              </div>

              {/* PRODUCT INFO */}

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>
                  ${product.price}
                </p>
              </div>

              {/* PRODUCT BUTTONS */}

              <div className="product-actions">

                {isAdmin ? (
                  <>
                    {/* EDIT */}

                    <button
                      className="edit-btn"
                      onClick={() =>
                        navigate(
                          `/edit-product/${product.id}`
                        )
                      }
                    >
                      Edit
                    </button>

                    {/* DELETE */}

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    {/* ADD TO CART */}

                    <button
                      className="cart-btn"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add to Cart
                    </button>

                    {/* BUY NOW */}

                    <button
                      className="buy-btn"
                      onClick={() =>
                        buyNow(product)
                      }
                    >
                      Buy Now
                    </button>
                  </>
                )}

              </div>
            </div>
          ))
        )}

      </div>
    </section>
  );
}

export default Products;