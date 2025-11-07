import React from "react";

const About = () => {
  return (
    <div className="container my-5" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4 text-center">About FUNCKY STORE</h2>

      <p className="lead text-center text-muted mb-5">
        Discover amazing products for everyone. At FUNCKY STORE, our mission is
        to bring style, quality, and value all in one place.
      </p>

      <section className="mb-4">
        <h4>Who We Are</h4>
        <p>
          FUNCKY STORE was founded with the goal of creating a unique shopping
          experience tailored for men, women, and kids. We carefully select
          trendy and timeless pieces to help you express your unique style.
        </p>
      </section>

      <section className="mb-4">
        <h4>Our Mission</h4>
        <p>
          We believe everyone deserves access to quality fashion without
          breaking the bank. Our mission is to deliver exceptional products
          along with outstanding customer service.
        </p>
      </section>

      <section className="mb-4">
        <h4>Why Shop With Us?</h4>
        <ul>
          <li>Wide variety of products for all ages and styles.</li>
          <li>Fast and reliable shipping with easy returns.</li>
          <li>Secure payments and data privacy guaranteed.</li>
          <li>Dedicated customer support available 24/7.</li>
          <li>Exclusive discounts and seasonal promotions.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>Contact Us</h4>
        <p>
          Have questions or want to learn more? Feel free to reach out via our{" "}
          <a href="/contact" className="text-danger fw-semibold">
            Contact page
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
