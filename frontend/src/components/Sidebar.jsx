// components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <ul>
        <li className="mb-2">
          <Link to="/" className="block p-2 hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/customers" className="block p-2 hover:bg-gray-700">
            Customers
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/bookings" className="block p-2 hover:bg-gray-700">
            Bookings
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/machines" className="block p-2 hover:bg-gray-700">
            Machines
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/invoices" className="block p-2 hover:bg-gray-700">
            Invoices
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
