// import React from 'react';

// const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
//   if (!isModalOpen) return null;

//   const closeModal = () => setIsModalOpen(false);

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
//       style={{
//         backgroundColor: 'rgba(0, 0, 0, 0.6)', // dark overlay
//         zIndex: 1050,
//         backdropFilter: 'blur(4px)', // slight blur behind modal (optional)
//       }}
//       onClick={handleOverlayClick}
//     >
//       <div
//         className="position-relative shadow-lg p-4"
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.1)', // 👈 semi-transparent white
//           borderRadius: '10px',
//           maxWidth: '500px',
//           width: '90%',
//           boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//           color: 'white', // make text readable on transparent background
//           backdropFilter: 'blur(10px)', // glass-like blur effect
//           position: 'relative',
//         }}
//       >
//         {/* Close Button */}
//         <button
//           type="button"
//           className="btn-close position-absolute"
//           aria-label="Close"
//           onClick={closeModal}
//           style={{
//             top: '15px',
//             right: '15px',
//             backgroundColor: 'rgba(255, 255, 255, 0.8)',
//             borderRadius: '50%',
//             padding: '8px',
//           }}
//         ></button>

//         {/* Modal Content */}
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// Modal.jsx
// import React from "react";

// const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
//   if (!isModalOpen) return null;

//   return (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
//       style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
//       onClick={(e) => {
//         if (e.target === e.currentTarget) setIsModalOpen(false); // Close if clicked outside
//       }}
//     >
//       <div>{children}</div>
//     </div>
//   );
// };

// export default Modal;


import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
      onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
    >
      <div>{children}</div>
    </div>
  );
};

export default Modal;
