// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";

// function AddProduct() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Product Name:", name);
//     console.log("Price:", price);
//     console.log("Image:", image);

//     alert("Product form submitted!");
//   };

//   return (
//     <div className="add-product-page">

//       <div className="add-product-box">

//         <h1>Add Product</h1>

//         <form onSubmit={handleSubmit}>

//           <label>Product Name</label>

//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label>Price</label>

//           <input
//             type="number"
//             placeholder="Enter price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />

//           <label>Product Image</label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />

//           <button type="submit">
//             Create Product
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default AddProduct;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";

// function AddProduct() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("access");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("image", image);

//     try {
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/products/",
//         {
//           method: "POST",

//           headers: {
//             Authorization: `Bearer ${token}`,
//           },

//           body: formData,
//         }
//       );

//       const data = await response.json();

//       console.log("Response:", data);

//       if (response.ok) {
//         alert("Product created successfully!");

//         // Form clear
//         setName("");
//         setPrice("");
//         setImage(null);

//         // Products page
//         navigate("/products");
//       } else {
//         console.log("Error:", data);
//         alert(JSON.stringify(data));
//       }
//     } catch (error) {
//       console.error("Create Product Error:", error);
//       alert("Server connection error");
//     }
//   };

//   return (
//     <div className="add-product-page">

//       <div className="add-product-box">

//         <h1>Add Product</h1>

//         <form onSubmit={handleSubmit}>

//           <label>Product Name</label>

//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label>Price</label>

//           <input
//             type="number"
//             placeholder="Enter price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />

//           <label>Product Image</label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />

//           <button type="submit">
//             Create Product
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default AddProduct;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await fetch(
        "/api/products/",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: formData,
        }
      );

      const data = await response.json();

      console.log("Response:", data);

      if (response.ok) {
        alert("Product created successfully!");

        // Form clear
        setName("");
        setPrice("");
        setImage(null);

        // Products page
        navigate("/products");
      } else {
        console.log("Error:", data);
        alert(JSON.stringify(data));
      }
    } catch (error) {
      console.error("Create Product Error:", error);
      alert("Server connection error");
    }
  };

  return (
    <div className="add-product-page">

      <div className="add-product-box">

        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>

          <label>Product Name</label>

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Price</label>

          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>Product Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">
            Create Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;