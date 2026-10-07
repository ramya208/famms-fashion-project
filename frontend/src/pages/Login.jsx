// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";
// const API_URL = import.meta.env.VITE_API_URL;

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/login/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // JWT tokens save
//         localStorage.setItem("access", data.access);
//         localStorage.setItem("refresh", data.refresh);

//         alert("Login successful!");

//         navigate("/products");
//       } else {
//         alert(
//           data.detail || "Invalid username or password"
//         );
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Server connection error");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">

//         <h1>Login</h1>

//         <p className="login-subtitle">
//           Login to your account
//         </p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <Link to="/signup">
//             Sign Up
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Login;

// export default Login;
// 
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // ==============================
//       // LOGIN
//       // ==============================

//       const response = await fetch(
//         "/api/token/",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       // ==============================
//       // LOGIN SUCCESS
//       // ==============================

//       if (response.ok) {
//         // Save JWT tokens
//         localStorage.setItem("access", data.access);
//         localStorage.setItem("refresh", data.refresh);

//         // ==============================
//         // GET CURRENT USER
//         // ==============================

//         const userResponse = await fetch(
//           "/api/user/",
//           {
//             headers: {
//               Authorization: `Bearer ${data.access}`,
//             },
//           }
//         );

//         const userData = await userResponse.json();

//         console.log("Logged User:", userData);

//         // ==============================
//         // SAVE ADMIN STATUS
//         // ==============================

//         if (userData.is_staff === true) {
//           localStorage.setItem("isAdmin", "true");
//         } else {
//           localStorage.setItem("isAdmin", "false");
//         }

//         console.log(
//           "Admin:",
//           userData.is_staff
//         );

//         // ==============================
//         // SUCCESS
//         // ==============================

//         alert("Login successful!");

//         navigate("/home");
//       } else {
//         alert(
//           data.detail ||
//             "Invalid username or password"
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Login Error:",
//         error
//       );

//       alert(
//         "Server connection error"
//       );
//     }
//   };

//   return (
//     <div className="login-page">

//       <div className="login-box">

//         <h1>Login</h1>

//         <p className="login-subtitle">
//           Login to your account
//         </p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         <p className="signup-text">
//           Don't have an account?{" "}

//           <Link to="/signup">
//             Sign Up
//           </Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Login;
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";

// const API_URL = import.meta.env.VITE_API_URL;

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `${API_URL}/api/token/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // JWT tokens save
//         localStorage.setItem("access", data.access);
//         localStorage.setItem("refresh", data.refresh);

//         alert("Login successful!");

//         navigate("/products");
//       } else {
//         alert(
//           data.detail || "Invalid username or password"
//         );
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Server connection error");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">

//         <h1>Login</h1>

//         <p className="login-subtitle">
//           Login to your account
//         </p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">
//             Login
//           </button>

//         </form>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <Link to="/signup">
//             Sign Up
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // ==============================
  // HANDLE INPUT
  // ==============================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // LOGIN
  // ==============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/api/token/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // ==============================
        // JWT TOKENS SAVE
        // ==============================

        localStorage.setItem(
          "access",
          data.access
        );

        localStorage.setItem(
          "refresh",
          data.refresh
        );

        // ==============================
        // CHECK PENDING ACTION
        // ==============================

        const pendingAction =
          localStorage.getItem(
            "pendingAction"
          );

        const pendingProduct =
          localStorage.getItem(
            "pendingProduct"
          );

        // ==============================
        // ADD TO CART AFTER LOGIN
        // ==============================

        if (
          pendingAction === "cart" &&
          pendingProduct
        ) {
          const product =
            JSON.parse(pendingProduct);

          try {
            const cartResponse =
              await fetch(
                `${API_URL}/api/cart/`,
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",

                    Authorization: `Bearer ${data.access}`,
                  },

                  body: JSON.stringify({
                    product: product.id,
                    quantity: 1,
                  }),
                }
              );

            const cartData =
              await cartResponse.json();

            if (cartResponse.ok) {
              // Clear pending data
              localStorage.removeItem(
                "pendingAction"
              );

              localStorage.removeItem(
                "pendingProduct"
              );

              alert(
                "Login successful! Product added to cart!"
              );

              navigate("/cart");

              return;
            } else {
              console.log(
                "Cart Error:",
                cartData
              );

              alert(
                JSON.stringify(cartData)
              );

              return;
            }
          } catch (error) {
            console.error(
              "Cart Error:",
              error
            );

            alert(
              "Product could not be added to cart."
            );

            return;
          }
        }

        // ==============================
        // BUY NOW AFTER LOGIN
        // ==============================

        if (
          pendingAction === "buy" &&
          pendingProduct
        ) {
          const product =
            JSON.parse(pendingProduct);

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

          // Clear pending data
          localStorage.removeItem(
            "pendingAction"
          );

          localStorage.removeItem(
            "pendingProduct"
          );

          alert("Login successful!");

          navigate("/checkout");

          return;
        }

        // ==============================
        // NORMAL LOGIN
        // ==============================

        alert("Login successful!");

        navigate("/products");

      } else {
        // ==============================
        // LOGIN FAILED
        // ==============================

        alert(
          data.detail ||
            "Invalid username or password"
        );
      }

    } catch (error) {
      console.error(
        "Login Error:",
        error
      );

      alert("Server connection error");
    }
  };

  // ==============================
  // LOGIN PAGE
  // ==============================

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login</h1>

        <p className="login-subtitle">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?{" "}

          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;