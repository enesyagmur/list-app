import React from "react";
import "./Customer.css";

const Customer = ({ name }) => {
  return (
    <div className="customer">
      <img src="https://i.pravatar.cc/50" />
      <p>{name}</p>
      <button>-</button>
    </div>
  );
};

export default Customer;
