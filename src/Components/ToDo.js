import React from 'react';
import './css.css';
  

const ToDo = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Finish the React tutorial',
    },
    {
      id: 2,
      text: 'Start working on the new project',
    },
  ]);

  return (
    <div className="task-board-section">
      <h3>To Do</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
