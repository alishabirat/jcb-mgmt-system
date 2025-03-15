import { useState, useEffect } from "react";
import { Calendar, Users, FileText, TrendingDown } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalCustomers: 0,
    revenue: 0,
    debt: 0,
    recentBookings: [],
  });

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setStats({
        totalBookings: 142,
        totalCustomers: 89,
        revenue: 12234,
        debt: 2500,
        recentBookings: [
          {
            id: 1,
            title: "JCB 3DX - 1 day rental",
            customer: "ABC Construction",
            price: 450,
          },
          {
            id: 2,
            title: "JCB 3DX - 2 day rental",
            customer: "XYZ Builders",
            price: 900,
          },
          {
            id: 3,
            title: "JCB 3DX - 3 day rental",
            customer: "PQR Contractors",
            price: 1350,
          },
          {
            id: 4,
            title: "JCB 3DX - 4 day rental",
            customer: "LMN Developers",
            price: 1800,
          },
          {
            id: 5,
            title: "JCB 3DX - 5 day rental",
            customer: "EFG Infra",
            price: 2250,
          },
        ],
      });
    }, 1000);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 border rounded-lg shadow-md bg-white">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Total Bookings</h2>
            <Calendar className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalBookings}</div>
          <p className="text-xs text-gray-500">+12% from last month</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Total Customers</h2>
            <Users className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">{stats.totalCustomers}</div>
          <p className="text-xs text-gray-500">+5 new customers</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Revenue</h2>
            <FileText className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">${stats.revenue}</div>
          <p className="text-xs text-gray-500">+18% from last month</p>
        </div>

        <div className="p-4 border rounded-lg shadow-md bg-white">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Debt</h2>
            <TrendingDown className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">${stats.debt}</div>
          <p className="text-xs text-gray-500">Outstanding balance</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 p-4 border rounded-lg shadow-md bg-white  flex items-center justify-center">
          <h2 className="text-lg font-semibold">Revenue Overview</h2>
        </div>
        <div className="col-span-3 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-lg font-semibold">Recent Bookings</h2>
          <p className="text-sm text-gray-500">Latest 5 bookings</p>
          <div className="space-y-4 mt-4">
            {stats.recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 border-b pb-2"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                  <Calendar className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{booking.title}</p>
                  <p className="text-xs text-gray-500">
                    Customer: {booking.customer}
                  </p>
                </div>
                <div className="text-sm font-medium">${booking.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
