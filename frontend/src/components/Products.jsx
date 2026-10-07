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
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const API_URL = import.meta.env.VITE_API_URL;

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==============================
//   // GET PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // ==============================
//     // GET CURRENT USER
//     // Only if user is logged in
//     // ==============================

//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("User authentication failed");
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);
//             localStorage.setItem("isAdmin", "true");
//           } else {
//             setIsAdmin(false);
//             localStorage.setItem("isAdmin", "false");
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);
//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         });
//     } else {
//       // Guest user
//       setIsAdmin(false);
//     }

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     const headers = {};

//     if (token) {
//       headers.Authorization = `Bearer ${token}`;
//     }

//     fetch(`${API_URL}/api/products/`, {
//       method: "GET",
//       headers: headers,
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
//   }, []);

//   // ==============================
//   // CHECK LOGIN
//   // ==============================

//   const checkLogin = () => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please Sign Up or Login first!");
//       navigate("/login");
//       return false;
//     }

//     return true;
//   };

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     // Login check
//     if (!checkLogin()) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
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
//     // Login check
//     if (!checkLogin()) {
//       return;
//     }

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
//         `${API_URL}/api/products/${id}/`,
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
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const API_URL = import.meta.env.VITE_API_URL;

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // LOGIN POPUP
//   const [showLoginPopup, setShowLoginPopup] = useState(true);

//   // ==============================
//   // GET PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // ==============================
//     // GET CURRENT USER
//     // Only if user is logged in
//     // ==============================

//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("User authentication failed");
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);
//             localStorage.setItem("isAdmin", "true");
//           } else {
//             setIsAdmin(false);
//             localStorage.setItem("isAdmin", "false");
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);

//           setIsAdmin(false);
//           localStorage.setItem("isAdmin", "false");
//         });
//     } else {
//       // Guest user
//       setIsAdmin(false);
//     }

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     const headers = {};

//     if (token) {
//       headers.Authorization = `Bearer ${token}`;
//     }

//     fetch(`${API_URL}/api/products/`, {
//       method: "GET",
//       headers: headers,
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
//   }, []);

//   // ==============================
//   // CHECK LOGIN
//   // ==============================

//   const checkLogin = (action, product) => {
//     const token = localStorage.getItem("access");

//     // USER NOT LOGGED IN
//     if (!token) {
//       // Save the action user wanted
//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       // Save selected product
//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       // Show popup
//       setShowLoginPopup(true);

//       return false;
//     }

//     // USER ALREADY LOGGED IN
//     return true;
//   };

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     // Check login
//     if (!checkLogin("cart", product)) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
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
//     // Check login
//     if (!checkLogin("buy", product)) {
//       return;
//     }

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
//         `${API_URL}/api/products/${id}/`,
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

//       {/* ==============================
//           LOGIN POPUP
//       ============================== */}

//       {showLoginPopup && (
//         <div className="login-popup-overlay">

//           <div className="login-popup">

//             {/* CLOSE BUTTON */}

//             <button
//               className="popup-close"
//               onClick={() => {
//                 setShowLoginPopup(false);

//                 localStorage.removeItem(
//                   "pendingAction"
//                 );

//                 localStorage.removeItem(
//                   "pendingProduct"
//                 );
//               }}
//             >
//               ×
//             </button>

//             {/* TITLE */}

//             <h2>Login Required</h2>

//             {/* MESSAGE */}

//             <p>
//               Please Sign Up or Login to continue.
//             </p>

//             {/* BUTTONS */}

//             <div className="popup-buttons">

//               {/* SIGN UP */}

//               <button
//                 onClick={() =>
//                   navigate("/signup")
//                 }
//               >
//                 Sign Up
//               </button>

//               {/* LOGIN */}

//               <button
//                 onClick={() =>
//                   navigate("/login")
//                 }
//               >
//                 Login
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//       {/* ==============================
//           TITLE
//       ============================== */}

//       <div className="products-title">

//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ==============================
//             ADMIN ADD PRODUCT
//         ============================== */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() =>
//               navigate("/add-product")
//             }
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ==============================
//           PRODUCTS GRID
//       ============================== */}

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

//               {/* ==============================
//                   PRODUCT IMAGE
//               ============================== */}

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

//               {/* ==============================
//                   PRODUCT INFO
//               ============================== */}

//               <div className="product-info">

//                 <h3>
//                   {product.name}
//                 </h3>

//                 <p>
//                   ${product.price}
//                 </p>

//               </div>

//               {/* ==============================
//                   PRODUCT BUTTONS
//               ============================== */}

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
//                         deleteProduct(
//                           product.id
//                         )
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

// const API_URL = import.meta.env.VITE_API_URL;

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // LOGIN POPUP
//   // Website open ஆனதும் popup வரும்
//   const [showLoginPopup, setShowLoginPopup] = useState(true);

//   // ==============================
//   // GET USER + PRODUCTS
//   // ==============================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // ==============================
//     // GET CURRENT USER
//     // ==============================

//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("User authentication failed");
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);
//             localStorage.setItem("isAdmin", "true");
//           } else {
//             setIsAdmin(false);
//             localStorage.setItem("isAdmin", "false");
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);

//           // Invalid token இருந்தால் clear
//           localStorage.removeItem("access");
//           localStorage.removeItem("refresh");
//           localStorage.setItem("isAdmin", "false");

//           setIsAdmin(false);
//         });
//     } else {
//       // Guest user
//       setIsAdmin(false);
//       localStorage.setItem("isAdmin", "false");
//     }

//     // ==============================
//     // GET PRODUCTS
//     // ==============================

//     // Guest-க்கும் products பார்க்க permission இருக்கு
//     // அதனால் token இல்லாமலும் products fetch ஆகும்

//     fetch(`${API_URL}/api/products/`, {
//       method: "GET",
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
//   }, []);

//   // ==============================
//   // CHECK LOGIN
//   // ==============================

//   const checkLogin = (action, product) => {
//     const token = localStorage.getItem("access");

//     // ==============================
//     // USER NOT LOGGED IN
//     // ==============================

//     if (!token) {
//       // User wanted action save
//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       // Selected product save
//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       // Login popup show
//       setShowLoginPopup(true);

