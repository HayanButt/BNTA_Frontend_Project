import {useState} from 'react'

const TaskForm = ({saveTask, userAnimals}) => {


    const [newTask, setNewTask] = useState({
        content: "",
        dueDate: "",
        priority: "",
        completed: false
    })

    const animalOptions = userAnimals.map((animal) => {
        return (
            <option key={animal.id} value={animal.id}>
                {animal.name}
            </option>
        ) 
    })

    const animalTypeOptions = userAnimals.animalType[1].availableTask.map((task) => {
        return (
            <option key={task.id} value={task.id}>
                {task}
            </option>
        )
    })
    
    
    const handleAnimalChange = (event) => {
        const animalId = parseInt(event.target.value)
        const selectedAnimal = userAnimals.find(animal => {
            return (animal.id === animalId)

        })
        const copiedTask = {... newTask}
        copiedTask.animal = selectedAnimal
        setNewTask(copiedTask)
    }

    const handleChange =(event) => {
        const propertyName = event.target.name
        const copiedTask = {...newTask}
        copiedTask[propertyName] = event.target.value
        setNewTask(copiedTask)
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveTask(newTask);
        setNewTask({
            content: "",
            dueDate: "",
            priority: "",
            completed: false
        })
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange}
                type="text"
                name="content"
                placeholder="Enter task details"
                value={newTask.content}
            />
            <input onChange={handleChange}
                name="dueDate"
                type="date"
                placeholder="Task Due Date"

            />

            <select onChange={handleChange} name="priority">
                <option disabled-value="select-priority">Select a priority</option>
                <option value={1}>LOW</option> 
                <option value={2}>MEDIUM</option>
                <option value={3}>HIGH</option>
            </select>

            <select onChange={handleAnimalChange} name="userAnimals">
                <option disabled-value="select-animal">Select an animal</option>
                {animalOptions}
            </select>

            <button type="submit">Submit</button>
        </form>
     );
}
 
export default TaskForm;