import { useState } from "react";
import { Home, Users, Calendar, Package, FileText, BarChart, Settings } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Customers", icon: <Users size={20} /> },
    { name: "Bookings", icon: <Calendar size={20} /> },
    { name: "Machines", icon: <Package size={20} /> },
    { name: "Invoices", icon: <FileText size={20} /> },
    { name: "Reports", icon: <BarChart size={20} />, notification: true },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-white p-2 rounded-md">
          <Package size={24} className="text-gray-900" />
        </div>
        <h1 className="text-xl font-semibold">JCB Rental Management</h1>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
              active === item.name ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon}
            <span className="flex-1">{item.name}</span>
            {item.notification && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
          </div>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800">
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
