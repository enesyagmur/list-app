import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  return (
    <div className="customerform">
      <input
        type="text"
        placeholder="Add a new customer"
        onKeyPress={(e) => {
          if (e.target.value) {
            if (e.key === "Enter") {
              addNewCustomer(e.target.value);
              e.target.value = "";
            }
          }
        }}
      />
    </div>
  );
};

export default CustomerForm;
