import { useState } from "react";
import "./App.css";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";

function App() {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="App">
      <div className="form">
        <h1>Customer Manage System</h1>
        <CustomerForm setInput={setInput} />
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
