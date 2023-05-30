import Task from './Task'

const TaskList = ({currentUserTaskList}) => {
    
    const mappedTask = currentUserTaskList.map((task) => {
        return <Task task={task} key={task.id}/>
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