import React from 'react';
import { useState } from 'react';
const ChangeAddress = ({setAddress, setIsModalOpen}) => {

    const [newAddress, setNewAddress]=useState("")
    const onClose=()=>{
        setAddress(newAddress);
        setIsModalOpen(false);
    }
  return (
    <div className="container my-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Enter New Address"
          className="form-control"
          onChange={(e)=>setNewAddress(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2"
        onClick={()=>setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button className="btn btn-primary"
        onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
