import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-danger fs-4 mb-2" />,
      title: "Free Shipping",
      description: "Get your order delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-danger fs-2 mb-2" />,
      title: "Support 24/7",
      description: "We’re here to help you anytime, anywhere",
    },
    {
      icon: <FaMoneyBillWave className="text-danger fs-2 mb-2" />,
      title: "100% Money Back",
      description: "Full refund guarantee on eligible products",
    },
    {
      icon: <FaLock className="text-danger fs-2 mb-2" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="text-danger fs-2 mb-2" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="bg-white py-1">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              {/* Square Card */}
              <div
                className="text-center border rounded shadow-sm p-3 d-flex flex-column justify-content-center align-items-center"
                style={{
                  width: "200px",
                  height: "180px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.icon}
                <h6 className="fw-semibold mt-1">{item.title}</h6>
                <p className="text-muted small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
