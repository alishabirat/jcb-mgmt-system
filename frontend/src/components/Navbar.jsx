import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">JCB Trip Management</h1>
      <div>
        <a href="#" className="px-4">
          Dashboard
        </a>
        <a href="#" className="px-4">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
