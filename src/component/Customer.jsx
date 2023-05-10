import React from "react";
import "./Customer.css";

const Customer = ({ name, id }) => {
  const avatarLink = "https://i.pravatar.cc/5";

  return (
    <div className="customer">
      <img src={avatarLink + id} />
      <p>{name}</p>
      <button>-</button>
    </div>
  );
};

export default Customer;
