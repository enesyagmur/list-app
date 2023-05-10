import React from "react";
import "./CustomerList.css";
import Customer from "./Customer";

const CustomerList = () => {
  const data = [
    {
      id: 1,
      name: "Marta",
    },
    {
      id: 2,
      name: "George",
    },
    {
      id: 3,
      name: "Luke",
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <Customer key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default CustomerList;
