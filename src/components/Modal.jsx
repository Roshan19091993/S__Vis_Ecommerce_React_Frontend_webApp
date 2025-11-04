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
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1050,
      }}
      onClick={handleOverlayClick}
    >
      <div
        className="position-relative"
        style={{
          backgroundColor: 'transparent', // transparent modal
          borderRadius: '12px',
          padding: '20px',
          maxWidth: '500px',
          width: '90%',
        }}
      >
        {/* Floating Close Button Lowered */}
        <button
          type="button"
          className="btn-close position-absolute"
          aria-label="Close"
          onClick={closeModal}
          style={{
            top: '24px', // move down
            right: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            padding: '6px',
          }}
        ></button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
