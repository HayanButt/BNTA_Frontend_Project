import Task from './Task'

const TaskList = ({currentUserTaskList, deleteTask}) => {
    
    const mappedTask = currentUserTaskList.map((task) => {
        return <Task task={task} key={task.id} deleteTask={deleteTask}/>
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <>
            <h2>tasklist</h2>
            {mappedTask}
        </>    
     );
}
 
export default TaskList
;