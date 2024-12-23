import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching events from an API or backend
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events"); // Replace with your API endpoint
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event Management</h2>
      <button onClick={() => navigate("/add-event")}>Add Event</button>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <p>{event.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available. Please add an event.</p>
      )}
    </div>
  );
}

export default EventList;
