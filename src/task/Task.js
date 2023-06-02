import React from 'react';
import catAudio from "../cat.mp3"
import dogAudio from "../dog.mp3"
import fishAudio from "../fish.mp3"
const Task = ({ task, handleCompleted, completed, deleteTask }) => {

  const catSound = new Audio(catAudio);
  const dogSound = new Audio(dogAudio);
  const fishSound = new Audio(fishAudio);

  const handleAnimalTypeSound = (task) => {
      const selectedAnimalTypeId = (task.animal.animalType.id);
      console.log(`Playing sound for animal type ${selectedAnimalTypeId}`);

      if (selectedAnimalTypeId === 1) {
          catSound.play();
      } else if (selectedAnimalTypeId === 2) {
          dogSound.play();
      } else if (selectedAnimalTypeId === 3) {
          fishSound.play();
      }
  };

  if (completed) {
    return (
      <div className="completed-task">
        <h3>{task.content}</h3>
        <p>Pet: {task.animal.name}</p>
        <p>Due date: {task.dueDate}</p>
        <p className="priority">Priority: {task.priority}</p>
        <p>Task Type: {task.taskType.taskTypeName}</p>
        <p> {task.completed}</p>
        <button onClick={() => {
          deleteTask(task.id);
          handleAnimalTypeSound(task);
        }}>Delete Task</button>
      </div>
    );
  }else{
  return ( 
    <div className="task">
      <h3>{task.content}</h3>
      <p>Pet: {task.animal.name}</p>
      <p>Due date: {task.dueDate}</p>
      <p className="priority">Priority: {task.priority}</p>
      <p>Task Type: {task.taskType.taskTypeName}</p>
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
      <button onClick={() => {
        deleteTask(task.id);
        handleAnimalTypeSound(task)
      }}>Delete Task</button>
    </div>
  );
}}

 
export default Task;