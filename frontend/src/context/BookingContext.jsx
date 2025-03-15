// context/BookingContext.jsx
import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => setBookings([...bookings, booking]);
  const removeBooking = (id) => setBookings(bookings.filter(b => b.id !== id));

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};