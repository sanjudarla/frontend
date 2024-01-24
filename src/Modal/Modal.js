

import React from "react";
import '../Modal/Modal.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
       
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
