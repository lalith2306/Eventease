import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulate fetching tasks from an API or backend
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks"); // Replace with your API endpoint
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks([]); // Fallback to an empty array if there's an error
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong> - {task.status ? "Completed" : "Pending"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
