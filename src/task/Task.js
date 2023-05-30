import React, { useState } from 'react';

const Task = ({task}) => {
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
      };

    
    return ( 
        <>
            <h3>{task.content}</h3>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
        <label>
        Visited:
        <input type="checkbox" checked={visited} onChange={handleVisited} />
      </label>
        </>
     );
}
 
export default Task;