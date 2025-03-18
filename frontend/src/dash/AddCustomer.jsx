import { useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function AddCustomerForm({ onClose }) {
  const { addCustomer } = useContext(BookingContext);
  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    email: "",
    totalWorkHours: 0,
    totalAmount: 0,
    dueAmount: 0,
    status: "Active",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer({ ...customer, id: Date.now() }); // Assigning a unique ID
    onClose(); // Close the form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact</label>
            <input
              type="text"
              name="contact"
              value={customer.contact}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Total Work Hours</label>
            <input
              type="number"
              name="totalWorkHours"
              value={customer.totalWorkHours}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              value={customer.totalAmount}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Due Amount</label>
            <input
              type="number"
              name="dueAmount"
              value={customer.dueAmount}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <select
              name="status"
              value={customer.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
