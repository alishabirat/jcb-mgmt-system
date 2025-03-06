import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">JCB Trip Management</h1>
      <div>
        <Link to="" className="px-4">
          Dashboard
        </Link>
        <Link to="" className="px-4">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
