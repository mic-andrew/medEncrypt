import React from "react";
import "./modal.css";



function Modal({ children, isOpen, closeModal }) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Patient Details</h2>
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
