import {useState, useEffect} from 'react'
import Select from 'react-select'

const TaskForm = ({saveTask, userAnimals}) => {
    const [newTask, setNewTask] = useState({
        content: "",
        dueDate: "",
        priority: "",
        isCompleted: false,
        taskTypeId: null
    })



   const [currentAnimal, setCurrentAnimal] = useState(null)
   const [taskType, setTaskType] = useState(null)
   const [tasksToDisplay, setTasksToDisplay] = useState([])
   
    const taskOptions = [
        {value: "LITTERBOX", label: "LITTERBOX", link: "Cat", id:"6"},
        {value: "FEEDING", label: "FEEDING", link: "Cat", id:"1"},
        {value: "GROOMING", label: "GROOMING", link: "Cat", id:"2"},
        {value: "MEDICATION", label: "MEDICATION", link: "Cat", id:"3"},
        {value: "WATER", label: "WATER", link: "Cat", id:"4"},
        {value: "PLAYTIME", label: "PLAYTIME", link: "Cat", id:"5"},
        {value: "VETERINARYCARE", label: "VETERINARYCARE", link: "Cat", id:"8"},
        {value: "MEDICATION", label: "MEDICATION", link: "Dog", id:"3"},
        {value: "FEEDING", label: "FEEDING", link: "Dog", id:"1"},
        {value: "GROOMING", label: "GROOMING", link: "Dog", id:"2"},
        {value: "WATER", label: "WATER", link: "Dog", id:"4"},
        {value: "PLAYTIME", label: "PLAYTIME", link: "Dog", id:"5"},
        {value: "VETERINARYCARE", label: "VETERINARYCARE", link: "Dog", id:"8"},
        {value: "MAINTENANCE", label: "MAINTENANCE", link: "Fish", id:"7"},
        {value: "FEEDING", label: "FEEDING", link: "Fish", id:"1"}
    ]

    const animalOptions = userAnimals.map((animal) => {
        return (
            <option key={animal.id} value={animal.id}>
                {animal.name}
            </option>
        ) 
    })


    useEffect(() => {
        const updatedTask = {...newTask, animalId: currentAnimal?.id}
        setNewTask(updatedTask);
    }, [currentAnimal])
    
    
    const handleAnimalChange = (event) => {
        const animalId = parseInt(event.target.value)
        const selectedAnimal = userAnimals.find(animal => {
            return (animal.id === animalId)

        })
        const copiedTask = {... newTask}
        copiedTask.animalId = animalId
        setNewTask(copiedTask)
        setTaskType(selectedAnimal.animalType.animalTypeName)
        setCurrentAnimal(selectedAnimal)
    }

    const handleChange =(event) => {
        const propertyName = event.target.name
        const copiedTask = {...newTask}
        copiedTask[propertyName] = event.target.value
        setNewTask(copiedTask)
    }

    const handleTaskTypeChange = (event) => {
        const taskTypeId = event.target.value
        const copiedTask = {...newTask}
        copiedTask["taskTypeId"] = taskTypeId
        setNewTask(copiedTask)
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveTask(newTask);
        setNewTask({
            animalId: currentAnimal.id,
            content: "",
            dueDate: "",
            priority: "",
            isCompleted: false,
            taskTypeId: null
        })
        event.target.reset();
    }

    const filterTaskOptions = () => {
        const filteredOptions = taskOptions.filter((task) => {
            return task.link === currentAnimal?.animalType.animalTypeName
        })
        const mappedFilteredOptions = filteredOptions.map(task => {
            return <option>{task.value}</option> 
        })
        
        setTasksToDisplay(mappedFilteredOptions)
    }

    useEffect(filterTaskOptions,[taskType])

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
                <option value={0}>LOW</option> 
                <option value={1}>MEDIUM</option>
                <option value={2}>HIGH</option>
            </select>

            <select onChange={handleAnimalChange} name="userAnimals">
                <option disabled-value="select-animal">Select an animal</option>
                {animalOptions}
            </select>

            <select onChange={handleTaskTypeChange}>
                {tasksToDisplay}
            </select>       
                     {/* <Select options={currentAnimal?.animalType.availableTasks}></Select> */}
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default TaskForm;