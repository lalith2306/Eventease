import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AttendeeList from "./components/AttendeeManagement/AttendeeList";
import Login from "./components/Authentication/Login";
import EventForm from "./components/EventManagement/EventForm";
import EventList from "./components/EventManagement/EventList";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskTracker/TaskList";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>EventEase</h1>
        </header>
        <Navbar />
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />

          {/* Event Management Pages */}
          <Route path="/events" element={<EventList />} />
          <Route path="/add-event" element={<EventForm />} />

          {/* Attendee Management Page */}
          <Route path="/attendees" element={<AttendeeList />} />

          {/* Task Tracker Page */}
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
