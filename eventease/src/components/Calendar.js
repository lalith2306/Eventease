import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


function EventCalendar({ events }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const eventsForDate = events.filter(
    (event) => new Date(event.date).toDateString() === date.toDateString()
  );

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <h3>Events on {date.toDateString()}</h3>
      <ul>
        {eventsForDate.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventCalendar;
