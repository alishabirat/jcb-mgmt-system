
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul >
        <li className="mb-4">
          <a href="/">Customers</a>
        </li>
        <li className="mb-4">
          <a href="/trips">Trips</a>
        </li>
        <li className="mb-4">
          <a href="/payments">Payments</a>
        </li>
        <li className="mb-4">
          <a href="/expenses">Expenses</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
