import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage/sessionStorage or authentication token
    localStorage.removeItem("authToken"); // Or sessionStorage.removeItem() based on your app
    localStorage.removeItem("user"); // Optional: Clear user-specific data

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <h2>Are you sure you want to logout?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