//       return false;
//     }

//     // ==============================
//     // USER ALREADY LOGGED IN
//     // ==============================

//     return true;
//   };

//   // ==============================
//   // ADD TO CART
//   // ==============================

//   const addToCart = async (product) => {
//     // Login check
//     if (!checkLogin("cart", product)) {
//       return;
//     }

//     const token = localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
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

//         alert(
//           data.message ||
//             JSON.stringify(data)
//         );
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
//     // Login check
//     if (!checkLogin("buy", product)) {
//       return;
//     }

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
//         `${API_URL}/api/products/${id}/`,
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
//             (product) =>
//               product.id !== id
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

//       {/* ==============================
//           LOGIN POPUP
//       ============================== */}

//       {showLoginPopup && (
//         <div className="login-popup-overlay">

//           <div className="login-popup">

//             {/* CLOSE */}

//             <button
//               className="popup-close"
//               onClick={() => {
//                 setShowLoginPopup(false);

//                 // Close மட்டும் செய்தால்
//                 // pending action remove
//                 localStorage.removeItem(
//                   "pendingAction"
//                 );

//                 localStorage.removeItem(
//                   "pendingProduct"
//                 );
//               }}
//             >
//               {/* × */}
//             </button>

//             {/* TITLE */}

//             {/* <h2>Login Required</h2> */}

//             {/* MESSAGE */}

//             {/* <p>
//               Please Sign Up or Login to continue.
//             </p> */}

//             {/* BUTTONS */}

//             {/* <div className="popup-buttons"> */}

//               {/* SIGN UP */}

//               {/* <button
//                 onClick={() => {
//                   navigate("/signup");
//                 }}
//               > */}
//                 {/* Sign Up */}
//               {/* </button> */}

//               {/* LOGIN */}
// {/* 
//               <button
//                 onClick={() => {
//                   navigate("/login");
//                 }}
//               > */}
//                 {/* Login */}
//               {/* </button> */}

//             {/* </div> */}

//           </div>

//         </div>
//       )}

//       {/* ==============================
//           TITLE
//       ============================== */}

//       <div className="products-title">

//         <h2>
//           Our <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() =>
//               navigate("/add-product")
//             }
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ==============================
//           PRODUCTS GRID
//       ============================== */}

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
//                       ? product.image.startsWith(
//                           "http"
//                         )
//                         ? product.image
//                         : `${API_URL}${product.image}`
//                       : "/products/p1.png"
//                   }
//                   alt={product.name}
//                 />

//               </div>

//               {/* PRODUCT INFO */}

//               <div className="product-info">

//                 <h3>
//                   {product.name}
//                 </h3>

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
//                         deleteProduct(
//                           product.id
//                         )
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

// const API_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://127.0.0.1:8000";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // LOGIN POPUP
//   // ==========================================

//   const [showLoginPopup, setShowLoginPopup] =
//     useState(true);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // ========================================
//     // GET CURRENT USER
//     // ========================================

