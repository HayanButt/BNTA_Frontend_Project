import React, { useState } from 'react';

const Task = ({task, deleteTask}) => {
    const [completed, setCompleted] = useState(false);

    const handleCompleted = () => {
        setCompleted(!completed);
      };

    
    return ( 
        <>
            <h3>{task.content}</h3>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <label>
              Completed:
              <input type="checkbox" checked={completed} onChange={handleCompleted} />
            </label>
            <button onClick={() => deleteTask(task.id)}>Delete Task</button>
        </>
     );
}
 
export default Task;