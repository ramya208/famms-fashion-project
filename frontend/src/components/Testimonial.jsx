import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-title">
        <h2>Customer's Testimonial</h2>
        <div className="testimonial-line"></div>
      </div>

      <div className="testimonial-content">

        <button className="testimonial-arrow left-arrow">
          ←
        </button>

        <div className="testimonial-user">

          <img
            src="/testimonial.jpg"
            alt="Customer"
          />

          <h3>Anna Trevor</h3>

          <span>Customer</span>

        </div>

        <button className="testimonial-arrow right-arrow">
          →
        </button>

      </div>

      <p className="testimonial-text">
        Dignissimos reprehenderit repellendus nobis error quibusdam?
        Atque animi sint unde quis reprehenderit, et, perspiciatis,
        debitis totam est deserunt eius officiis ipsum ducimus ad labore
        modi voluptatibus accusantium sapiente nam! Quaerat.
      </p>

    </section>
  );
}

export default Testimonial;