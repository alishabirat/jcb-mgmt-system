import { useState, useContext } from "react";
import { BookingContext } from "../context/BookingContext"; // Assuming customers are stored here
import { formatCurrency } from "../utils/formatCurrency"; // Custom function for currency formatting
import { getTotalAmountByCustomerId, getTotalDueByCustomerId, getTotalWorkHoursByCustomerId } from "../data/customerData";
import { Link } from "react-router-dom"; // Using React Router for navigation

export default function CustomersPage() {
  const { customers, loading } = useContext(BookingContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter customers based on search input
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customers</h1>
       <Link to={"/add-customer"}> <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          ➕ Add Customer
        </button></Link>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">Customer Management</h2>
        <p className="text-gray-500 text-sm">View and manage all your customers in one place.</p>

        <div className="flex items-center gap-4 mt-4">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <button className="border px-4 py-2 rounded-md hover:bg-gray-100">Filter</button>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md p-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Total Hours</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Due Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="border p-4 text-center">Loading customers...</td>
              </tr>
            ) : filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan="8" className="border p-4 text-center">No customers found.</td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="text-center hover:bg-gray-50">
                  <td className="border p-2">{customer.id}</td>
                  <td className="border p-2">
                    <Link to={`/customers/${customer.id}`} className="text-blue-600 hover:underline">
                      {customer.name}
                    </Link>
                  </td>
                  <td className="border p-2">{customer.contact}</td>
                  <td className="border p-2">{getTotalWorkHoursByCustomerId(customer.id)} hrs</td>
                  <td className="border p-2">{formatCurrency(getTotalAmountByCustomerId(customer.id))}</td>
                  <td className="border p-2">{formatCurrency(getTotalDueByCustomerId(customer.id))}</td>
                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="border p-2 flex justify-center space-x-2">
                    <Link to={`/customers/${customer.id}`} className="text-blue-500 hover:underline">View</Link>
                    <button className="text-gray-500 hover:text-gray-700">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
