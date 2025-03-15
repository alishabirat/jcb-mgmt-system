import { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setCustomers([
        {
          id: 1,
          name: "John Doe",
          contact: "+977-9800000000",
          email: "john@example.com",
          status: "Active",
        },
        {
          id: 2,
          name: "Jane Smith",
          contact: "+977-9811111111",
          email: "jane@example.com",
          status: "Inactive",
        },
        {
          id: 3,
          name: "Rajesh Thapa",
          contact: "+977-9822222222",
          email: "rajesh@example.com",
          status: "Active",
        },
      ]);
      setLoading(false);
    }, 1000); // Simulated delay of 1 second
  }, []);

  return (
    <BookingContext.Provider value={{ customers, loading }}>
      {children}
    </BookingContext.Provider>
  );
}
