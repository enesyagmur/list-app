import React from "react";
import "./CustomerForm.css";

const CustomerForm = () => {

  return (
    <div className="customerform">
      <input type="text" placeholder="Add a new customer" />
      <button>+</button>
    </div>
  );
};

export default CustomerForm;
