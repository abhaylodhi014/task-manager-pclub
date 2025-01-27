
import React, { useState } from 'react';

// TaskItem component is responsible for displaying, editing, and updating a task.
// Props: task (object), deleteTask (function), toggleComplete (function), handleUpdate (function), theme (string).
const TaskItem = ({ task, deleteTask, toggleComplete, handleUpdate, theme }) => {
  // State to manage whether the task is being edited.
  const [isEditing, setIsEditing] = useState(false);

  // State to manage the updated task details.
  const [updatedTask, setUpdatedTask] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate,
    completed: task.completed,
  });

  // Handles changes in the form inputs and updates the updatedTask state.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: type === 'checkbox' ? checked : value, // Checkbox values are set using `checked`.
    });
    e.preventDefault(); // Prevents default form behavior (unnecessary here as there’s no form submission).
  };

  // Handles the save action when editing is done.
  const handleSave = () => {
    handleUpdate(task.id, updatedTask); // Updates the task with the new data.
    setIsEditing(false); // Exits the editing mode.
  };

  return (
    <>
      {/* Wrapper for the task item. Theme-based dynamic styles applied. */}
      <div
        className="my-3 task-item"
        style={{
          backgroundColor: theme === 'dark' ? 'black' : '',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        {isEditing ? (
          // Editing mode: displays input fields for task details.
          <div className="container animate__animated animate__fadeInUp">
            <h2 className="mt-4 fs-3 fw-bold text-secondary">Update your task</h2>
            <div className="edit-task d-flex flex-column">
              {/* Input for the task title */}
              <input
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(75, 77, 105)' : 'white',
                  color: theme === 'dark' ? 'white' : 'black',
                }}
                className="form-label form-control my-3"
                type="text"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
                required
              />

              {/* Textarea for the task description */}
              <textarea
                style={{
                  backgroundColor: theme === 'dark' ? 'rgb(75, 77, 105)' : 'white',
                  color: theme === 'dark' ? 'white' : 'black',
                }}
                className="mb-3 form-control"
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
                required
              ></textarea>

              {/* Container for priority selection and due date */}
              <div className="container mx-2 d-flex justify-content-evenly">
                {/* Priority dropdown */}
                <select
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgb(75, 77, 105)' : 'white',
                    color: theme === 'dark' ? 'white' : 'black',
                  }}
                  className="rounded-4 border-2"
                  name="priority"
                  value={updatedTask.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="none">Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>

                {/* Due date input */}
                <input
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgb(75, 77, 105)' : 'white',
                    color: theme === 'dark' ? 'white' : 'black',
                  }}
                  className="rounded-3 border-1 px-2"
                  type="date"
                  name="dueDate"
                  value={updatedTask.dueDate}
                  onChange={handleChange}
                  required
                />
                {/* Save and Cancel buttons */}
                <button className="btn btn-primary rounded-3" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="btn btn-primary rounded-3"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          // View mode: displays the task details.
          <div
            className="mx-4 row animate__animated animate__zoomIn"
            style={{
              backgroundColor: theme === 'dark' ? 'black' : '',
              color: theme === 'dark' ? 'white' : 'black',
              maxWidth: '400px',
            }}
          >
            <div
              className="card border-secondary mb-3 my-3 mx-3 rounded-4"
              style={{
                backgroundColor: theme === 'dark' ? 'rgb(75, 77, 105)' : '',
                color: theme === 'dark' ? 'white' : 'black',
                maxWidth: '400px',
              }}
            >
              <div className="background">
                {/* Task title */}
                <div
                  className="card-header cardbody bg-transparent border-secondary fw-bold fs-4"
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </div>
                {/* Task body */}
                <div className="card-body">
                  <p className="card-text fw-bold fs-5 my-2">{task.description}</p>
                  <p className="my-1">Priority: {task.priority || 'none'}</p>
                  <p className="my-2 mb-3">Due Date: {task.dueDate || 'none'}</p>

                  {/* Complete and Edit/Delete buttons */}
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                  </button>
                  <i
                    className="fa-solid fa-pen-to-square mx-2"
                    onClick={() => setIsEditing(true)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-can mx-2"
                    onClick={() => deleteTask(task.id)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskItem;
