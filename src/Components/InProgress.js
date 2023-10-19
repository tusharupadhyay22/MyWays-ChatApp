import React from 'react';
import './css.css';


const InProgress = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 3,
      text: 'Write the code for the chat box',
    },
    {
      id: 4,
      text: 'Design the user interface for the task board',
    },
  ]);

  return (
    <div className="task-board-section">
      <h3>In Progress</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default InProgress;
