import { useState } from "react";
import "./App.css";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";

function App() {
  const [Customers, setCustomers] = useState([]);
  const addNewCustomer = (customer) => {
    setCustomers([...Customers, customer]);
  };
  console.log(Customers);
  return (
    <div className="App">
      <div className="form">
        <h1>Customer Manage System</h1>
        <CustomerForm addNewCustomer={addNewCustomer} />
        <CustomerList customers={Customers} />
      </div>
    </div>
  );
}

export default App;

// enter a basılında inputa girilen değeri listeye ekle