//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(
//               "User authentication failed"
//             );
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log(
//             "Logged User:",
//             userData
//           );

//           if (userData.is_staff === true) {
//             setIsAdmin(true);

//             localStorage.setItem(
//               "isAdmin",
//               "true"
//             );
//           } else {
//             setIsAdmin(false);

//             localStorage.setItem(
//               "isAdmin",
//               "false"
//             );
//           }
//         })
//         .catch((error) => {
//           console.error(
//             "User Error:",
//             error
//           );

//           localStorage.removeItem("access");
//           localStorage.removeItem("refresh");
//           localStorage.setItem(
//             "isAdmin",
//             "false"
//           );

//           setIsAdmin(false);
//         });
//     } else {
//       setIsAdmin(false);

//       localStorage.setItem(
//         "isAdmin",
//         "false"
//       );
//     }

//     // ========================================
//     // GET PRODUCTS
//     // Login இல்லாமலும் products பார்க்கலாம்
//     // ========================================

//     fetch(`${API_URL}/api/products/`, {
//       method: "GET",
//     })
//       .then((response) => {
//         console.log(
//           "Product Response:",
//           response
//         );

//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch products"
//           );
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log(
//           "Products API Data:",
//           data
//         );

//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else if (
//           data &&
//           Array.isArray(data.results)
//         ) {
//           setProducts(data.results);
//         } else {
//           setProducts([]);
//         }

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(
//           "Product Error:",
//           error
//         );

//         setProducts([]);
//         setLoading(false);
//       });
//   }, []);

//   // ==========================================
//   // CHECK LOGIN
//   // ==========================================

//   const checkLogin = (
//     action,
//     product
//   ) => {
//     const token =
//       localStorage.getItem("access");

//     // ========================================
//     // GUEST USER
//     // ========================================

//     if (!token) {
//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       // Login popup மட்டும் show
//       setShowLoginPopup(true);

//       return false;
//     }

//     // ========================================
//     // LOGGED USER
//     // ========================================

//     return true;
//   };

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = async (product) => {
//     if (!checkLogin("cart", product)) {
//       return;
//     }

//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Authorization:
//               `Bearer ${token}`,
//           },

//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Cart Response:",
//         data
//       );

//       if (response.ok) {
//         alert(
//           "Product added to cart!"
//         );

//         navigate("/cart");
//       } else {
//         console.log(
//           "Cart Error:",
//           data
//         );

//         alert(
//           data.message ||
//             JSON.stringify(data)
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Cart Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
//     }
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = (product) => {
//     if (!checkLogin("buy", product)) {
//       return;
//     }

//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(
//         buyNowProduct
//       )
//     );

//     navigate("/checkout");
//   };

//   // ==========================================
//   // DELETE PRODUCT
//   // ==========================================

//   const deleteProduct = async (id) => {
//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this product?"
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     const token =
//       localStorage.getItem("access");

//     if (!token) {
//       alert(
//         "Please login first"
//       );

//       return;
//     }

//     try {
//       const response = await fetch(
//         `${API_URL}/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert(
//           "Product deleted successfully!"
//         );

//         setProducts(
//           (oldProducts) =>
//             oldProducts.filter(
//               (product) =>
//                 product.id !== id
//             )
//         );
//       } else {
//         const data =
//           await response.json();

//         console.log(
//           "Delete Error:",
//           data
//         );

//         alert(
//           "Delete failed"
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Delete Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
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
//             Our{" "}
//             <span>
//               products
//             </span>
//           </h2>

//           <div className="products-line"></div>

//         </div>

//         <p>
//           Loading products...
//         </p>

//       </section>
//     );
//   }

//   // ==========================================
//   // MAIN PAGE
//   // ==========================================

//   return (
//     <>
//       {/* =====================================
//           INITIAL POPUP
//           Login / Signup button கிடையாது
//       ===================================== */}

//       {showLoginPopup && (
//         <div className="login-popup-overlay">

//           <div className="login-popup">

//             {/* CLOSE BUTTON */}

//             <button
//               type="button"
//               className="popup-close"
//               onClick={() => {
//                 setShowLoginPopup(false);

//                 localStorage.removeItem(
//                   "pendingAction"
//                 );

//                 localStorage.removeItem(
//                   "pendingProduct"
//                 );
//               }}
//             >
//               {/* × */}
//             </button>

//             {/* POPUP CONTENT */}

//             {/* <h2>
//               Welcome to FAMMS
//             </h2> */}

//             {/* <p>
//               Explore our latest
//               fashion products.
//             </p> */}

//           </div>

//         </div>
//       )}

//       {/* =====================================
//           PRODUCTS SECTION
//       ===================================== */}

//       <section className="products-section">

//         {/* TITLE */}

//         <div className="products-title">

//           <h2>
//             Our{" "}
//             <span>
//               products
//             </span>
//           </h2>

//           <div className="products-line"></div>

//           {/* ADMIN ADD PRODUCT */}

//           {isAdmin && (
//             <button
//               className="add-product-btn"
//               onClick={() =>
//                 navigate(
//                   "/add-product"
//                 )
//               }
//             >
//               + Add Product
//             </button>
//           )}

//         </div>

//         {/* =================================
//             PRODUCTS GRID
//         ================================= */}

//         <div className="products-grid">

//           {products.length === 0 ? (

//             <div className="no-products">

//               <p>
//                 No products available
//               </p>

//             </div>

//           ) : (

//             products.map(
//               (product) => (

//                 <div
//                   className="product-card"
//                   key={product.id}
//                 >

//                   {/* PRODUCT IMAGE */}

//                   <div className="product-image">

//                     <img
//                       src={
//                         product.image
//                           ? product.image.startsWith(
//                               "http"
//                             )
//                             ? product.image
//                             : `${API_URL}${product.image}`
//                           : "/products/p1.png"
//                       }
//                       alt={
//                         product.name
//                       }
//                     />

//                   </div>

//                   {/* PRODUCT INFO */}

//                   <div className="product-info">

//                     <h3>
//                       {product.name}
//                     </h3>

//                     <p>
//                       $
//                       {product.price}
//                     </p>

//                   </div>

//                   {/* PRODUCT ACTIONS */}

//                   <div className="product-actions">

//                     {isAdmin ? (
//                       <>
//                         {/* EDIT */}

//                         <button
//                           className="edit-btn"
//                           onClick={() =>
//                             navigate(
//                               `/edit-product/${product.id}`
//                             )
//                           }
//                         >
//                           Edit
//                         </button>

//                         {/* DELETE */}

//                         <button
//                           className="delete-btn"
//                           onClick={() =>
//                             deleteProduct(
//                               product.id
//                             )
//                           }
//                         >
//                           Delete
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         {/* ADD TO CART */}

//                         <button
//                           className="cart-btn"
//                           onClick={() =>
//                             addToCart(
//                               product
//                             )
//                           }
//                         >
//                           Add to Cart
//                         </button>

//                         {/* BUY NOW */}

//                         <button
//                           className="buy-btn"
//                           onClick={() =>
//                             buyNow(
//                               product
//                             )
//                           }
//                         >
//                           Buy Now
//                         </button>
//                       </>
//                     )}

//                   </div>

//                 </div>

//               )
//             )

//           )}

//         </div>

//       </section>
//     </>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const API_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://127.0.0.1:8000";

// function Products() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // First popup
//   const [showWelcomePopup, setShowWelcomePopup] =
//     useState(true);

//   // Add to Cart / Buy Now popup
//   const [showLoginPopup, setShowLoginPopup] =
//     useState(false);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // GET CURRENT USER
//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(
//               "User authentication failed"
//             );
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);
//             localStorage.setItem(
//               "isAdmin",
//               "true"
//             );
//           } else {
//             setIsAdmin(false);
//             localStorage.setItem(
//               "isAdmin",
//               "false"
//             );
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);

//           setIsAdmin(false);
//           localStorage.setItem(
//             "isAdmin",
//             "false"
//           );
//         });
//     } else {
//       setIsAdmin(false);
//       localStorage.setItem(
//         "isAdmin",
//         "false"
//       );
//     }

//     // GET PRODUCTS
//     fetch(`${API_URL}/api/products/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch products"
//           );
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         const productList = Array.isArray(data)
//           ? data
//           : data.results || [];

//         setProducts(productList);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(
//           "Product Error:",
//           error
//         );

//         setProducts([]);
//         setLoading(false);
//       });
//   }, []);

//   // ==========================================
//   // CHECK LOGIN
//   // ==========================================

//   const checkLogin = (action, product) => {
//     const token =
//       localStorage.getItem("access");

//     console.log("ACCESS TOKEN:", token);

//     // User NOT logged in
//     if (!token) {
//       console.log(
//         "USER NOT LOGGED IN - OPEN POPUP"
//       );

//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       // VERY IMPORTANT
//       setShowLoginPopup(true);

//       return false;
//     }

//     // User already logged in
//     console.log(
//       "USER LOGGED IN - CONTINUE"
//     );

//     return true;
//   };

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = (product) => {
//     console.log(
//       "ADD TO CART CLICKED:",
//       product
//     );

//     const canContinue = checkLogin(
//       "cart",
//       product
//     );

//     if (!canContinue) {
//       return;
//     }

//     addProductToCart(product);
//   };

//   // ==========================================
//   // ACTUAL CART API
//   // ==========================================

//   const addProductToCart = async (product) => {
//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Authorization:
//               `Bearer ${token}`,
//           },

//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Cart Response:",
//         data
//       );

//       if (response.ok) {
//         alert(
//           "Product added to cart!"
//         );

//         navigate("/cart");
//       } else {
//         alert(
//           data.message ||
//             JSON.stringify(data)
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Cart Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
//     }
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = (product) => {
//     console.log(
//       "BUY NOW CLICKED:",
//       product
//     );

//     const canContinue = checkLogin(
//       "buy",
//       product
//     );

//     if (!canContinue) {
//       return;
//     }

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
//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this product?"
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert(
//           "Product deleted successfully!"
//         );

//         setProducts(
//           (oldProducts) =>
//             oldProducts.filter(
//               (product) =>
//                 product.id !== id
//             )
//         );
//       } else {
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error(
//         "Delete Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
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
//             Our{" "}
//             <span>products</span>
//           </h2>

//           <div className="products-line"></div>
//         </div>

//         <p>Loading products...</p>
//       </section>
//     );
//   }

//   // ==========================================
//   // PAGE
//   // ==========================================

//   return (
//     <>
//       {/* ======================================
//           WELCOME POPUP
//       ====================================== */}

//       {showWelcomePopup && (
//         <div className="login-popup-overlay">
//           <div className="login-popup">

//             <button
//               type="button"
//               className="popup-close"
//               onClick={() =>
//                 setShowWelcomePopup(false)
//               }
//             >
//               ×
//             </button>

//             <h2>
//               Welcome to FAMMS
//             </h2>

//             <p>
//               Explore our latest
//               fashion products.
//             </p>

//           </div>
//         </div>
//       )}

//       {/* ======================================
//           LOGIN / SIGNUP POPUP

//           Add to Cart / Buy Now
//       ====================================== */}

//       {showLoginPopup && (
//         <div className="login-popup-overlay">

//           <div className="login-popup">

//             <button
//               type="button"
//               className="popup-close"
//               onClick={() => {
//                 setShowLoginPopup(false);

//                 localStorage.removeItem(
//                   "pendingAction"
//                 );

//                 localStorage.removeItem(
//                   "pendingProduct"
//                 );
//               }}
//             >
//               ×
//             </button>

//             <h2>
//               Login Required
//             </h2>

//             <p>
//               Please Sign Up or Login
//               to continue.
//             </p>

//             <div className="popup-buttons">

//               <button
//                 type="button"
//                 onClick={() =>
//                   navigate("/signup")
//                 }
//               >
//                 Sign Up
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   navigate("/login")
//                 }
//               >
//                 Login
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//       {/* ======================================
//           PRODUCTS
//       ====================================== */}

//       <section className="products-section">

//         <div className="products-title">

//           <h2>
//             Our{" "}
//             <span>products</span>
//           </h2>

//           <div className="products-line"></div>

//           {isAdmin && (
//             <button
//               className="add-product-btn"
//               onClick={() =>
//                 navigate("/add-product")
//               }
//             >
//               + Add Product
//             </button>
//           )}

//         </div>

//         <div className="products-grid">

//           {products.length === 0 ? (

//             <div className="no-products">
//               <p>
//                 No products available
//               </p>
//             </div>

//           ) : (

//             products.map((product) => (

//               <div
//                 className="product-card"
//                 key={product.id}
//               >

//                 {/* IMAGE */}

//                 <div className="product-image">

//                   <img
//                     src={
//                       product.image
//                         ? product.image.startsWith(
//                             "http"
//                           )
//                           ? product.image
//                           : `${API_URL}${product.image}`
//                         : "/products/p1.png"
//                     }
//                     alt={product.name}
//                   />

//                 </div>

//                 {/* INFO */}

//                 <div className="product-info">

//                   <h3>
//                     {product.name}
//                   </h3>

//                   <p>
//                     ${product.price}
//                   </p>

//                 </div>

//                 {/* BUTTONS */}

//                 <div className="product-actions">

//                   {isAdmin ? (

//                     <>
//                       <button
//                         className="edit-btn"
//                         onClick={() =>
//                           navigate(
//                             `/edit-product/${product.id}`
//                           )
//                         }
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="delete-btn"
//                         onClick={() =>
//                           deleteProduct(
//                             product.id
//                           )
//                         }
//                       >
//                         Delete
//                       </button>
//                     </>

//                   ) : (

//                     <>
//                       <button
//                         type="button"
//                         className="cart-btn"
//                         onClick={() =>
//                           addToCart(product)
//                         }
//                       >
//                         Add to Cart
//                       </button>

//                       <button
//                         type="button"
//                         className="buy-btn"
//                         onClick={() =>
//                           buyNow(product)
//                         }
//                       >
//                         Buy Now
//                       </button>
//                     </>

//                   )}

//                 </div>

//               </div>

//             ))

//           )}

//         </div>

//       </section>
//     </>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const API_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://127.0.0.1:8000";

// function Products({ onOpenAuth }) {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // GET CURRENT USER
//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(
//               "User authentication failed"
//             );
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);

//             localStorage.setItem(
//               "isAdmin",
//               "true"
//             );
//           } else {
//             setIsAdmin(false);

//             localStorage.setItem(
//               "isAdmin",
//               "false"
//             );
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);

//           setIsAdmin(false);

//           localStorage.setItem(
//             "isAdmin",
//             "false"
//           );
//         });
//     } else {
//       setIsAdmin(false);

//       localStorage.setItem(
//         "isAdmin",
//         "false"
//       );
//     }

//     // ==========================================
//     // GET PRODUCTS
//     // ==========================================

//     fetch(`${API_URL}/api/products/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch products"
//           );
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         const productList = Array.isArray(data)
//           ? data
//           : data.results || [];

//         setProducts(productList);

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(
//           "Product Error:",
//           error
//         );

//         setProducts([]);

//         setLoading(false);
//       });
//   }, []);

//   // ==========================================
//   // CHECK LOGIN
//   // ==========================================

//   const checkLogin = (action, product) => {
//     const token =
//       localStorage.getItem("access");

//     console.log(
//       "ACCESS TOKEN:",
//       token
//     );

//     // ========================================
//     // USER NOT LOGGED IN
//     // ========================================

//     if (!token) {
//       console.log(
//         "USER NOT LOGGED IN"
//       );

//       // Save what action user wanted
//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       // Save selected product
//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       // Open Signup popup from Home
//       if (onOpenAuth) {
//         onOpenAuth();
//       }

//       return false;
//     }

//     // ========================================
//     // USER ALREADY LOGGED IN
//     // ========================================

//     console.log(
//       "USER LOGGED IN - CONTINUE"
//     );

//     return true;
//   };

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = (product) => {
//     console.log(
//       "ADD TO CART CLICKED:",
//       product
//     );

//     const canContinue = checkLogin(
//       "cart",
//       product
//     );

//     // Not logged in
//     if (!canContinue) {
//       return;
//     }

//     // Already logged in
//     addProductToCart(product);
//   };

//   // ==========================================
//   // ACTUAL CART API
//   // ==========================================

//   const addProductToCart = async (product) => {
//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Authorization:
//               `Bearer ${token}`,
//           },

//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Cart Response:",
//         data
//       );

//       if (response.ok) {
//         alert(
//           "Product added to cart!"
//         );

//         // Clear pending action
//         localStorage.removeItem(
//           "pendingAction"
//         );

//         localStorage.removeItem(
//           "pendingProduct"
//         );

//         navigate("/cart");
//       } else {
//         alert(
//           data.message ||
//             JSON.stringify(data)
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Cart Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
//     }
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = (product) => {
//     console.log(
//       "BUY NOW CLICKED:",
//       product
//     );

//     const canContinue = checkLogin(
//       "buy",
//       product
//     );

//     // Not logged in
//     if (!canContinue) {
//       return;
//     }

//     // Already logged in
//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(buyNowProduct)
//     );

//     // Clear pending action
//     localStorage.removeItem(
//       "pendingAction"
//     );

//     localStorage.removeItem(
//       "pendingProduct"
//     );

//     navigate("/checkout");
//   };

//   // ==========================================
//   // DELETE PRODUCT
//   // ==========================================

//   const deleteProduct = async (id) => {
//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this product?"
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert(
//           "Product deleted successfully!"
//         );

//         setProducts(
//           (oldProducts) =>
//             oldProducts.filter(
//               (product) =>
//                 product.id !== id
//             )
//         );
//       } else {
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error(
//         "Delete Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
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
//             Our{" "}
//             <span>products</span>
//           </h2>

//           <div className="products-line"></div>

//         </div>

//         <p>
//           Loading products...
//         </p>

//       </section>
//     );
//   }

//   // ==========================================
//   // PAGE
//   // ==========================================

//   return (
//     <section className="products-section">

//       {/* ======================================
//           PRODUCTS TITLE
//       ====================================== */}

//       <div className="products-title">

//         <h2>
//           Our{" "}
//           <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             className="add-product-btn"
//             onClick={() =>
//               navigate("/add-product")
//             }
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ======================================
//           PRODUCTS GRID
//       ====================================== */}

//       <div className="products-grid">

//         {products.length === 0 ? (

//           <div className="no-products">

//             <p>
//               No products available
//             </p>

//           </div>

//         ) : (

//           products.map((product) => (

//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* =================================
//                   IMAGE
//               ================================= */}

//               <div className="product-image">

//                 <img
//                   src={
//                     product.image
//                       ? product.image.startsWith(
//                           "http"
//                         )
//                         ? product.image
//                         : `${API_URL}${product.image}`
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

//                   <>
//                     {/* EDIT */}

//                     <button
//                       type="button"
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
//                       type="button"
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(
//                           product.id
//                         )
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>

//                 ) : (

//                   <>
//                     {/* ADD TO CART */}

//                     <button
//                       type="button"
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     {/* BUY NOW */}

//                     <button
//                       type="button"
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

// const API_URL =
//   import.meta.env.VITE_API_URL ||
//   "http://127.0.0.1:8000";

// function Products({ onOpenAuth }) {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // GET USER + PRODUCTS
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     // GET CURRENT USER
//     if (token) {
//       fetch(`${API_URL}/api/user/`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(
//               "User authentication failed"
//             );
//           }

//           return response.json();
//         })
//         .then((userData) => {
//           console.log("Logged User:", userData);

//           if (userData.is_staff === true) {
//             setIsAdmin(true);

//             localStorage.setItem(
//               "isAdmin",
//               "true"
//             );
//           } else {
//             setIsAdmin(false);

//             localStorage.setItem(
//               "isAdmin",
//               "false"
//             );
//           }
//         })
//         .catch((error) => {
//           console.error("User Error:", error);

//           setIsAdmin(false);

//           localStorage.setItem(
//             "isAdmin",
//             "false"
//           );
//         });
//     } else {
//       setIsAdmin(false);

//       localStorage.setItem(
//         "isAdmin",
//         "false"
//       );
//     }

//     // ==========================================
//     // GET PRODUCTS
//     // ==========================================

//     fetch(`${API_URL}/api/products/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch products"
//           );
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Products:", data);

//         const productList = Array.isArray(data)
//           ? data
//           : data.results || [];

//         setProducts(productList);

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(
//           "Product Error:",
//           error
//         );

//         setProducts([]);

//         setLoading(false);
//       });
//   }, []);

//   // ==========================================
//   // CHECK LOGIN + REFRESH TOKEN
//   // ==========================================

//   const checkLogin = async (action, product) => {
//     let accessToken =
//       localStorage.getItem("access");

//     const refreshToken =
//       localStorage.getItem("refresh");

//     // ========================================
//     // NO ACCESS TOKEN
//     // ========================================

//     if (!accessToken) {
//       console.log(
//         "NO ACCESS TOKEN - OPEN SIGNUP"
//       );

//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       if (onOpenAuth) {
//         onOpenAuth();
//       }

//       return false;
//     }

//     // ========================================
//     // CHECK ACCESS TOKEN
//     // ========================================

//     try {
//       const userResponse = await fetch(
//         `${API_URL}/api/user/`,
//         {
//           method: "GET",
//           headers: {
//             Authorization:
//               `Bearer ${accessToken}`,
//           },
//         }
//       );

//       // ======================================
//       // ACCESS TOKEN VALID
//       // ======================================

//       if (userResponse.ok) {
//         console.log(
//           "ACCESS TOKEN VALID"
//         );

//         return true;
//       }

//       // ======================================
//       // ACCESS TOKEN EXPIRED
//       // ======================================

//       console.log(
//         "ACCESS TOKEN EXPIRED"
//       );

//       // ======================================
//       // NO REFRESH TOKEN
//       // ======================================

//       if (!refreshToken) {
//         console.log(
//           "NO REFRESH TOKEN - OPEN SIGNUP"
//         );

//         localStorage.removeItem(
//           "access"
//         );

//         localStorage.setItem(
//           "pendingAction",
//           action
//         );

//         localStorage.setItem(
//           "pendingProduct",
//           JSON.stringify(product)
//         );

//         if (onOpenAuth) {
//           onOpenAuth();
//         }

//         return false;
//       }

//       // ======================================
//       // REFRESH ACCESS TOKEN
//       // ======================================

//       const refreshResponse =
//         await fetch(
//           `${API_URL}/api/token/refresh/`,
//           {
//             method: "POST",

//             headers: {
//               "Content-Type":
//                 "application/json",
//             },

//             body: JSON.stringify({
//               refresh: refreshToken,
//             }),
//           }
//         );

//       const refreshData =
//         await refreshResponse.json();

//       // ======================================
//       // REFRESH TOKEN FAILED
//       // ======================================

//       if (!refreshResponse.ok) {
//         console.log(
//           "REFRESH TOKEN EXPIRED"
//         );

//         localStorage.removeItem(
//           "access"
//         );

//         localStorage.removeItem(
//           "refresh"
//         );

//         localStorage.setItem(
//           "pendingAction",
//           action
//         );

//         localStorage.setItem(
//           "pendingProduct",
//           JSON.stringify(product)
//         );

//         if (onOpenAuth) {
//           onOpenAuth();
//         }

//         return false;
//       }

//       // ======================================
//       // NEW ACCESS TOKEN
//       // ======================================

//       localStorage.setItem(
//         "access",
//         refreshData.access
//       );

//       console.log(
//         "NEW ACCESS TOKEN CREATED"
//       );

//       return true;

//     } catch (error) {
//       console.error(
//         "TOKEN CHECK ERROR:",
//         error
//       );

//       localStorage.removeItem(
//         "access"
//       );

//       localStorage.removeItem(
//         "refresh"
//       );

//       localStorage.setItem(
//         "pendingAction",
//         action
//       );

//       localStorage.setItem(
//         "pendingProduct",
//         JSON.stringify(product)
//       );

//       if (onOpenAuth) {
//         onOpenAuth();
//       }

//       return false;
//     }
//   };

//   // ==========================================
//   // ADD TO CART
//   // ==========================================

//   const addToCart = async (product) => {
//     console.log(
//       "ADD TO CART CLICKED:",
//       product
//     );

//     const canContinue =
//       await checkLogin(
//         "cart",
//         product
//       );

//     // User not logged in
//     if (!canContinue) {
//       return;
//     }

//     // User logged in
//     addProductToCart(product);
//   };

//   // ==========================================
//   // ACTUAL CART API
//   // ==========================================

//   const addProductToCart = async (product) => {
//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/cart/`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Authorization:
//               `Bearer ${token}`,
//           },

//           body: JSON.stringify({
//             product: product.id,
//             quantity: 1,
//           }),
//         }
//       );

//       const data =
//         await response.json();

//       console.log(
//         "Cart Response:",
//         data
//       );

//       // ====================================
//       // SUCCESS
//       // ====================================

//       if (response.ok) {
//         alert(
//           "Product added to cart!"
//         );

//         localStorage.removeItem(
//           "pendingAction"
//         );

//         localStorage.removeItem(
//           "pendingProduct"
//         );

//         navigate("/cart");
//       }

//       // ====================================
//       // TOKEN ERROR
//       // ====================================

//       else if (
//         response.status === 401
//       ) {
//         console.log(
//           "CART TOKEN EXPIRED"
//         );

//         localStorage.removeItem(
//           "access"
//         );

//         localStorage.removeItem(
//           "refresh"
//         );

//         localStorage.setItem(
//           "pendingAction",
//           "cart"
//         );

//         localStorage.setItem(
//           "pendingProduct",
//           JSON.stringify(product)
//         );

//         if (onOpenAuth) {
//           onOpenAuth();
//         }
//       }

//       // ====================================
//       // OTHER ERROR
//       // ====================================

//       else {
//         alert(
//           data.message ||
//             JSON.stringify(data)
//         );
//       }

//     } catch (error) {
//       console.error(
//         "Cart Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
//     }
//   };

//   // ==========================================
//   // BUY NOW
//   // ==========================================

//   const buyNow = async (product) => {
//     console.log(
//       "BUY NOW CLICKED:",
//       product
//     );

//     const canContinue =
//       await checkLogin(
//         "buy",
//         product
//       );

//     // User not logged in
//     if (!canContinue) {
//       return;
//     }

//     // ========================================
//     // BUY NOW PRODUCT
//     // ========================================

//     const buyNowProduct = {
//       ...product,
//       price: `$${product.price}`,
//       quantity: 1,
//     };

//     localStorage.setItem(
//       "buyNowProduct",
//       JSON.stringify(
//         buyNowProduct
//       )
//     );

//     // Clear pending
//     localStorage.removeItem(
//       "pendingAction"
//     );

//     localStorage.removeItem(
//       "pendingProduct"
//     );

//     navigate("/checkout");
//   };

//   // ==========================================
//   // DELETE PRODUCT
//   // ==========================================

//   const deleteProduct = async (id) => {
//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this product?"
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     const token =
//       localStorage.getItem("access");

//     try {
//       const response = await fetch(
//         `${API_URL}/api/products/${id}/`,
//         {
//           method: "DELETE",

//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         alert(
//           "Product deleted successfully!"
//         );

//         setProducts(
//           (oldProducts) =>
//             oldProducts.filter(
//               (product) =>
//                 product.id !== id
//             )
//         );
//       } else {
//         alert("Delete failed");
//       }
//     } catch (error) {
//       console.error(
//         "Delete Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
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
//             Our{" "}
//             <span>products</span>
//           </h2>

//           <div className="products-line"></div>

//         </div>

//         <p>
//           Loading products...
//         </p>

//       </section>
//     );
//   }

//   // ==========================================
//   // PAGE
//   // ==========================================

//   return (
//     <section className="products-section">

//       {/* ======================================
//           PRODUCTS TITLE
//       ====================================== */}

//       <div className="products-title">

//         <h2>
//           Our{" "}
//           <span>products</span>
//         </h2>

//         <div className="products-line"></div>

//         {/* ADMIN ADD PRODUCT */}

//         {isAdmin && (
//           <button
//             type="button"
//             className="add-product-btn"
//             onClick={() =>
//               navigate("/add-product")
//             }
//           >
//             + Add Product
//           </button>
//         )}

//       </div>

//       {/* ======================================
//           PRODUCTS GRID
//       ====================================== */}

//       <div className="products-grid">

//         {products.length === 0 ? (

//           <div className="no-products">

//             <p>
//               No products available
//             </p>

//           </div>

//         ) : (

//           products.map((product) => (

//             <div
//               className="product-card"
//               key={product.id}
//             >

//               {/* =================================
//                   IMAGE
//               ================================= */}

//               <div className="product-image">

//                 <img
//                   src={
//                     product.image
//                       ? product.image.startsWith(
//                           "http"
//                         )
//                         ? product.image
//                         : `${API_URL}${product.image}`
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

//                   <>
//                     {/* EDIT */}

//                     <button
//                       type="button"
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
//                       type="button"
//                       className="delete-btn"
//                       onClick={() =>
//                         deleteProduct(
//                           product.id
//                         )
//                       }
//                     >
//                       Delete
//                     </button>
//                   </>

//                 ) : (

//                   <>
//                     {/* ADD TO CART */}

//                     <button
//                       type="button"
//                       className="cart-btn"
//                       onClick={() =>
//                         addToCart(product)
//                       }
//                     >
//                       Add to Cart
//                     </button>

//                     {/* BUY NOW */}

//                     <button
//                       type="button"
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

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

function Products({ onOpenAuth }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // GET CURRENT USER
  // ==========================================

  const getCurrentUser = async () => {
    const token = localStorage.getItem("access");

    if (!token) {
      setIsAdmin(false);
      localStorage.setItem("isAdmin", "false");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/user/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const userData = await response.json();

      console.log("Logged User:", userData);

      if (userData.is_staff === true) {
        setIsAdmin(true);

        localStorage.setItem(
          "isAdmin",
          "true"
        );
      } else {
        setIsAdmin(false);

        localStorage.setItem(
          "isAdmin",
          "false"
        );
      }

      return true;

    } catch (error) {
      console.error(
        "User Error:",
        error
      );

      setIsAdmin(false);

      localStorage.setItem(
        "isAdmin",
        "false"
      );

      return false;
    }
  };

  // ==========================================
  // GET PRODUCTS
  // ==========================================

  const getProducts = async () => {
    const token =
      localStorage.getItem("access");

    try {
      const response = await fetch(
        `${API_URL}/api/products/`,
        {
          method: "GET",

          // IMPORTANT:
          // Admin token send ஆகணும்
          headers: token
            ? {
                Authorization:
                  `Bearer ${token}`,
              }
            : {},
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch products"
        );
      }

      const data =
        await response.json();

      console.log(
        "Products from API:",
        data
      );

      const productList =
        Array.isArray(data)
          ? data
          : data.results || [];

      setProducts(productList);

    } catch (error) {
      console.error(
        "Product Error:",
        error
      );

      setProducts([]);

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD USER + PRODUCTS
  // ==========================================

  useEffect(() => {
    const loadData = async () => {

      await getCurrentUser();

      await getProducts();
    };

    loadData();
  }, []);

  // ==========================================
  // CHECK LOGIN + REFRESH TOKEN
  // ==========================================

  const checkLogin = async (
    action,
    product
  ) => {

    let accessToken =
      localStorage.getItem("access");

    const refreshToken =
      localStorage.getItem("refresh");

    // ========================================
    // NO ACCESS TOKEN
    // ========================================

    if (!accessToken) {

      console.log(
        "NO ACCESS TOKEN - OPEN SIGNUP"
      );

      localStorage.setItem(
        "pendingAction",
        action
      );

      localStorage.setItem(
        "pendingProduct",
        JSON.stringify(product)
      );

      if (onOpenAuth) {
        onOpenAuth();
      }

      return false;
    }

    // ========================================
    // CHECK ACCESS TOKEN
    // ========================================

    try {

      const userResponse =
        await fetch(
          `${API_URL}/api/user/`,
          {
            method: "GET",

            headers: {
              Authorization:
                `Bearer ${accessToken}`,
            },
          }
        );

      // ======================================
      // ACCESS TOKEN VALID
      // ======================================

      if (userResponse.ok) {

        console.log(
          "ACCESS TOKEN VALID"
        );

        return true;
      }

      // ======================================
      // ACCESS TOKEN EXPIRED
      // ======================================

      console.log(
        "ACCESS TOKEN EXPIRED"
      );

      // ======================================
      // NO REFRESH TOKEN
      // ======================================

      if (!refreshToken) {

        console.log(
          "NO REFRESH TOKEN"
        );

        localStorage.removeItem(
          "access"
        );

        localStorage.removeItem(
          "refresh"
        );

        localStorage.setItem(
          "pendingAction",
          action
        );

        localStorage.setItem(
          "pendingProduct",
          JSON.stringify(product)
        );

        if (onOpenAuth) {
          onOpenAuth();
        }

        return false;
      }

      // ======================================
      // REFRESH ACCESS TOKEN
      // ======================================

      const refreshResponse =
        await fetch(
          `${API_URL}/api/token/refresh/`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              refresh: refreshToken,
            }),
          }
        );

      const refreshData =
        await refreshResponse.json();

      // ======================================
      // REFRESH FAILED
      // ======================================

      if (!refreshResponse.ok) {

        console.log(
          "REFRESH TOKEN EXPIRED"
        );

        localStorage.removeItem(
          "access"
        );

        localStorage.removeItem(
          "refresh"
        );

        localStorage.setItem(
          "pendingAction",
          action
        );

        localStorage.setItem(
          "pendingProduct",
          JSON.stringify(product)
        );

        if (onOpenAuth) {
          onOpenAuth();
        }

        return false;
      }

      // ======================================
      // SAVE NEW ACCESS TOKEN
      // ======================================

      localStorage.setItem(
        "access",
        refreshData.access
      );

      console.log(
        "NEW ACCESS TOKEN CREATED"
      );

      return true;

    } catch (error) {

      console.error(
        "TOKEN CHECK ERROR:",
        error
      );

      localStorage.removeItem(
        "access"
      );

      localStorage.removeItem(
        "refresh"
      );

      localStorage.setItem(
        "pendingAction",
        action
      );

      localStorage.setItem(
        "pendingProduct",
        JSON.stringify(product)
      );

      if (onOpenAuth) {
        onOpenAuth();
      }

      return false;
    }
  };

  // ==========================================
  // ADD TO CART
  // ==========================================

  const addToCart = async (product) => {

    console.log(
      "ADD TO CART:",
      product
    );

    const canContinue =
      await checkLogin(
        "cart",
        product
      );

    if (!canContinue) {
      return;
    }

    await addProductToCart(product);
  };

  // ==========================================
  // ADD PRODUCT TO CART API
  // ==========================================

  const addProductToCart = async (
    product
  ) => {

    const token =
      localStorage.getItem("access");

    try {

      const response =
        await fetch(
          `${API_URL}/api/cart/`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({
              product: product.id,
              quantity: 1,
            }),
          }
        );

      const data =
        await response.json();

      console.log(
        "Cart Response:",
        data
      );

      if (response.ok) {

        alert(
          "Product added to cart!"
        );

        localStorage.removeItem(
          "pendingAction"
        );

        localStorage.removeItem(
          "pendingProduct"
        );

        navigate("/cart");

      } else if (
        response.status === 401
      ) {

        console.log(
          "CART TOKEN EXPIRED"
        );

        localStorage.removeItem(
          "access"
        );

        localStorage.removeItem(
          "refresh"
        );

        localStorage.setItem(
          "pendingAction",
          "cart"
        );

        localStorage.setItem(
          "pendingProduct",
          JSON.stringify(product)
        );

        if (onOpenAuth) {
          onOpenAuth();
        }

      } else {

        alert(
          data.message ||
            JSON.stringify(data)
        );
      }

    } catch (error) {

      console.error(
        "Cart Error:",
        error
      );

      alert(
        "Server connection error"
      );
    }
  };

  // ==========================================
  // BUY NOW
  // ==========================================

  const buyNow = async (product) => {

    console.log(
      "BUY NOW:",
      product
    );

    const canContinue =
      await checkLogin(
        "buy",
        product
      );

    if (!canContinue) {
      return;
    }

    const buyNowProduct = {
      ...product,

      price: `$${product.price}`,

      quantity: 1,
    };

    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(
        buyNowProduct
      )
    );

    localStorage.removeItem(
      "pendingAction"
    );

    localStorage.removeItem(
      "pendingProduct"
    );

    navigate("/checkout");
  };

  // ==========================================
  // DELETE PRODUCT
  // ==========================================

  const deleteProduct = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this product?"
      );

    if (!confirmDelete) {
      return;
    }

    const token =
      localStorage.getItem("access");

    try {

      const response =
        await fetch(
          `${API_URL}/api/products/${id}/`,
          {
            method: "DELETE",

            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      if (response.ok) {

        alert(
          "Product deleted successfully!"
        );

        setProducts(
          (oldProducts) =>
            oldProducts.filter(
              (product) =>
                product.id !== id
            )
        );

      } else if (
        response.status === 401
      ) {

        alert(
          "Your login session expired. Please login again."
        );

      } else {

        const data =
          await response.json();

        console.error(
          "Delete Error:",
          data
        );

        alert(
          "Delete failed"
        );
      }

    } catch (error) {

      console.error(
        "Delete Error:",
        error
      );

      alert(
        "Server connection error"
      );
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <section className="products-section">

        <div className="products-title">

          <h2>
            Our{" "}
            <span>products</span>
          </h2>

          <div className="products-line"></div>

        </div>

        <p>
          Loading products...
        </p>

      </section>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <section className="products-section">

      {/* ======================================
          PRODUCTS TITLE
      ====================================== */}

      <div className="products-title">

        <h2>
          Our{" "}
          <span>products</span>
        </h2>

        <div className="products-line"></div>

        {/* ADMIN ADD PRODUCT */}

        {isAdmin && (
          <button
            type="button"
            className="add-product-btn"
            onClick={() =>
              navigate("/add-product")
            }
          >
            + Add Product
          </button>
        )}

      </div>

      {/* ======================================
          PRODUCTS GRID
      ====================================== */}

      <div className="products-grid">

        {products.length === 0 ? (

          <div className="no-products">

            <p>
              No products available
            </p>

          </div>

        ) : (

          products.map(
            (product) => (

              <div
                className="product-card"
                key={product.id}
              >

                {/* IMAGE */}

                <div className="product-image">

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
                    alt={product.name}
                  />

                </div>

                {/* PRODUCT INFO */}

                <div className="product-info">

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    ${product.price}
                  </p>

                </div>

                {/* BUTTONS */}

                <div className="product-actions">

                  {isAdmin ? (

                    <>
                      {/* EDIT */}

                      <button
                        type="button"
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
                        type="button"
                        className="delete-btn"
                        onClick={() =>
                          deleteProduct(
                            product.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </>

                  ) : (

                    <>
                      {/* ADD TO CART */}

                      <button
                        type="button"
                        className="cart-btn"
                        onClick={() =>
                          addToCart(
                            product
                          )
                        }
                      >
                        Add to Cart
                      </button>

                      {/* BUY NOW */}

                      <button
                        type="button"
                        className="buy-btn"
                        onClick={() =>
                          buyNow(
                            product
                          )
                        }
                      >
                        Buy Now
                      </button>
                    </>

                  )}

                </div>

              </div>
            )
          )

        )}

      </div>

    </section>
  );
}

export default Products;