// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero">

//       <div className="hero-content">

//         <h1>
//           <span>Sale 20% Off</span>
//           <br />
//           On Everything
//         </h1>

//         <p>
//           Explicabo esse amet tempora quibusdam laudantium,
//           laborum eaque magnam fugiat hic? Esse dicta aliquid
//           error repudiandae earum suscipit fugiat molestias,
//           veniam, vel architecto veritatis delectus repellat
//           modi impedit sequi.
//         </p>

//         <button>
//           Shop Now
//         </button>

//       </div>

//       <div className="hero-image">
//         <img
//           src="/fashion.jpg"
//           alt="Fashion Model"
//         />
//       </div>

//       <div className="slider-dots">
//         <span></span>
//         <span></span>
//         <span className="active-dot"></span>
//       </div>

//     </section>
//   );
// }

// export default Hero;
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Full Background Fashion Image */}
      <div className="hero-background">
        <img
          src="/fashion.jpg"
          alt="Fashion Model"
        />
      </div>

      {/* Text on top of image */}
      <div className="hero-content">

        <h1>
          <span>Sale 20% Off</span>
          <br />
          On Everything
        </h1>

        <p>
          Explicabo esse amet tempora quibusdam laudantium,
          laborum eaque magnam fugiat hic? Esse dicta aliquid
          error repudiandae earum suscipit fugiat molestias,
          veniam, vel architecto veritatis delectus repellat
          modi impedit sequi.
        </p>

        <button>
          Shop Now
        </button>

      </div>

      {/* Slider dots */}
      <div className="slider-dots">
        <span></span>
        <span></span>
        <span className="active-dot"></span>
      </div>

    </section>
  );
}

export default Hero;