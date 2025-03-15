import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Calendar,
  FileText,
  Printer,
  Download,
  Eye,
} from "lucide-react";

// Mock Data (Replace with API data)
const invoices = [
  {
    id: "INV-001",
    bookingId: "BKG-123",
    date: "2024-03-15",
    dueDate: "2024-03-22",
    amount: 500,
    paidAmount: 300,
    dueAmount: 200,
    status: "Pending",
    customerName: "John Doe",
  },
  {
    id: "INV-002",
    bookingId: "BKG-124",
    date: "2024-03-10",
    dueDate: "2024-03-17",
    amount: 800,
    paidAmount: 800,
    dueAmount: 0,
    status: "Paid",
    customerName: "Jane Smith",
  },
];

// Format currency
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

export default function InvoicesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate totals
  const totalAmount = invoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0
  );
  const totalPaid = invoices.reduce(
    (sum, invoice) => sum + invoice.paidAmount,
    0
  );
  const totalDue = invoices.reduce(
    (sum, invoice) => sum + invoice.dueAmount,
    0
  );

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.bookingId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          <Plus className="mr-2 h-5 w-5" />
          Create Invoice
        </button>
      </div>

      {/* Invoice Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-600">
              Total Invoices
            </h2>
            <FileText className="text-gray-400 h-6 w-6" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatCurrency(totalAmount)}
          </p>
          <p className="text-xs text-gray-500">
            {invoices.length} invoices total
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-600">Paid</h2>
            <FileText className="text-green-500 h-6 w-6" />
          </div>
          <p className="text-2xl font-bold text-green-600">
            {formatCurrency(totalPaid)}
          </p>
          <p className="text-xs text-gray-500">
            {invoices.filter((inv) => inv.status === "Paid").length} invoices
            paid
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-600">Outstanding</h2>
            <FileText className="text-yellow-500 h-6 w-6" />
          </div>
          <p className="text-2xl font-bold text-yellow-600">
            {formatCurrency(totalDue)}
          </p>
          <p className="text-xs text-gray-500">
            {invoices.filter((inv) => inv.dueAmount > 0).length} invoices
            pending
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
          <input
            type="search"
            placeholder="Search invoices or customers..."
            className="pl-10 p-2 h-12 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center px-2 h-12  border rounded-lg text-gray-600 hover:bg-gray-100 transition">
          <Calendar className="mr-2 h-auto w-5" />
          Date Range
        </button>
      </div>

      {/* Invoices Table */}
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        {filteredInvoices.length === 0 ? (
          <div className="text-center py-6">
            <FileText className="text-gray-400 h-10 w-10 mx-auto mb-2" />
            <p className="text-lg font-semibold text-gray-700">
              No invoices found
            </p>
            <p className="text-sm text-gray-500">Try adjusting your search</p>
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Invoice #</th>
                <th className="text-left p-2">Customer Name</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Due Date</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Paid</th>
                <th className="text-left p-2">Due</th>
                <th className="text-left p-2">Status</th>
                <th className="text-right p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-t">
                  <td className="p-2">{invoice.id}</td>
                  <td className="p-2">{invoice.customerName}</td>
                  <td className="p-2">{invoice.date}</td>
                  <td className="p-2">{invoice.dueDate}</td>
                  <td className="p-2">{formatCurrency(invoice.amount)}</td>
                  <td className="p-2">{formatCurrency(invoice.paidAmount)}</td>
                  <td className="p-2">{formatCurrency(invoice.dueAmount)}</td>
                  <td className="p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        invoice.status === "Paid"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="flex items-center p-2 text-right">
                    <Printer className="inline-block text-gray-500 hover:text-gray-700 mr-2 cursor-pointer" />
                    <Download className="inline-block text-gray-500 hover:text-gray-700 mr-2 cursor-pointer" />
                    <Link
                      to={`/invoice/${invoice.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      <Eye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
