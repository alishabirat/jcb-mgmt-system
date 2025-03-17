import { useState, useEffect } from "react";
import { Home, Users, Calendar, Package, FileText, Settings, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapsed state

  // Effect to handle window resize and reset collapsed state on large devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the breakpoint for large devices
        setIsCollapsed(false); // Always expand sidebar on large devices
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct state
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Customers", icon: <Users size={20} />, path: "/customers" },
    { name: "Bookings", icon: <Calendar size={20} />, path: "/bookings" },
    { name: "Invoices", icon: <FileText size={20} />, path: "/invoices" },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 ${
        isCollapsed ? "w-40" : "w-64"
      } lg:w-64`} // Force w-64 on large devices
    >
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-white p-2 rounded-md">
          <Package size={24} className="text-gray-900" />
        </div>
        {!isCollapsed && <h1 className="text-xl font-semibold">JCB Rental Management</h1>}
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapsed state
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <div
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                active === item.name ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              {!isCollapsed && <span className="flex-1">{item.name}</span>}
              {item.notification && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
            </div>
          </Link>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800">
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          {!isCollapsed && <span>John Doe</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;