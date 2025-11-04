import React from "react";
import ManCategory from "../assets/Categories/men/image3.jpg";
import WomanCategory from "../assets/Categories/women/womenImg.webp";
import KidsCategory from "../assets/Categories/Kids/kidsImg.jpg";

const CategorySection = () => {
  const categories = [
    { title: "Men", imageUrl: ManCategory },
    { title: "Women", imageUrl: WomanCategory },
    { title: "Kids", imageUrl: KidsCategory },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {categories.map((category, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div
              className="position-relative overflow-hidden rounded shadow category-card"
              style={{
                height: "250px",
                cursor: "pointer",
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-100 h-100 object-fit-cover rounded"
              />
              <div
                className="position-absolute text-white fw-bold"
                style={{
                  top: "40%",
                  left: "10%",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                }}
              >
                <h4>{category.title}</h4>
                <p className="fw-light">View All</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for hover animation */}
      <style>
        {`
          .category-card img {
            transition: transform 0.3s ease;
          }
          .category-card:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default CategorySection;
