import React, { useState } from "react";
import "./Customer.css";

const Customer = ({ name, removeCustomer }) => {
  const [removeItem, setremoveItem] = useState();
  if (removeItem) {
    removeCustomer(removeItem);
  }
  return (
    <div className="customer">
      <img src="https://i.pravatar.cc/50" />
      <p>{name}</p>

      <i
        class="fa-solid fa-trash"
        value={name}
        onClick={(e) => {
          setremoveItem(name);
        }}
      ></i>
    </div>
  );
};

export default Customer;
