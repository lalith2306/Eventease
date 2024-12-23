import React, { useState } from "react";
import "./AttendeeForm.css";

const AttendeeForm = ({ addAttendee }) => {
  const [attendeeName, setAttendeeName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attendeeName.trim() === "") {
      alert("Attendee name cannot be empty.");
      return;
    }
    addAttendee({ id: Date.now(), name: attendeeName });
    setAttendeeName("");
  };

  return (
    <form className="attendee-form" onSubmit={handleSubmit}>
      <h2>Add Attendee</h2>
      <input
        type="text"
        placeholder="Enter attendee name"
        value={attendeeName}
        onChange={(e) => setAttendeeName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AttendeeForm;
