// services/authService.js
export const loginUser = async (credentials) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };
  
  export const logoutUser = async () => {
    await fetch("/api/logout", { method: "POST" });
  };