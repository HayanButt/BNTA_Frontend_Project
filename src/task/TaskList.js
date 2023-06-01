import { useState } from 'react'
import Task from './Task'
const TaskList = ({ currentUserTaskList, setCurrentUserTaskList }) => {
  const [completedTaskList, setCompletedTaskList] = useState([]);
  
  const handleCompleted = (task) => {
    task.completed = true;
    const newRemainingTaskList = currentUserTaskList.filter((t) => t.id !== task.id);
    setCurrentUserTaskList(newRemainingTaskList);
    setCompletedTaskList([...completedTaskList, task]);
  }

  const deleteTask = (taskId) => {
    const newRemainingTaskList = currentUserTaskList.filter((t) => t.id !== taskId);
    setCurrentUserTaskList(newRemainingTaskList);
    const newCompletedTaskList = completedTaskList.filter((t) => t.id !== taskId);
    setCompletedTaskList(newCompletedTaskList);
  }

  const mappedTask = currentUserTaskList.map((task) => (
    <Task task={task} key={task.id} handleCompleted={handleCompleted} deleteTask={deleteTask}/>
  ));

  const completedTaskMap = completedTaskList.map((task) => (
    <Task task={task} key={task.id} completed={true} deleteTask={deleteTask}/>
  ));
  
  return (
    <>
      <h2>Task List:</h2>
      {mappedTask}
      <h2>Completed Tasks:</h2>
      {completedTaskMap}
    </>    
  );
}
 
export default TaskList;