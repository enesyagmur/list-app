import React from "react";
import "./Customer.css";

const Customer = ({ name }) => {
  return (
    <div className="customer">
      <img src="https://i.pravatar.cc/50" />
      <p>{name}</p>

      <i class="fa-solid fa-trash" value={name}></i>
    </div>
  );
};

export default Customer;
