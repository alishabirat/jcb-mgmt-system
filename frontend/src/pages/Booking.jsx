import React, { useState } from "react";
import { Calendar, Plus, Search } from "lucide-react";

const bookings = [
  {
    id: "BK001",
    customer: "ABC Construction",
    machine: "JCB 3DX Backhoe Loader",
    startDate: "2023-10-15",
    endDate: "2023-10-20",
    status: "Completed",
    amount: "$2,250.00",
  },
  {
    id: "BK002",
    customer: "XYZ Developers",
    machine: "JCB 4DX Excavator",
    startDate: "2023-10-18",
    endDate: "2023-10-25",
    status: "Active",
    amount: "$3,500.00",
  },
  {
    id: "BK003",
    customer: "City Infrastructure Ltd",
    machine: "JCB Skid Steer Loader",
    startDate: "2023-10-20",
    endDate: "2023-10-27",
    status: "Active",
    amount: "$2,800.00",
  },
  {
    id: "BK004",
    customer: "Highway Builders Inc",
    machine: "JCB Telehandler",
    startDate: "2023-10-25",
    endDate: "2023-11-05",
    status: "Upcoming",
    amount: "$4,400.00",
  },
  {
    id: "BK005",
    customer: "Metro Excavation Co",
    machine: "JCB Mini Excavator",
    startDate: "2023-10-28",
    endDate: "2023-11-02",
    status: "Upcoming",
    amount: "$1,750.00",
  },
];

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customer.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "" || booking.status === statusFilter)
  );

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
        <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Booking
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Booking Management</h2>
        <p className="text-sm text-gray-500">
          View and manage all machine bookings in one place.
        </p>

        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            className="w-full md:w-[180px] px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>

          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </button>
        </div>
      </div>

      {/* Booking Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Booking ID",
                "Customer",
                "Machine",
                "Start Date",
                "End Date",
                "Status",
                "Amount",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">{booking.id}</td>
                  <td className="px-4 py-3 text-sm">{booking.customer}</td>
                  <td className="px-4 py-3 text-sm">{booking.machine}</td>
                  <td className="px-4 py-3 text-sm">{booking.startDate}</td>
                  <td className="px-4 py-3 text-sm">{booking.endDate}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                        booking.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "Completed"
                          ? "bg-blue-100 text-blue-800"
                          : booking.status === "Upcoming"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{booking.amount}</td>
                  <td className="px-4 py-3 text-sm text-right space-x-2">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                    <button className="text-gray-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
