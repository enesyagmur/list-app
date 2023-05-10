import React from "react";
import "./CustomerForm.css";

const CustomerForm = ({ setInput }) => {
  const inputValue = (e) => {
    if (e.keyCode === 13) {
      setInput(e.target.value);
    }
  };

  return (
    <div>
      <input type="text" onKeyDown={inputValue}></input>
    </div>
  );
};

export default CustomerForm;
