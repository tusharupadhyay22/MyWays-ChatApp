import React from 'react';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Done from './Done';
import './css.css';


const TaskBoard = () => {
  return (
    <div className="task-board">
      <ToDo />
      <InProgress />
      <Done />
    </div>
  );
};

export default TaskBoard;
