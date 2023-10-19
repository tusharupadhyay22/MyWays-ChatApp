import React from 'react';
 

const Done = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 5,
      text: 'Finish the React tutorial',
    },
  ]);

  return (
    <div className="task-board-section">
      <h3>Done</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Done;
