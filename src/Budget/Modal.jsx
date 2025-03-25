import React from "react";
import { FaTimes } from "react-icons/fa";
import "./css/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        <h2>Create a New Budget</h2>
        
        <div className="modal-form">
          <label>
            Year
            <input type="number" className="modal-input" placeholder="Enter year" />
          </label>

          <label>
            Month
            <select className="custom-select">
              {months.map((month, index) => (
                <option key={index} value={index + 1}>{month}</option>
              ))}
            </select>
          </label>

          <label>
            Name
            <input type="text" className="modal-input" placeholder="Enter name" />
          </label>
        </div>
        
        <button className="btn-create-modal">Create</button>
      </div>
    </div>
  );
};

export default Modal;

