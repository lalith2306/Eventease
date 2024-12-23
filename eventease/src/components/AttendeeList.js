import React, { useEffect, useState } from "react";

function AttendeeList() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    // Simulate fetching attendees from an API or backend
    const fetchAttendees = async () => {
      try {
        const response = await fetch("/api/attendees"); // Update with your actual API endpoint
        const data = await response.json();
        setAttendees(data);
      } catch (error) {
        console.error("Error fetching attendees:", error);
        setAttendees([]); // Fallback to an empty array if there's an error
      }
    };

    fetchAttendees();
  }, []);

  return (
    <div>
      <h2>Attendee List</h2>
      {attendees.length > 0 ? (
        <ul>
          {attendees.map((attendee, index) => (
            <li key={index}>
              {attendee.name} - {attendee.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No attendees found.</p>
      )}
    </div>
  );
}

export default AttendeeList;
