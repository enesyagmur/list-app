import React from "react";
import "./CustomerList.css";
import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  return (
    <div>
      {customers.map((item) => (
        <Customer name={item} />
      ))}
    </div>
  );
};

export default CustomerList;
