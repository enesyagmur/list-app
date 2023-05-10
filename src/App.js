import "./App.css";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";

function App() {
  return (
    <div className="App">
      <div className="form">
        <h1>Customer Manage System</h1>
        <CustomerForm />
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
