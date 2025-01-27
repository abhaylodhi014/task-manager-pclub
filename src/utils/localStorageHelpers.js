

// Function to get tasks from localStorage
export const getTasks = () => {
  // Retrieve the 'tasks' item from localStorage
  const tasks = localStorage.getItem('tasks');
  
  // If tasks exist in localStorage, parse and return them, otherwise return an empty array
  return tasks ? JSON.parse(tasks) : [];
};

// Function to save tasks to localStorage
export const saveTasks = (tasks) => {
  // Convert the tasks array to a JSON string and store it in localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to delete a task by its id
export const deleteTask = (id) => {
  // Get the current tasks, and filter out the task with the given id
  const tasks = getTasks().filter((task) => task.id !== id);
  
  // Save the updated tasks (without the deleted one) back to localStorage
  saveTasks(tasks);
};

// Function to update an existing task by its id
export const updateTask = (id, updatedTask) => {
  // Get the current tasks and map through them to update the task with the matching id
  const tasks = getTasks().map((task) => (task.id === id ? updatedTask : task));
  
  // Save the updated tasks back to localStorage
  saveTasks(tasks);
};
