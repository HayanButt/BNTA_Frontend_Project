const Task = ({task}) => {
    return ( 
        <>
            <h3>{task.content}</h3>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
        </>
     );
}
 
export default Task;