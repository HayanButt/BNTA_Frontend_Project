import React from 'react';
const Task = ({ task, handleCompleted, completed, deleteTask }) => {
  if (completed) {
    return (
      <>
        <h3>{task.content}</h3>
        <p>Pet: {task.animal.name}</p>
        <p>Due date: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
        <p> {task.completed}</p>
        <button onClick={() => deleteTask(task.id)}>Delete Task</button>
      </>
    );
  }else{
  return ( 
    <>
      <h3>{task.content}</h3>
      <p>Pet: {task.animal.name}</p>
      <p>Due date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      {task.completed === true ? null :
        <label>
          Completed:
          <input 
            type="checkbox" 
            onChange={() => {
              handleCompleted(task);
            }} 
          />
        </label> 
      }
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </>
  );
}}

 
export default Task;