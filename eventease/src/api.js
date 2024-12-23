import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Events API
export const createEvent = (eventData) => api.post("/events", eventData);
export const getEvents = () => api.get("/events");
export const deleteEvent = (id) => api.delete(`/events/${id}`);

// Attendees API
export const createAttendee = (attendeeData) => api.post("/attendees", attendeeData);
export const getAttendees = () => api.get("/attendees");
export const deleteAttendee = (id) => api.delete(`/attendees/${id}`);

// Tasks API
export const createTask = (taskData) => api.post("/tasks", taskData);
export const getTasksForEvent = (eventId) => api.get(`/tasks?eventId=${eventId}`);
export const updateTaskStatus = (taskId, status) =>
  api.patch(`/tasks/${taskId}`, { status });
