const express = require("express");
const app = express();
app.use(express.json());

let events = [];

app.post("/api/events", (req, res) => {
  const event = { id: Date.now(), ...req.body };
  events.push(event);
  res.status(201).send(event);
});

app.get("/api/events", (req, res) => {
  res.send(events);
});

app.delete("/api/events/:id", (req, res) => {
  events = events.filter((event) => event.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(5000, () => console.log("Server running on port 5000"));
