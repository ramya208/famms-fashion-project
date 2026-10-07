import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./AdminCustomerOrders.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

function AdminCustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const token = localStorage.getItem("access");

    try {
      const response = await fetch(
        `${API_URL}/api/admin/customer-orders/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Orders Error:", data);
        setOrders([]);
        return;
      }

      setOrders(data);
    } catch (error) {
      console.error("Server Error:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />

      <section className="admin-orders-page">

        <div className="admin-orders-title">
          <h1>Customer Orders</h1>
          <p>Orders received for your products</p>
        </div>

        {loading ? (
          <div className="orders-loading">
            Loading orders...
          </div>
        ) : orders.length === 0 ? (
          <div className="no-orders">
            <h2>No Customer Orders</h2>
            <p>
              Customers have not ordered your products yet.
            </p>
          </div>
        ) : (
          <div className="admin-orders-container">

            {orders.map((order) => (

              <div
                className="admin-order-card"
                key={order.order_id}
              >

                {/* Order Header */}
                <div className="order-header">

                  <div>
                    <h2>
                      Order #{order.order_number}
                    </h2>

                    <p>
                      Order ID: #{order.order_id}
                    </p>
                  </div>

                  <span
                    className={`order-status ${order.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {order.status}
                  </span>

                </div>


                {/* Customer Details */}
                <div className="customer-details">

                  <h3>Customer Details</h3>

                  <div className="customer-grid">

                    <div>
                      <strong>Name</strong>
                      <p>{order.customer.name}</p>
                    </div>

                    <div>
                      <strong>Username</strong>
                      <p>{order.customer.username}</p>
                    </div>

                    <div>
                      <strong>Email</strong>
                      <p>{order.customer.email}</p>
                    </div>

                    <div>
                      <strong>Phone</strong>
                      <p>{order.customer.phone}</p>
                    </div>

                    <div>
                      <strong>Address</strong>
                      <p>{order.customer.address}</p>
                    </div>

                    <div>
                      <strong>City</strong>
                      <p>{order.customer.city}</p>
                    </div>

                    <div>
                      <strong>Pincode</strong>
                      <p>{order.customer.pincode}</p>
                    </div>

                  </div>

                </div>


                {/* Products */}
                <div className="ordered-products">

                  <h3>Ordered Products</h3>

                  {order.products.map((product) => (

                    <div
                      className="ordered-product"
                      key={product.product_id}
                    >

                      <div>
                        <h4>
                          {product.product_name}
                        </h4>

                        <p>
                          Added by: {product.added_by}
                        </p>
                      </div>

                      <div className="product-order-info">

                        <span>
                          Qty: {product.quantity}
                        </span>

                        <span>
                          ₹{product.price}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>


                {/* Order Bottom */}
                <div className="order-bottom">

                  <div>
                    <strong>Payment</strong>
                    <p>{order.payment_method}</p>
                  </div>

                  <div>
                    <strong>Order Date</strong>
                    <p>
                      {new Date(
                        order.created_at
                      ).toLocaleString()}
                    </p>
                  </div>

                  <div className="order-total">

                    <strong>Total Amount</strong>

                    <p>
                      ₹{order.total_amount}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </section>
    </>
  );
}

export default AdminCustomerOrders;