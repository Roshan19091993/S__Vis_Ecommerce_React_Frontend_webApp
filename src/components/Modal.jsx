import React from 'react';

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // dark overlay
        zIndex: 1050,
      }}
      onClick={handleOverlayClick}
    >
      <div
        className="position-relative shadow-lg"
        style={{
          backgroundColor: '#fff', // ✅ solid white background
          borderRadius: '10px',
          padding: '30px 25px',
          maxWidth: '500px',
          width: '90%',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // ✅ visible elevation
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="btn-close position-absolute"
          aria-label="Close"
          onClick={closeModal}
          style={{
            top: '15px',
            right: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            padding: '8px',
          }}
        ></button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
