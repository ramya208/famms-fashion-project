// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import AboutFooter from "../components/AboutFooter";
// import "./MyOrders.css";

// function MyOrders() {
//   const navigate = useNavigate();

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     fetch("/http://127.0.0.1:8000/my-orders/", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("My Orders:", data);
//         setOrders(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Orders Error:", error);
//         setLoading(false);
//       });
//   }, [navigate]);

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <h2>Loading orders...</h2>
//         <AboutFooter />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <section className="my-orders-page">
//         <h1>My Orders</h1>

//         {orders.length === 0 ? (
//           <div>
//             <h2>No Orders Yet</h2>
//             <button onClick={() => navigate("/products")}>
//               Continue Shopping
//             </button>
//           </div>
//         ) : (
//           orders.map((order) => (
//             <div className="order-card" key={order.id}>
//               <h2>Order #{order.id}</h2>

//               <p>
//                 <strong>Name:</strong> {order.name}
//               </p>

//               <p>
//                 <strong>Email:</strong> {order.email}
//               </p>

//               <p>
//                 <strong>Total:</strong> ${order.total_amount}
//               </p>

//               <p>
//                 <strong>Payment:</strong>{" "}
//                 {order.payment_method}
//               </p>

//               <p>
//                 <strong>Status:</strong> {order.status}
//               </p>

//               <h3>Products</h3>

//               {order.items.map((item) => (
//                 <div key={item.id}>
//                   <p>
//                     {item.product_name} × {item.quantity}
//                   </p>

//                   <p>
//                     Price: ${item.price}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))
//         )}
//       </section>

//       <AboutFooter />
//     </>
//   );
// }

// export default MyOrders;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutFooter from "../components/AboutFooter";
import "./MyOrders.css";

const API_URL = import.meta.env.VITE_API_URL;

function MyOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${API_URL}/api/my-orders/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        return response.json();
      })
      .then((data) => {
        console.log("My Orders:", data);
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Orders Error:", error);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return (
      <>
        <Navbar />

        <h2>Loading orders...</h2>

        <AboutFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="my-orders-page">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <div>
            <h2>No Orders Yet</h2>

            <button onClick={() => navigate("/products")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >
              <h2>Order #{order.order_number}</h2>

              <p>
                <strong>Name:</strong>{" "}
                {order.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {order.email}
              </p>

              <p>
                <strong>Total:</strong>{" "}
                ${order.total_amount}
              </p>

              <p>
                <strong>Payment:</strong>{" "}
                {order.payment_method}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {order.status}
              </p>

              <h3>Products</h3>

              {order.items.map((item) => (
                <div key={item.id}>
                  <p>
                    {item.product_name} ×{" "}
                    {item.quantity}
                  </p>

                  <p>
                    Price: ${item.price}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </section>

      <AboutFooter />
    </>
  );
}

export default MyOrders;