// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./EditProduct.css";

// function EditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [oldImage, setOldImage] = useState("");

//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // GET PRODUCT
//   // ==========================================

//   useEffect(() => {
//     const token = localStorage.getItem("access");

//     fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Product not found");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log("Product:", data);

//         setName(data.name);
//         setPrice(data.price);
//         setOldImage(data.image);

//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Get Product Error:", error);
//         alert("Unable to load product");
//         navigate("/products");
//       });
//   }, [id, navigate]);

//   // ==========================================
//   // UPDATE PRODUCT
//   // ==========================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("access");

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("price", price);

//     // New image selected இருந்தால் மட்டும்
//     if (image) {
//       formData.append("image", image);
//     }

//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/products/${id}/`,
//         {
//           method: "PUT",

//           headers: {
//             Authorization: `Bearer ${token}`,
//           },

//           body: formData,
//         }
//       );

//       const data = await response.json();

//       console.log("Update Response:", data);

//       if (response.ok) {
//         alert("Product updated successfully!");

//         navigate("/products");
//       } else {
//         console.log("Update Error:", data);

//         alert(JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Update Error:", error);

//       alert("Server connection error");
//     }
//   };

//   // ==========================================
//   // LOADING
//   // ==========================================

//   if (loading) {
//     return <h2>Loading product...</h2>;
//   }

//   // ==========================================
//   // FORM
//   // ==========================================

//   return (
//     <div className="edit-product-page">

//       <div className="edit-product-box">

//         <h1>Edit Product</h1>

//         <form onSubmit={handleSubmit}>

//           {/* Product Name */}

//           <label>
//             Product Name
//           </label>

//           <input
//             type="text"
//             value={name}
//             onChange={(e) =>
//               setName(e.target.value)
//             }
//             required
//           />

//           {/* Price */}

//           <label>
//             Price
//           </label>

//           <input
//             type="number"
//             value={price}
//             onChange={(e) =>
//               setPrice(e.target.value)
//             }
//             required
//           />

//           {/* Old Image */}

//           {oldImage && (
//             <div className="old-image">

//               <label>
//                 Current Image
//               </label>

//               <img
//                 src={
//                   oldImage.startsWith("http")
//                     ? oldImage
//                     : `http://127.0.0.1:8000${oldImage}`
//                 }
//                 alt={name}
//               />

//             </div>
//           )}

//           {/* New Image */}

//           <label>
//             Change Image
//           </label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               setImage(e.target.files[0])
//             }
//           />

//           {/* Update */}

//           <button type="submit">
//             Update Product
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default EditProduct;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // ==========================================
  // GET PRODUCT
  // ==========================================

  useEffect(() => {
    const getProduct = async () => {
      const token = localStorage.getItem("access");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          `${API_URL}/api/products/${id}/`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        console.log("Product:", data);

        if (!response.ok) {
          console.log("Get Product Error:", data);
          throw new Error("Product not found");
        }

        setName(data.name || "");
        setPrice(data.price || "");
        setOldImage(data.image || "");

        setLoading(false);
      } catch (error) {
        console.error("Get Product Error:", error);
        alert("Unable to load product");
        navigate("/products");
      }
    };

    getProduct();
  }, [id, navigate]);

  // ==========================================
  // UPDATE PRODUCT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    setUpdating(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);

    // New image selected என்றால் மட்டும்
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `${API_URL}/api/products/${id}/`,
        {
          method: "PATCH",

          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: formData,
        }
      );

      const data = await response.json();

      console.log("Update Status:", response.status);
      console.log("Update Response:", data);

      if (response.ok) {
        alert("Product updated successfully!");

        navigate("/products");
      } else {
        console.log("Update Error:", data);

        if (response.status === 401) {
          alert("Your login session expired. Please login again.");
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          localStorage.removeItem("isAdmin");
          navigate("/login");
        } else if (response.status === 403) {
          alert("You can edit only your own products.");
        } else {
          alert(
            data.detail ||
            JSON.stringify(data) ||
            "Unable to update product"
          );
        }
      }
    } catch (error) {
      console.error("Update Error:", error);
      alert("Server connection error");
    } finally {
      setUpdating(false);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  // ==========================================
  // FORM
  // ==========================================

  return (
    <div className="edit-product-page">

      <div className="edit-product-box">

        <h1>Edit Product</h1>

        <form onSubmit={handleSubmit}>

          {/* Product Name */}

          <label>
            Product Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Price */}

          <label>
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          {/* Old Image */}

          {oldImage && (
            <div className="old-image">

              <label>
                Current Image
              </label>

              <img
                src={
                  oldImage.startsWith("http")
                    ? oldImage
                    : `${API_URL}${oldImage}`
                }
                alt={name}
              />

            </div>
          )}

          {/* New Image */}

          <label>
            Change Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />

          {/* Update */}

          <button
            type="submit"
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Product"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProduct;
