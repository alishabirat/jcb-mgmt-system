// frontend/src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="">Customers</Link>
        </li>
        <li className="mb-4">
          <Link to="">Trips</Link>
        </li>
        <li className="mb-4">
          <Link to="">Payments</Link>
        </li>
        <li className="mb-4">
          <Link to="">Expenses</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
