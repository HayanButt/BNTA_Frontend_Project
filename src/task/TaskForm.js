import {useState} from 'react'
import Select from 'react-select'

const TaskForm = ({saveTask, userAnimals}) => {
    const [newTask, setNewTask] = useState({
        content: "",
        dueDate: "",
        priority: "",
        completed: false,
        taskTypeId: ""
    })
   const [currentAnimal, setCurrentAnimal] = useState(null)

    const taskOptions = [
        {value: "LITTERBOX", label: "LITTERBOX", link: "Cat"},
        {value: "FEEDING", label: "FEEDING", link: "Cat"},
        {value: "GROOMING", label: "GROOMING", link: "Cat"},
        {value: "MEDICATION", label: "MEDICATION", link: "Cat"},
        {value: "WATER", label: "WATER", link: "Cat"},
        {value: "PLAYTIME", label: "PLAYTIME", link: "Cat"},
        {value: "VETERINARYCARE", label: "VETERINARYCARE", link: "Cat"},
        {value: "MEDICATION", label: "MEDICATION", link: "Dog"},
        {value: "FEEDING", label: "FEEDING", link: "Dog"},
        {value: "GROOMING", label: "GROOMING", link: "Dog"},
        {value: "WATER", label: "WATER", link: "Dog"},
        {value: "PLAYTIME", label: "PLAYTIME", link: "Dog"},
        {value: "VETERINARYCARE", label: "VETERINARYCARE", link: "Dog"},
        {value: "MAINTENANCE", label: "MAINTENANCE", link: "Fish"},
        {value: "FEEDING", label: "FEEDING", link: "Fish"}
    ]

    const animalOptions = userAnimals.map((animal) => {
        return (
            <option key={animal.id} value={animal.id}>
                {animal.name}
            </option>
        ) 
    })

    

    // const animalTypeOptions = userAnimals.animalType[1].availableTask.map((task) => {
    //     return (
    //         <option key={task.id} value={task.id}>
    //             {task}
    //         </option>
    //     )
    // })
    
    
    const handleAnimalChange = (event) => {
        const animalId = parseInt(event.target.value)
        const selectedAnimal = userAnimals.find(animal => {
            return (animal.id === animalId)

        })
        const copiedTask = {... newTask}
        copiedTask.animal = selectedAnimal
        setNewTask(copiedTask)
        setCurrentAnimal(selectedAnimal)
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

            <Select options={taskOptions.filter((task) => task.link === currentAnimal?.animalType.animalTypeName)}></Select>
            {/* <Select options={currentAnimal?.animalType.availableTasks}></Select> */}
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default TaskForm;