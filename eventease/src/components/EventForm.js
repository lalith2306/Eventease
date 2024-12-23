import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending event data to the backend
    console.log("Event Submitted:", eventData);

    // Update your backend or state here
    // For now, simulate a successful submission
    navigate("/events"); // Navigate back to EventList after submission
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
