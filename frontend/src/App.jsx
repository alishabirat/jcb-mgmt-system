import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import JcbDashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Customers from "./pages/Customers";
import Trips from "./pages/Trips";
import Expenses from "./pages/Expenses";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <Router>
      <div className="sticky z-10 top-0 left-0 right-0 bottom-0">
        <Navbar />
      </div>
      <div className="flex h-auto top-0 left-0 right-0 bottom-0">
        <Sidebar />
        <div className="ml-2 flex-1 p-6">
          {/* Push content to the right */}
          <Routes>
            <Route path="/" element={<JcbDashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
