import { useState } from "react";
import "./App.css";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";

function App() {
  const [Customers, setCustomers] = useState([]);
  const addNewCustomer = (customer) => {
    setCustomers([...Customers, customer]);
  };

  const removeCustomer = (removeItem) => {
    let newCustomers = Customers.filter((item) => item !== removeItem);
    setCustomers(newCustomers);
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Customer Manage System</h1>
        <CustomerForm addNewCustomer={addNewCustomer} />
        {Customers.length === 0 && "There are no customer..."}
        {/* customers ın içi boş ise metin yazdırıyoruz */}
        <CustomerList customers={Customers} removeCustomer={removeCustomer} />
      </div>
    </div>
  );
}

export default App;

// silme işlemindeyim
