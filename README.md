# Task Manager

## Description
The **Task Manager** is a React-based web application that helps users manage their daily tasks efficiently. The application includes features like adding, updating, deleting tasks, filtering and sorting tasks, tracking progress, drag-and-drop task reordering, and reminders for due tasks. Tasks are stored persistently using the browser's `localStorage`.

## Demo
Click here to view the deployed project  [task-manager-pclub.vercel.app](https://task-manager-pclub.vercel.app/)

## Features
1. **Add Tasks**: Create new tasks with a title, description, and optional due date.
2. **Delete Tasks**: Remove tasks from the list.
3. **Update Tasks**: Edit task details such as title, description, or due date.
4. **Filters**: Filter tasks based on:
   - Completed
   - Pending
   - High Priority
5. **Search**: Search tasks by title or description.
6. **Sorting**: Sort tasks by due date or priority.
7. **Progress Tracker**: View completion progress with a circular progress bar.
8. **Drag-and-Drop**: Reorder tasks easily using drag-and-drop functionality.
9. **Reminders**: Get alerts for tasks that are due soon.
10. **Persistent Storage**: All tasks are saved in `localStorage` to maintain data across sessions.
11. **Add animation**: Add some smoth animation form [Animation css](https://animate.style/)


## Tech Stack
- **Frontend**: React.js (with hooks like `useState`, `useEffect`)
- **Styling**: CSS, animate.css (for animations)
- **Drag-and-Drop**: react-beautiful-dnd
- **Progress Bar**: react-circular-progressbar

## Setup and Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14.x.x)
- npm (comes with Node.js) or yarn

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/abhaylodhi014/task-manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
1. Add tasks by entering details in the input fields and clicking "Add Task."
2. Use filters to view tasks by status or priority.
3. Drag and drop tasks to reorder them.
4. Edit or delete tasks using the action buttons.
5. Monitor your task progress with the circular progress bar.

## Screenshots

### Screenshot 1
![App Screenshot](./public/Screenshot%202025-01-27%20193212.png)

### Screenshot 2
![App Screenshot](./public/Screenshot%202025-01-27%20193304.png)

### Screenshot 3
![App Screenshot](./public/Screenshot%202025-01-27%20192858.png)

### Screenshot 4
![App Screenshot](./public/Screenshot%202025-01-27%20192920.png)

### Screenshot 5
![App Screenshot](./public/Screenshot%202025-01-27%20193005.png)

### Screenshot 6
![App Screenshot](./public/Screenshot%202025-01-29%20013442.png)

## Contributing
Contributions are welcome! If you want to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or suggestions, contact:
- **Name**: Abhay Lodhi
- **Email**: abhaylodhi128135@gmail.com
- **GitHub**: [Abhay Lodhi](https://github.com/abhaylodhi014)
