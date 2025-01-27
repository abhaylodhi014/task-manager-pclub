import React from 'react';
import Tasks from './Tasks';

const Home = ({ tasks, setTasks, addTask, showAlert , theme }) => {
  return (
    <div className="home ">
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
        addTask={addTask}
        showAlert={showAlert}
        theme={theme}
      />
    </div>
  );
};

export default Home;
