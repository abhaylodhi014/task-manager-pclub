// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Navbar component for navigation
import Alert from './components/Alert'; // Alert component to display notifications
import Home from './components/Home'; // Home component for main task management

// Helper functions to manage tasks in local storage
import { getTasks, saveTasks } from './utils/localStorageHelpers';

// React Router for handling navigation between pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'animate.css'; // Library for adding animations
import Footer from './components/Footer'; // Footer component
import About from './components/About'; // About component

// Main App component
const App = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to manage alerts (notifications)
  const [alert, setAlert] = useState(null);

  // State to manage the theme (light or dark)
  const [theme, setTheme] = useState('light');

  // useEffect hook to load tasks from local storage when the app loads
  useEffect(() => {
    setTasks(getTasks()); // Retrieve tasks from local storage
  }, []);

  // Function to display an alert message for a specific duration
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type }); // Set the alert message and type
    setTimeout(() => setAlert(null), 2000); // Clear the alert after 2 seconds
  };

  // Function to add a new task
  const addTask = (title, description, priority, dueDate) => {
    const newTask = {
      id: Date.now().toString(), // Unique ID for the task
      title, // Task title
      description, // Task description
      priority, // Task priority (Low, Medium, High)
      dueDate, // Task due date
      completed: false, // Task completion status (default: false)
    };

    // Add the new task to the list of existing tasks
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks); // Update the state with the new list of tasks
    saveTasks(updatedTasks); // Save the updated tasks list to local storage
    showAlert('Task Added successfully!', 'success'); // Show success alert
  };

  // Function to toggle between light and dark themes
  const toggleTheme = (e) => {
    setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle the theme
    document.body.style.backgroundColor = theme === 'light' ? 'dark-theme' : 'light-theme'; // Change the background color
    showAlert(`Switched to ${theme === 'light' ? 'dark' : 'light'} Mode`, 'success'); // Show success alert
    e.preventDefault(); // Prevent the default behavior of the event
  };

  // Render the application
  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? 'black' : '', // Set background color based on theme
        color: theme === 'dark' ? 'white' : 'black', // Set text color based on theme
      }}
    >
      {/* Router for managing routes */}
      <Router>
        {/* Navbar component with theme toggle functionality */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Alert component to display notifications */}
        <div style={{ height: "45px" }}>
          <Alert alert={alert} />
        </div>

        {/* Routes for different pages */}
        <Routes>
          {/* About page */}
          <Route path="/about" element={<About theme={theme} />} />

          {/* Home page (default route) */}
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                setTasks={setTasks}
                addTask={addTask}
                showAlert={showAlert}
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
        </Routes>

        {/* Footer component */}
        <Footer theme={theme} />
      </Router>
    </div>
  );
};

export default App;
