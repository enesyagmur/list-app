import React from "react";
import "./CustomerList.css";
import Customer from "./Customer";

const CustomerList = ({ customers, removeCustomer }) => {
  return (
    <div className="customerList">
      {customers.map((item) => (
        <Customer name={item} removeCustomer={removeCustomer} />
      ))}
    </div>
  );
};

export default CustomerList;
