// Importing necessary dependencies and components
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import {
  deleteTask as deleteTaskHelper, // Helper function to delete a task from localStorage
  updateTask, // Helper function to update a task in localStorage
  saveTasks, // Helper function to save tasks to localStorage
  getTasks, // Helper function to fetch tasks from localStorage
} from '../utils/localStorageHelpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; // For progress visualization
import 'react-circular-progressbar/dist/styles.css'; // Styles for the progress bar
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; // For drag-and-drop functionality
import DatePicker from 'react-datepicker'; // For date selection
import 'react-datepicker/dist/react-datepicker.css'; // Styles for the date picker
import 'animate.css'; // For animations

// Tasks component to manage task-related functionalities
// Tasks component to manage task-related functionalities
const Tasks = ({ tasks, setTasks, addTask, showAlert, theme }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const [filter, setFilter] = useState('All'); // State for task filter
  const [sort, setSort] = useState('None'); // State for sorting tasks

  const [reminders, setReminders] = useState([]); // State for storing tasks with upcoming deadlines
  const [alertShown, setAlertShown] = useState(false); // State to track if alert has been shown

  // Fetch tasks from localStorage when the component mounts
  useEffect(() => {
    const loadedTasks = getTasks(); 
    setTasks(loadedTasks); 
  }, []);

  // Check for tasks with upcoming deadlines and display an alert
  useEffect(() => {
    const loadedTasks = getTasks(); // Fetch tasks from localStorage
    setTasks(loadedTasks); // Initialize state with loaded tasks
    
  }, []); // Empty array ensures it runs only on mount
  

  useEffect(() => {
    const now = new Date();
    const upcomingTasks = tasks.filter(
      (task) => new Date(task.dueDate) - now <= 8640000 && !task.completed
    );
    setReminders(upcomingTasks);
    if (upcomingTasks.length > 0) {
   
      if (upcomingTasks.length > 0 && !alertShown) {
        // Show the alert only if it's not shown yet
        showAlert('You have tasks due soon!', 'warning');
        setAlertShown(true);
  
        // Reset alert after a specific interval (e.g., 1 minute)
        setTimeout(() => {
          setAlertShown(false); // Allow alert to show again after 6 sec
        }, 6000); // 60,00ms = 6 sec
      }
    }
  }, [tasks, showAlert , alertShown]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    deleteTaskHelper(id);
    showAlert('Task deleted successfully!', 'success');
   
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, completed: !task.completed };
        updateTask(id, updatedTask);
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const handleUpdate = (id, updatedFields) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, ...updatedFields };
        updateTask(id, updatedTask);
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    showAlert('Task updated successfully!', 'success');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    if (filter === 'High Priority') return task.priority === 'High';
    return true;
  });

  const searchedTasks = filteredTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = searchedTasks.sort((a, b) => {
    if (sort === 'Due Date') return new Date(a.dueDate) - new Date(b.dueDate);
    if (sort === 'Priority') {
      const priorityOrder = { Low: 1, Medium: 2, High: 3 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const progress = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

 

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
    saveTasks(items);
  };

  

  return (
    <div className="container  my-3 fixed " style={{ color: theme==='dark'?'white':'black'}}>
    
      
      <AddTask addTask={addTask} theme={theme}/>
      <h2 className='my-4 mx-4 fs-1 fw-bold animate__animated animate__bounce'>Your Progress </h2>
      <div style={{ width: '30%', margin: 'auto' }} 
      className='animate__animated animate__rotateIn'>
        <CircularProgressbar
          value={progress}
          
          text={`${Math.round(progress)}%`}
          styles={buildStyles({
            textColor: theme==='dark'?'white':'black',
            pathColor: 'green',
            trailColor: '#d6d6d6',
          })}
        />
      </div>
      
      
     
      <div className='mx-2 mt-4'>
        <h2 className='mx-4 fs-1 fw-bold animate__animated animate__flipInX '>Your Task</h2>
        <div className='container ' style={{marginBottom:"-30px"}}>
        <div className=" animate__animated animate__heartBeat  my-3 tasks d-flex flex-column  justify-content-center  mx-4 " >
          {/* Dynamic CSS for placeholder */}
      <style>
        {`
          input::placeholder {
            color: ${theme==='dark' ? "white" : "black"}; 
          }
        `}
      </style>
        <input
        className='form-control rounded-5 mx-3'
        style={{backgroundColor: theme==='dark'?'rgb(75, 77, 105)':'white' , color: theme==='dark'?'white':'black' ,
          height:"45px" ,
          width:"60%" ,
          border:"1px solid"
        }}
          type="text"
          placeholder="Search tasks..."
          
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='d-felx  justify-content-center '> 
        <select
        
        style={{height:"40px" , width:"160px" , backgroundColor: theme==='dark'?'rgb(75, 77, 105)':'white' , color: theme==='dark'?'white':'black'}}
         className='my-4 mx-3 rounded-3 px-4 ' value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="High Priority">High Priority</option>
        </select>
        <select className='mx-3 rounded-3 px-4'
        style={{height:"40px" , width:"150px" , backgroundColor: theme==='dark'?'rgb(75, 77, 105)':'white' , color: theme==='dark'?'white':'black'}}
         value={sort} onChange={(e) => setSort(e.target.value)}>
        
          <option value="None">Sort By</option>
          <option value="Due Date">Due Date</option>
          <option value="Priority">Priority</option>
        </select>
        </div>
       
      </div ></div>
        </div>
      <div className='row ' >
      
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
            className='container mx-8 '
            style={{backgroundColor: theme==='dark'?'black':'' , color: theme==='dark'?'white':'black'  ,  display:"flex" ,  
               flexWrap:"wrap" ,
               justifyContent:"space-between"
                }}
    
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sortedTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                        
                       className=''
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem
                      theme={theme}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        handleUpdate={handleUpdate}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
     
    </div>
  );
};

export default Tasks;
