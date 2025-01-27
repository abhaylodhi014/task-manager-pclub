// AddTask.jsx
import React, { useState } from "react";
import "animate.css"; // Importing animation styles from the animate.css library

// AddTask component allows users to add new tasks by providing a title, description, priority, and due date.
// Props:
// - addTask: Function to add the task to the task list.
// - theme: String to determine whether the theme is 'dark' or 'light'.
const AddTask = ({ addTask, theme }) => {
  // State to manage the task being added.
  const [task, setTask] = useState({
    title: "", // Task title
    description: "", // Task description
    priority: "Low", // Task priority (default is 'Low')
    dueDate: "", // Task due date
    completed: false, // Task completion status (default is false)
  });

  // Handle changes in input fields and update the task state accordingly.
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target; // Destructuring event target properties
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value, // Checkbox values use 'checked'; others use 'value'
    });
    e.preventDefault(); // Prevent default behavior for events, if any
  };

  // Handle form submission to add the task.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    console.log("date", task.dueDate, "priority", task.priority); // Log task details for debugging

    // Ensure the title and description are not empty before adding the task.
    if (task.title.trim() && task.description.trim()) {
      // Add the task using the addTask function passed via props.
      addTask(task.title, task.description, task.priority, task.dueDate);

      // Reset the task state to clear the form.
      setTask({
        title: "",
        description: "",
        priority: "Low",
        dueDate: "",
        completed: false,
      });
    }
  };

  return (
    <div className="tasks">
      {/* Heading for the Add Task form */}
      <h2 className="fs-1 fw-bold mx-4 animate__animated animate__zoomIn">
        Add Task
      </h2>

      {/* Form to input task details */}
      <form
        className="my-4 mx-5 animate__animated animate__flash"
        onSubmit={handleSubmit}
      >
        {/* Input for the task title */}
        <div>
          <label className="form-label fs-4 fw-bold">Title:</label>
          <input
            style={{
              backgroundColor: theme === "dark" ? "rgb(75, 77, 105)" : "white", // Dynamic background based on theme
              color: theme === "dark" ? "white" : "black", // Dynamic text color based on theme
            }}
            type="text"
            name="title"
            className="form-control"
            value={task.title}
            onChange={handleChange}
            required // Ensures this field is mandatory
          />
        </div>

        {/* Input for the task description */}
        <div className="my-3">
          <label className="fs-4 fw-bold">Description:</label>
          <textarea
            style={{
              backgroundColor: theme === "dark" ? "rgb(75, 77, 105)" : "white",
              color: theme === "dark" ? "white" : "black",
            }}
            className="form-control my-2"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Dropdown for selecting task priority */}
        <div className="mt-5 dropdown-center">
          <label className="mx-3 form-label fs-3 fw-bold">Priority:</label>
          <select
            style={{
              backgroundColor: theme === "dark" ? "rgb(75, 77, 105)" : "white",
              color: theme === "dark" ? "white" : "black",
            }}
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
            className="form-select-lg"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Input for selecting the due date */}
        <div className="my-4">
          <label className="mx-3 form-label fs-3 fw-bold">Due Date:</label>
          <input
            style={{
              backgroundColor: theme === "dark" ? "rgb(75, 77, 105)" : "white",
              color: theme === "dark" ? "white" : "black",
            }}
            className="fs-5 rounded-3 border-1 px-3 py-1"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button to add the task */}
        <button
          type="submit"
          className="btn btn-primary mb-5 mx-4 fs-5 fw-bold"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
