import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDeadline) {
      alert("Task name and deadline are required.");
      return;
    }
    addTask({ id: Date.now(), name: taskName, deadline: taskDeadline, status: "Pending" });
    setTaskName("");
    setTaskDeadline("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="date"
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
