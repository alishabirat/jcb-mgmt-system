// services/bookingService.js
export const fetchBookings = async () => {
    const response = await fetch("/api/bookings");
    return response.json();
  };
  
  export const addBooking = async (booking) => {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    return response.json();
  };
  
  export const deleteBooking = async (id) => {
    await fetch(`/api/bookings/${id}`, { method: "DELETE" });
  };